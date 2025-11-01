import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getLocale } from '$lib/paraglide/runtime';
import * as m from '$lib/paraglide/messages';

export const load: PageLoad = async ({ params, fetch }) => {
  try {
    const locale = getLocale();

    // Fetch the processed lesson data from API with language parameter
    const response = await fetch(`/api/lessons/${params.id}/${params.slug}?lang=${locale}`);

    if (!response.ok) {
      throw new Error(m.error_lesson_not_found());
    }

    const data = await response.json();

    return {
      courseId: params.id,
      slug: params.slug,
      html: data.html,
      metadata: data.metadata,
      toc: data.toc || []
    };
  } catch (e) {
    console.error('Error loading lesson:', e);
    throw error(404, {
      message: m.error_lesson_not_found()
    });
  }
};
