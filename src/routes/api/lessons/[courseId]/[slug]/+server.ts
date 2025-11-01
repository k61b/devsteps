import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { marked, Renderer } from 'marked';
import matter from 'gray-matter';
import hljs from 'highlight.js';
import * as m from '$lib/paraglide/messages';

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
    // Try to load language-specific file, fallback to English
    const contentPath = `/content/courses/${params.courseId}/${locale}/${params.slug}.md`;
    let rawMarkdown: string;

    try {
      // In production (Cloudflare), fetch from static assets
      // In dev, this will be served by Vite's dev server
      const response = await fetch(contentPath);
      if (!response.ok) throw new Error('File not found');
      rawMarkdown = await response.text();
    } catch {
      // Fallback to English if language-specific file not found
      const fallbackPath = `/content/courses/${params.courseId}/en/${params.slug}.md`;
      const response = await fetch(fallbackPath);
      if (!response.ok) {
        throw new Error('Lesson not found');
      }
      rawMarkdown = await response.text();
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
