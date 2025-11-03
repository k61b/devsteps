<script lang="ts">
  import { goto } from '$app/navigation';
  import { createToaster, melt } from '@melt-ui/svelte';
  import type { PageData } from './$types';
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import CourseAccordion from '$lib/components/CourseAccordion.svelte';
  import * as m from '$lib/paraglide/messages';
  import { getLocale } from '$lib/paraglide/runtime';
  import {
    buildBreadcrumbSchema,
    buildCourseSchema,
    serializeLdJson,
    siteUrl,
    toCanonical
  } from '$lib/seo';

  export let data: PageData;

  $: course = data.course;

  const locale = getLocale();

  // Calculate total lessons
  $: totalLessons = course.curriculum.reduce((acc, day) => acc + day.lessons.length, 0);

  type ShareToastData = {
    title: string;
    description?: string;
  };

  const {
    elements: {
      content: toastContent,
      title: toastTitle,
      description: toastDescription,
      close: toastClose
    },
    states: { toasts: toastList },
    helpers: { addToast },
    actions: { portal: toastPortal }
  } = createToaster<ShareToastData>({
    closeDelay: 3000,
    type: 'foreground'
  });

  // Find the first lesson that has an available slug so we can deep-link into it
  $: firstLessonPath = (() => {
    for (const day of course.curriculum) {
      for (const lesson of day.lessons) {
        if (lesson.slug) {
          return `/courses/${course.id}/lessons/${lesson.slug}`;
        }
      }
    }
    return null;
  })();

  const notifyShareSuccess = () => {
    addToast({
      data: {
        title: m.course_share_toast_title(),
        description: m.course_share_toast_description()
      }
    });
  };

  const startCourse = async () => {
    if (firstLessonPath) {
      await goto(firstLessonPath);
    }
  };

  const shareCourse = async () => {
    if (typeof navigator === 'undefined') {
      return;
    }

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    try {
      if ('clipboard' in navigator && navigator.clipboard && shareUrl) {
        await navigator.clipboard.writeText(shareUrl);
        notifyShareSuccess();
        return;
      }

      if (typeof document !== 'undefined' && shareUrl) {
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'absolute';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);

        const selection = document.getSelection();
        const selectedRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);

        if (selectedRange && selection) {
          selection.removeAllRanges();
          selection.addRange(selectedRange);
        }

        if (successful) {
          notifyShareSuccess();
        } else {
          throw new Error('Copy command failed');
        }
      }
    } catch (error) {
      console.error('Failed to copy share link', error);
    }
  };

  // Color classes map
  const colorMap: Record<string, any> = {
    pink: {
      gradient: 'from-pink-50 via-pink-100 to-rose-50',
      badge: 'bg-pink-100 border-pink-300 text-pink-700',
      button: 'bg-pink-500 hover:bg-pink-600 text-white',
      buttonOutline: 'border-pink-500 text-pink-600 hover:bg-pink-50',
      text: 'text-pink-700',
      title: 'text-pink-900',
      icon: 'text-pink-500'
    },
    purple: {
      gradient: 'from-purple-50 via-purple-100 to-indigo-50',
      badge: 'bg-purple-100 border-purple-300 text-purple-700',
      button: 'bg-purple-500 hover:bg-purple-600 text-white',
      buttonOutline: 'border-purple-500 text-purple-600 hover:bg-purple-50',
      text: 'text-purple-700',
      title: 'text-purple-900',
      icon: 'text-purple-500'
    },
    blue: {
      gradient: 'from-blue-50 via-blue-100 to-cyan-50',
      badge: 'bg-blue-100 border-blue-300 text-blue-700',
      button: 'bg-blue-500 hover:bg-blue-600 text-white',
      buttonOutline: 'border-blue-500 text-blue-600 hover:bg-blue-50',
      text: 'text-blue-700',
      title: 'text-blue-900',
      icon: 'text-blue-500'
    },
    green: {
      gradient: 'from-green-50 via-green-100 to-emerald-50',
      badge: 'bg-green-100 border-green-300 text-green-700',
      button: 'bg-green-500 hover:bg-green-600 text-white',
      buttonOutline: 'border-green-500 text-green-600 hover:bg-green-50',
      text: 'text-green-700',
      title: 'text-green-900',
      icon: 'text-green-500'
    },
    amber: {
      gradient: 'from-amber-50 via-amber-100 to-yellow-50',
      badge: 'bg-amber-100 border-amber-300 text-amber-700',
      button: 'bg-amber-500 hover:bg-amber-600 text-white',
      buttonOutline: 'border-amber-500 text-amber-600 hover:bg-amber-50',
      text: 'text-amber-700',
      title: 'text-amber-900',
      icon: 'text-amber-500'
    }
  };

  $: colors = colorMap[course.color] || colorMap.purple;

  $: canonicalUrl = toCanonical(`/courses/${course.id}`);
  $: metaTitle = m.meta_course_title({ title: course.title });
  $: metaDescription = m.meta_course_description({
    title: course.title,
    duration: course.duration,
    lessons: totalLessons
  });
  $: breadcrumbSchema = buildBreadcrumbSchema([
    { name: m.course_breadcrumb_home(), url: toCanonical('/') },
    { name: m.course_breadcrumb_courses(), url: toCanonical('/browse-courses') },
    { name: course.title, url: canonicalUrl }
  ]);
  $: courseSchema = buildCourseSchema({
    name: course.title,
    description: course.description,
    url: canonicalUrl,
    providerName: m.site_title(),
    totalLessons,
    durationDays: course.duration,
    language: locale
  });
  $: lastUpdatedIso = new Date(course.lastUpdated).toISOString();
