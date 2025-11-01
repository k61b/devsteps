import type { PageLoad } from './$types';
import type { CourseDetail } from '$lib/types/course-detail';
import { error } from '@sveltejs/kit';
import { getLocale } from '$lib/paraglide/runtime';
import * as m from '$lib/paraglide/messages';

export const load: PageLoad = async ({ params }) => {
  const locale = getLocale();

  try {
    // Try to load language-specific version first (e.g., js-7day-tr.json)
    let courseDetail;
    try {
      courseDetail = await import(`$lib/data/course-details/${params.id}-${locale}.json`);
    } catch {
      // Fallback to English version
      courseDetail = await import(`$lib/data/course-details/${params.id}-en.json`);
    }

    return {
      course: courseDetail.default as CourseDetail
    };
  } catch (e) {
    // If course not found in any language, throw 404
    throw error(404, {
      message: m.error_course_not_found()
    });
  }
};
