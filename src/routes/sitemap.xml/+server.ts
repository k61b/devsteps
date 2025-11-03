import type { RequestHandler } from '@sveltejs/kit';
import { toCanonical } from '$lib/seo';
import { courses } from '$lib/data/courses';

const cacheSeconds = 60 * 60;

const staticPaths = ['/', '/browse-courses'];

const courseDetailModules = import.meta.glob('../../lib/data/course-details/*-en.json', {
	eager: true
}) as Record<
	string,
	{
		default: {
			id: string;
			curriculum: Array<{ lessons: Array<{ slug?: string }> }>;
		};
	}
>;

const lessonPaths = Object.values(courseDetailModules).flatMap((module) => {
	const detail = module.default;
	if (!detail?.curriculum) return [];
	return detail.curriculum.flatMap((day) =>
		day.lessons
			.filter((lesson) => typeof lesson.slug === 'string' && lesson.slug.length > 0)
			.map((lesson) => `/courses/${detail.id}/lessons/${lesson.slug}`)
	);
});

const coursePaths = courses.map((course) => `/courses/${course.id}`);

const urlSet = Array.from(new Set([...staticPaths, ...coursePaths, ...lessonPaths])).sort();

const generateSitemap = () => {
	const urls = urlSet
		.map((path) => {
			const loc = toCanonical(path);
			return `<url><loc>${loc}</loc><changefreq>weekly</changefreq></url>`;
		})
		.join('');

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
};

export const GET: RequestHandler = async () =>
	new Response(generateSitemap(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': `public, max-age=${cacheSeconds}`
		}
	});
