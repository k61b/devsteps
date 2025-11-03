import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { marked, Renderer } from 'marked';
import matter from 'gray-matter';
import hljs from 'highlight.js';
import * as m from '$lib/paraglide/messages';
import type { CourseDetail } from '$lib/types/course-detail';

// Custom renderer for code blocks with syntax highlighting
const renderer = new Renderer();
renderer.code = function({ text, lang }: { text: string; lang?: string }) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      const highlighted = hljs.highlight(text, { language: lang }).value;
      return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
    } catch (err) {
      console.error('Highlight error:', err);
    }
  }
  // Default rendering without highlighting
  const escaped = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<pre><code>${escaped}</code></pre>`;
};

marked.setOptions({
  renderer,
  gfm: true,
  breaks: false
});

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export const GET: RequestHandler = async ({ params, url, fetch }) => {
  const langParam = url.searchParams.get('lang') || 'en';
  const locale = (langParam === 'tr' ? 'tr' : 'en') as 'en' | 'tr';

  try {
    const courseId = params.courseId;
    const slug = params.slug;

    const loadCourseDetail = async (lang: 'en' | 'tr'): Promise<CourseDetail | null> => {
      try {
        const module = await import(`$lib/data/course-details/${courseId}-${lang}.json`);
        return module.default as CourseDetail;
      } catch {
        return null;
      }
    };

    const localeDetail = await loadCourseDetail(locale);
    const englishDetail = locale === 'en' ? localeDetail : await loadCourseDetail('en');

    const findDayInfo = (detail: CourseDetail | null) => {
      if (!detail) return null;
      for (const day of detail.curriculum) {
        const lessonIndex = day.lessons.findIndex((lesson) => lesson.slug === slug);
        if (lessonIndex !== -1) {
          return {
            day: day.day,
            lessonIndex: lessonIndex + 1
          };
        }
      }
      return null;
    };

    const dayInfo = findDayInfo(localeDetail) ?? findDayInfo(englishDetail);

    const candidatePaths: string[] = [];

    if (dayInfo) {
      const dayFolder = `day-${String(dayInfo.day).padStart(2, '0')}`;
      candidatePaths.push(`/content/courses/${courseId}/${locale}/${dayFolder}/${slug}.md`);
      if (locale !== 'en') {
        candidatePaths.push(`/content/courses/${courseId}/en/${dayFolder}/${slug}.md`);
      }
    }

    // Legacy structure fallback
    candidatePaths.push(`/content/courses/${courseId}/${locale}/${slug}.md`);
    if (locale !== 'en') {
      candidatePaths.push(`/content/courses/${courseId}/en/${slug}.md`);
    }

    const uniquePaths = Array.from(new Set(candidatePaths));

    let rawMarkdown: string | null = null;

    for (const path of uniquePaths) {
      try {
        const response = await fetch(path);
        if (!response.ok) {
          continue;
        }
        rawMarkdown = await response.text();
        break;
      } catch (err) {
        console.warn(`Could not load lesson from ${path}:`, err);
      }
    }

    if (!rawMarkdown) {
      throw new Error('Lesson not found');
    }

    // Parse frontmatter and content (server-side only)
    const { data: metadata, content } = matter(rawMarkdown);

    // Extract table of contents before converting to HTML
    const toc: TocItem[] = [];
    const tokens = marked.lexer(content);

    tokens.forEach((token) => {
      if (token.type === 'heading' && token.depth >= 2 && token.depth <= 3) {
        const text = token.text;
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');

        toc.push({
          id,
          text,
          level: token.depth
        });
      }
    });

    // Custom renderer to add IDs to headings
    renderer.heading = function({ tokens, depth }: { tokens: any[]; depth: number }) {
      const text = this.parser.parseInline(tokens);

      if (depth >= 2 && depth <= 3) {
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        return `<h${depth} id="${id}">${text}</h${depth}>`;
      }

      return `<h${depth}>${text}</h${depth}>`;
    };

    // Convert markdown to HTML with syntax highlighting
    const html = await marked(content);

    return json({
      html,
      metadata,
      toc
    }, {
      headers: {
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (e) {
    console.error('Error reading lesson file:', e);
    throw error(404, m.error_lesson_not_found({}, { locale }));
  }
};