</script>

<svelte:head>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
  <link rel="canonical" href={canonicalUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={metaTitle} />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content={`${siteUrl}/favicon.svg`} />
  <meta property="article:modified_time" content={lastUpdatedIso} />
  <meta name="twitter:title" content={metaTitle} />
  <meta name="twitter:description" content={metaDescription} />
  <meta name="twitter:image" content={`${siteUrl}/favicon.svg`} />
  <script type="application/ld+json">
    {serializeLdJson(breadcrumbSchema)}
  </script>
  <script type="application/ld+json">
    {serializeLdJson(courseSchema)}
  </script>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br {colors.gradient} relative overflow-hidden">
  <!-- Decorative blobs -->
  <div class="absolute top-20 right-10 w-96 h-96 bg-white/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
  <div class="absolute top-40 left-10 w-96 h-96 bg-white/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

  <Navigation />

  <div class="relative z-10 container mx-auto px-6 py-12">
    <!-- Breadcrumb -->
    <nav class="mb-6">
      <ol class="flex items-center gap-2 text-sm">
        <li><a href="/" class="text-slate-600 hover:text-slate-900 transition">{m.course_breadcrumb_home()}</a></li>
        <li class="text-slate-400">/</li>
        <li><a href="/browse-courses" class="text-slate-600 hover:text-slate-900 transition">{m.course_breadcrumb_courses()}</a></li>
        <li class="text-slate-400">/</li>
        <li class="text-slate-900 font-semibold">{course.title}</li>
      </ol>
    </nav>

    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Main Content -->
      <div class="lg:col-span-2">
        <!-- Title and badges -->
        <div class="mb-6">
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <span class="px-3 py-1 border-2 rounded-full text-sm font-semibold {colors.badge}">
              {course.level === 'Beginner' ? m.course_level_beginner() : course.level === 'Intermediate' ? m.course_level_intermediate() : m.course_level_advanced()}
            </span>
            <span class="px-3 py-1 bg-white/80 border-2 border-slate-200 rounded-full text-sm font-semibold text-slate-700">
              {m.course_duration_days({ count: course.duration })}
            </span>
            <span class="px-3 py-1 bg-white/80 border-2 border-slate-200 rounded-full text-sm font-semibold text-slate-700">
              {course.language === 'en' ? m.course_language_english() : m.course_language_turkish()}
            </span>
          </div>

          <h1 class="text-4xl md:text-5xl font-bold {colors.title} mb-4">
            {course.title}
          </h1>

          <p class="text-xl {colors.text} leading-relaxed">
            {course.description}
          </p>
        </div>

        <!-- Contributors -->
        <div class="bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-6 mb-6">
          <h2 class="text-xl font-bold text-slate-900 mb-4">{m.course_contributors_title()}</h2>
          <div class="space-y-4">
            {#each course.contributors as contributor}
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-3xl">
                  {contributor.avatar}
                </div>
                <div class="flex-1">
                  <h3 class="font-bold text-slate-900 text-lg">{contributor.name}</h3>
                  <p class="text-sm {colors.text} font-semibold mb-1">{contributor.title}</p>
                  <p class="text-sm text-slate-600">{contributor.bio}</p>
                </div>
              </div>
            {/each}
          </div>
          {#if course.community}
            <div class="mt-4 pt-4 border-t-2 border-slate-100">
              <p class="text-sm text-slate-600">
                {m.course_contributors_count({ count: course.community.contributorsCount })}
              </p>
              {#if course.community.githubRepo}
                <a href={course.community.githubRepo} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 mt-2 text-sm {colors.text} hover:underline">
                  <span>🔗</span>
                  {m.course_github_link()}
                </a>
              {/if}
            </div>
          {/if}
        </div>
      </div>

      <!-- Sidebar - Course Card -->
      <div class="lg:col-span-1">
        <div class="bg-white border-2 border-slate-200 rounded-2xl p-6 sticky top-6 shadow-xl">
          <div class="text-center mb-6">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border-2 border-green-300 mb-3">
              <span class="text-2xl">✨</span>
              <span class="text-green-700 font-bold text-lg">{m.course_free_badge()}</span>
            </div>
            <p class="text-sm text-slate-600">{m.course_free_description()}</p>
          </div>

          <button
            type="button"
            on:click={startCourse}
            class="w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 mb-3 {colors.button} {firstLessonPath ? '' : 'opacity-60 cursor-not-allowed'}"
            disabled={!firstLessonPath}
            aria-disabled={!firstLessonPath}
          >
            {m.course_cta_start()}
          </button>

          <button
            type="button"
            on:click={shareCourse}
            class="w-full py-3 px-6 border-2 rounded-xl font-semibold transition-all duration-200 {colors.buttonOutline}"
          >
            {m.course_cta_bookmark()}
          </button>

          <!-- Course includes -->
          <div class="mt-6 pt-6 border-t-2 border-slate-100 space-y-3">
            <h3 class="font-bold text-slate-900 mb-4">{m.course_includes_title()}</h3>
            <div class="flex items-center gap-3 text-sm text-slate-700">
              <span class="text-xl">⏱️</span>
              <span>{m.course_includes_reading({ hours: course.estimatedHours })}</span>
            </div>
            <div class="flex items-center gap-3 text-sm text-slate-700">
              <span class="text-xl">📚</span>
              <span>{m.course_includes_lessons({ count: totalLessons })}</span>
            </div>
            <div class="flex items-center gap-3 text-sm text-slate-700">
              <span class="text-xl">📅</span>
              <span>{m.course_includes_path({ days: course.duration })}</span>
            </div>
            <div class="flex items-center gap-3 text-sm text-slate-700">
              <span class="text-xl">💻</span>
              <span>{m.course_includes_projects()}</span>
            </div>
            <div class="flex items-center gap-3 text-sm text-slate-700">
              <span class="text-xl">🌍</span>
              <span>{m.course_includes_community()}</span>
            </div>
            <div class="flex items-center gap-3 text-sm text-slate-700">
              <span class="text-xl">📝</span>
              <span>{m.course_includes_mdx()}</span>
            </div>
          </div>

          <!-- Last updated -->
          <div class="mt-6 pt-6 border-t-2 border-slate-100">
            <p class="text-xs text-slate-500">
              {m.course_last_updated()} {new Date(course.lastUpdated).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Main Content -->
<section class="py-12 bg-slate-50">
  <div class="container mx-auto px-6">
    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Left Column - Main Content -->
      <div class="lg:col-span-2 space-y-8">
        <!-- About This Course -->
        <div class="bg-white border-2 border-slate-200 rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-slate-900 mb-4">{m.course_about_title()}</h2>
          <p class="text-slate-700 leading-relaxed mb-6">
            {course.longDescription}
          </p>
        </div>

        <!-- What You'll Learn -->
        <div class="bg-white border-2 border-slate-200 rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-slate-900 mb-6">{m.course_what_learn_title()}</h2>
          <div class="grid md:grid-cols-2 gap-4">
            {#each course.whatYouWillLearn as item}
              <div class="flex items-start gap-3">
                <span class="text-lg {colors.icon} flex-shrink-0 mt-1">✓</span>
                <span class="text-slate-700">{item}</span>
              </div>
            {/each}
          </div>
        </div>

        <!-- Course Curriculum -->
        <div class="bg-white border-2 border-slate-200 rounded-2xl p-8">
          <div class="mb-6">
            <h2 class="text-2xl font-bold text-slate-900 mb-2">{m.course_curriculum_title()}</h2>
            <p class="text-slate-600">
              {m.course_curriculum_info({ sections: course.curriculum.length, lessons: totalLessons, hours: course.estimatedHours })}
            </p>
          </div>

          <CourseAccordion curriculum={course.curriculum} color={course.color} courseId={course.id} />
        </div>

        <!-- Requirements -->
        <div class="bg-white border-2 border-slate-200 rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-slate-900 mb-4">{m.course_requirements_title()}</h2>
          <ul class="space-y-2">
            {#each course.requirements as requirement}
              <li class="flex items-start gap-3 text-slate-700">
                <span class="text-slate-400 mt-1">•</span>
                <span>{requirement}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Who This Course Is For -->
        <div class="bg-white border-2 border-slate-200 rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-slate-900 mb-4">{m.course_audience_title()}</h2>
          <ul class="space-y-2">
            {#each course.targetAudience as audience}
              <li class="flex items-start gap-3 text-slate-700">
                <span class="{colors.icon} mt-1">→</span>
                <span>{audience}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <!-- Right Column - Features -->
      <div class="lg:col-span-1">
        <div class="bg-white border-2 border-slate-200 rounded-2xl p-6 sticky top-6">
          <h2 class="text-xl font-bold text-slate-900 mb-6">{m.course_features_title()}</h2>
          <div class="space-y-4">
            {#each course.features as feature}
              <div class="flex items-start gap-3">
                <span class="text-2xl flex-shrink-0">{feature.icon}</span>
                <div>
                  <h3 class="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                  <p class="text-sm text-slate-600">{feature.description}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{#if $toastList.length}
  <div class="fixed top-6 right-6 z-50 flex flex-col gap-3 pointer-events-none" use:toastPortal>
    {#each $toastList as toast (toast.id)}
      <div
        class="pointer-events-auto w-72 rounded-2xl border-2 border-rose-200 bg-white/95 backdrop-blur-sm shadow-xl p-4"
        use:melt={$toastContent(toast.id)}
      >
        <div class="flex items-start gap-3">
          <div class="flex-1">
            <p class="font-semibold text-rose-900" use:melt={$toastTitle(toast.id)}>
              {toast.data.title}
            </p>
            {#if toast.data.description}
              <p class="text-sm text-rose-700 mt-1" use:melt={$toastDescription(toast.id)}>
                {toast.data.description}
              </p>
            {/if}
          </div>
          <button
            class="text-rose-400 hover:text-rose-600 transition"
            aria-label={m.dialog_close()}
            use:melt={$toastClose(toast.id)}
          >
            ×
          </button>
        </div>
      </div>
    {/each}
  </div>
{/if}

<Footer />

<style lang="postcss">
  @keyframes blob {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }
</style>
