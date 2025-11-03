<script lang="ts">
  import { createDialog, createAccordion, melt } from '@melt-ui/svelte';
  import { fade } from 'svelte/transition';
  import { flyAndScale } from '$lib/utils';
  import * as m from '$lib/paraglide/messages';
  import Navigation from '$lib/components/Navigation.svelte';
  import ScrollToTop from '$lib/components/ScrollToTop.svelte';
  import TestimonialSlider from '$lib/components/TestimonialSlider.svelte';
  import { courses, courseColorClasses } from '$lib/data/courses';
  import { serializeLdJson, toCanonical } from '$lib/seo';

  // Dialog for "Get Started" modal
  const {
    elements: { trigger: dialogTrigger, overlay, content: dialogContent, close, portalled },
    states: { open },
  } = createDialog({
    forceVisible: true,
  });

  // Accordion for FAQ section
  const {
    elements: { root: accordionRoot, item, trigger: accordionTrigger, content: accordionContent },
  } = createAccordion({
    defaultValue: 'item-1',
  });

  $: features = [
    {
      title: m.feature_community_title(),
      description: m.feature_community_description(),
      icon: '🧑‍🤝‍🧑',
    },
    {
      title: m.feature_projects_title(),
      description: m.feature_projects_description(),
      icon: '🛠️',
    },
    {
      title: m.feature_free_title(),
      description: m.feature_free_description(),
      icon: '🎁',
    },
  ];

  $: faqs = [
    {
      id: 'item-1',
      question: m.faq_1_question(),
      answer: m.faq_1_answer(),
    },
    {
      id: 'item-2',
      question: m.faq_2_question(),
      answer: m.faq_2_answer(),
    },
    {
      id: 'item-3',
      question: m.faq_3_question(),
      answer: m.faq_3_answer(),
    },
  ];

  $: learningPaths = [
    {
      id: 'path-7',
      title: m.path_7_title(),
      description: m.path_7_description(),
      duration: m.path_7_duration(),
      highlights: [m.path_7_highlight_1(), m.path_7_highlight_2(), m.path_7_highlight_3()],
      badge: m.path_7_badge(),
    },
    {
      id: 'path-30',
      title: m.path_30_title(),
      description: m.path_30_description(),
      duration: m.path_30_duration(),
      highlights: [m.path_30_highlight_1(), m.path_30_highlight_2(), m.path_30_highlight_3()],
      badge: m.path_30_badge(),
      featured: true,
    },
    {
      id: 'path-custom',
      title: m.path_custom_title(),
      description: m.path_custom_description(),
      duration: m.path_custom_duration(),
      highlights: [m.path_custom_highlight_1(), m.path_custom_highlight_2(), m.path_custom_highlight_3()],
    },
  ];

  const featuredCourses = courses.filter((course) => course.featured).slice(0, 3);

  const currentYear = new Date().getFullYear();
  const canonicalUrl = toCanonical('/');
  const homepageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: m.site_title(),
    description: m.meta_home_description(),
    url: canonicalUrl
  };
</script>

<svelte:head>
  <title>{m.meta_home_title()}</title>
  <meta name="description" content={m.meta_home_description()} />
  <link rel="canonical" href={canonicalUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={m.meta_home_title()} />
  <meta property="og:description" content={m.meta_home_description()} />
  <meta property="og:url" content={canonicalUrl} />
  <meta name="twitter:title" content={m.meta_home_title()} />
  <meta name="twitter:description" content={m.meta_home_description()} />
  <script type="application/ld+json">
    {serializeLdJson(homepageSchema)}
  </script>
</svelte:head>

<!-- Navigation -->
<Navigation />

<!-- Hero Section -->
<section class="min-h-screen bg-amber-50 relative overflow-hidden pt-20">
  <!-- Decorative shapes -->
  <div class="absolute top-20 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
  <div class="absolute top-40 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
  <div class="absolute bottom-20 left-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

  <!-- Hero Content -->
  <div class="relative z-10 container mx-auto px-6 py-16 md:py-24">
    <div class="max-w-4xl mx-auto text-center">
      <div class="inline-block px-4 py-2 bg-pink-100 border-2 border-pink-300 rounded-full text-pink-700 text-sm font-semibold mb-8">
        {m.hero_badge()}
      </div>
      <h1 class="text-5xl md:text-7xl font-bold text-rose-900 mb-8 leading-tight">
        {m.hero_title()}
      </h1>
      <p class="text-xl md:text-2xl text-rose-700 mb-12 max-w-2xl mx-auto leading-relaxed">
        {m.hero_description()}
      </p>
      <div class="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center">
        <a
          href="/browse-courses"
          class="px-8 py-4 bg-rose-400 text-white rounded-full font-semibold text-lg hover:bg-rose-500 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
        >
          {m.hero_cta_primary()}
        </a>
        <a
          href="https://www.reddit.com/r/devsteps/"
          target="_blank"
          rel="noreferrer"
          class="px-8 py-4 bg-white border-2 border-rose-300 text-rose-700 rounded-full font-semibold text-lg hover:bg-rose-50 transition"
        >
          {m.hero_cta_secondary()}
        </a>
        <button
          use:melt={$dialogTrigger}
          class="px-8 py-4 bg-rose-50 border-2 border-rose-200 text-rose-700 rounded-full font-semibold text-lg hover:bg-rose-100 transition shadow-sm"
        >
          {m.hero_cta_dialog()}
        </button>
      </div>

      <!-- Testimonial Slider -->
      <TestimonialSlider />
    </div>
  </div>
</section>

<!-- Featured Courses Preview -->
<section id="courses" class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <div class="inline-block px-4 py-2 bg-rose-100 border-2 border-rose-300 rounded-full text-rose-700 text-sm font-semibold mb-4">
        {m.landing_courses_badge()}
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
        {m.landing_courses_title()}
      </h2>
      <p class="text-xl text-rose-700 max-w-2xl mx-auto">
        {m.landing_courses_description()}
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {#each featuredCourses as course}
        <article
          class={`group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 bg-white/80 backdrop-blur-sm transition duration-300 hover:-translate-y-1 ${courseColorClasses[course.color].card}`}
        >
          <span class={`absolute inset-x-0 top-0 h-1 ${courseColorClasses[course.color].accent}`}></span>
          <div class="relative flex h-full flex-col gap-6 p-8">
            <div
              class={`self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${courseColorClasses[course.color].badge}`}
            >
              {course.duration} {m.browse_course_days()}
            </div>
            <div class="space-y-3">
              <h3 class={`text-2xl font-bold ${courseColorClasses[course.color].title}`}>{course.title}</h3>
              <p class={`${courseColorClasses[course.color].text} leading-relaxed`}>{course.description}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              {#each course.technologies.slice(0, 3) as tech}
                <span class={`rounded-full px-3 py-1 text-sm font-medium transition ${courseColorClasses[course.color].chip}`}>
                  {tech}
                </span>
              {/each}
            </div>
            <a
              href="/courses/{course.id}"
              class={`mt-auto inline-flex w-max items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition transform hover:scale-105 ${courseColorClasses[course.color].button}`}
            >
              Kursa Başla
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      {/each}
    </div>

    <div class="text-center mt-12">
      <a
        href="/browse-courses"
        class="inline-flex items-center gap-2 px-6 py-3 bg-rose-400 text-white rounded-full font-semibold hover:bg-rose-500 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        {m.landing_courses_cta()}
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</section>

<!-- Features Section -->
<section id="why" class="py-20 bg-purple-50">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <div class="inline-block px-4 py-2 bg-purple-100 border-2 border-purple-300 rounded-full text-purple-700 text-sm font-semibold mb-4">
        {m.why_badge()}
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
        {m.why_title()}
      </h2>
      <p class="text-xl text-purple-700 max-w-2xl mx-auto">
        {m.why_description()}
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {#each features as feature}
        <div class="p-8 bg-white border-2 border-purple-200 rounded-3xl hover:border-purple-400 transition hover:shadow-lg transform hover:-translate-y-1">
          <div class="text-5xl mb-4">{feature.icon}</div>
          <h3 class="text-2xl font-bold text-purple-900 mb-3">{feature.title}</h3>
          <p class="text-purple-700 leading-relaxed">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Learning Paths Section -->
<section id="paths" class="py-20 bg-blue-50">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <div class="inline-block px-4 py-2 bg-blue-100 border-2 border-blue-300 rounded-full text-blue-700 text-sm font-semibold mb-4">
        {m.paths_badge()}
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
        {m.paths_title()}
      </h2>
      <p class="text-xl text-blue-700">
        {m.paths_description()}
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {#each learningPaths as path}
        {#if path.featured}
          <div class="flex h-full flex-col p-8 bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-blue-500 rounded-3xl transform scale-105 shadow-xl relative text-white">
            {#if path.badge}
              <div class="absolute w-[11rem] -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-300 border-2 border-amber-400 rounded-full text-amber-900 text-sm font-bold">
                {path.badge}
              </div>
            {/if}
            <h3 class="text-2xl font-bold mb-2">{path.title}</h3>
            <div class="text-xl font-semibold text-blue-100 mb-2 uppercase tracking-wide">{path.duration}</div>
            <p class="mb-6 text-blue-50">{path.description}</p>
            <ul class="space-y-3 mb-8 text-white">
              {#each path.highlights as highlight}
                <li class="flex items-center gap-2">
                  <span>✓</span>
                  <span>{highlight}</span>
                </li>
              {/each}
            </ul>
            <button
              use:melt={$dialogTrigger}
              class="mt-auto w-full py-3 px-6 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition shadow-lg"
            >
              {m.path_cta_primary()}
            </button>
          </div>
        {:else}
          <div class="flex h-full flex-col p-8 bg-white border-2 border-blue-200 rounded-3xl hover:border-blue-400 transition hover:-translate-y-1 hover:shadow-lg">
            {#if path.badge}
              <div class="mb-4 inline-block px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold uppercase tracking-wide">
                {path.badge}
              </div>
            {/if}
            <h3 class="text-2xl font-bold text-blue-900 mb-2">{path.title}</h3>
            <div class="text-xl font-semibold text-blue-600 mb-2 uppercase tracking-wide">{path.duration}</div>
            <p class="text-blue-700 mb-6">{path.description}</p>
            <ul class="space-y-3 mb-8 text-blue-700">
              {#each path.highlights as highlight}
                <li class="flex items-center gap-2">
                  <span class="text-blue-400">✓</span>
                  <span>{highlight}</span>
                </li>
              {/each}
            </ul>
            <button
              use:melt={$dialogTrigger}
              class="mt-auto w-full py-3 px-6 border-2 border-blue-300 text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition"
            >
              {m.path_cta_secondary()}
            </button>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<!-- FAQ Section with Melt UI Accordion -->
<section id="faq" class="py-20 bg-green-50">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <div class="inline-block px-4 py-2 bg-green-100 border-2 border-green-300 rounded-full text-green-700 text-sm font-semibold mb-4">
        {m.faq_badge()}
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-green-900 mb-4">
        {m.faq_title()}
      </h2>
      <p class="text-xl text-green-700">{m.faq_description()}</p>
    </div>

    <div class="max-w-3xl mx-auto">
      <div use:melt={$accordionRoot} class="space-y-4">
        {#each faqs as faq}
          <div use:melt={$item(faq.id)} class="bg-white border-2 border-green-200 rounded-2xl overflow-hidden">
            <button
              use:melt={$accordionTrigger(faq.id)}
              class="w-full flex items-center justify-between p-6 text-left hover:bg-green-50 transition"
            >
              <span class="font-semibold text-lg text-green-900">{faq.question}</span>
              <span class="text-green-600 transition-transform duration-200 accordion-icon">▼</span>
            </button>
            <div use:melt={$accordionContent(faq.id)} class="accordion-content">
              <p class="px-6 pb-6 text-green-700 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Community CTA Section -->
<section id="community" class="py-20 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
  <div class="container mx-auto px-6 text-center">
    <div class="max-w-3xl mx-auto p-12 bg-white/80 backdrop-blur border-2 border-purple-300 rounded-3xl shadow-xl">
      <div class="inline-block px-4 py-2 bg-purple-100 border-2 border-purple-300 rounded-full text-purple-700 text-sm font-semibold mb-6">
        {m.community_badge()}
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
        {m.community_title()}
      </h2>
      <p class="text-xl text-purple-700 mb-8">
        {m.community_description()}
      </p>
      <button
        use:melt={$dialogTrigger}
        class="px-10 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full font-semibold text-lg hover:from-purple-500 hover:to-pink-500 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        {m.community_cta()}
      </button>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="bg-rose-100 border-t-2 border-rose-200 py-12">
  <div class="container mx-auto px-6">
    <div class="grid md:grid-cols-4 gap-8 mb-8">
      <div>
        <div class="text-2xl font-bold text-rose-800 mb-4">{m.site_title()}</div>
        <p class="text-rose-700">{m.footer_description()}</p>
      </div>
      <div>
        <h4 class="font-semibold text-rose-900 mb-4">{m.footer_platform()}</h4>
        <ul class="space-y-2">
          <li><a href="#why" class="text-rose-700 hover:text-rose-900 transition">{m.nav_why()}</a></li>
          <li><a href="#paths" class="text-rose-700 hover:text-rose-900 transition">{m.nav_paths()}</a></li>
          <li><a href="#faq" class="text-rose-700 hover:text-rose-900 transition">{m.nav_faq()}</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-rose-900 mb-4">{m.footer_community()}</h4>
        <ul class="space-y-2">
          <li>
            <a
              href="https://www.reddit.com/r/devsteps/"
              target="_blank"
              rel="noreferrer"
              class="text-rose-700 hover:text-rose-900 transition"
            >
              {m.footer_reddit()}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/k61b/devsteps"
              target="_blank"
              rel="noreferrer"
              class="text-rose-700 hover:text-rose-900 transition"
            >
              {m.footer_github()}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/k61b/devsteps/pulls"
              target="_blank"
              rel="noreferrer"
              class="text-rose-700 hover:text-rose-900 transition"
            >
              {m.footer_prs()}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-rose-900 mb-4">{m.footer_resources()}</h4>
        <ul class="space-y-2">
          <li>
            <a
              href="https://github.com/k61b/devsteps#readme"
              target="_blank"
              rel="noreferrer"
              class="text-rose-700 hover:text-rose-900 transition"
            >
              {m.footer_docs()}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/k61b/devsteps/issues"
              target="_blank"
              rel="noreferrer"
              class="text-rose-700 hover:text-rose-900 transition"
            >
              {m.footer_roadmap()}
            </a>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/devsteps/"
              target="_blank"
              rel="noreferrer"
              class="text-rose-700 hover:text-rose-900 transition"
            >
              {m.footer_announcements()}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t-2 border-rose-200 pt-8 text-center">
      <p class="text-rose-600 text-sm">&copy; {currentYear} {m.site_title()}. {m.footer_copyright()}</p>
    </div>
  </div>
</footer>

<!-- Melt UI Dialog -->
{#if $open}
  <div use:melt={$portalled}>
    <div
      use:melt={$overlay}
      class="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
      transition:fade={{ duration: 150 }}
    ></div>
    <div
      use:melt={$dialogContent}
      class="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 p-8 bg-white border-2 border-rose-300 rounded-3xl shadow-2xl"
      transition:flyAndScale={{
        duration: 150,
        y: 8,
        start: 0.96,
      }}
    >
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-3xl font-bold text-rose-900">{m.dialog_title()}</h2>
        <button
          use:melt={$close}
          class="text-rose-400 hover:text-rose-600 text-3xl leading-none transition"
          aria-label={m.dialog_close()}
        >
          ×
        </button>
      </div>

      <p class="text-rose-700 mb-6 leading-relaxed">
        {m.dialog_description()}
      </p>

      <div class="space-y-4">
        <div class="flex gap-3 items-start">
          <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 font-semibold">1</span>
          <div>
            <p class="font-semibold text-rose-900">{m.dialog_step_1_title()}</p>
            <p class="text-rose-700 text-sm">{m.dialog_step_1_description()}</p>
          </div>
        </div>
        <div class="flex gap-3 items-start">
          <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 font-semibold">2</span>
          <div>
            <p class="font-semibold text-rose-900">{m.dialog_step_2_title()}</p>
            <p class="text-rose-700 text-sm">{m.dialog_step_2_description()}</p>
          </div>
        </div>
        <div class="flex gap-3 items-start">
          <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 font-semibold">3</span>
          <div>
            <p class="font-semibold text-rose-900">{m.dialog_step_3_title()}</p>
            <p class="text-rose-700 text-sm">{m.dialog_step_3_description()}</p>
          </div>
        </div>
      </div>

      <div class="mt-8 grid gap-3">
        <a
          href="https://github.com/k61b/devsteps"
          target="_blank"
          rel="noreferrer"
          class="w-full py-3 px-6 bg-rose-400 text-white rounded-xl font-semibold hover:bg-rose-500 transition shadow-lg text-center"
        >
          {m.dialog_cta_github()}
        </a>
        <a
          href="https://www.reddit.com/r/devsteps/"
          target="_blank"
          rel="noreferrer"
          class="w-full py-3 px-6 border-2 border-rose-200 text-rose-700 rounded-xl font-semibold hover:bg-rose-50 transition text-center"
        >
          {m.dialog_cta_reddit()}
        </a>
      </div>
    </div>
  </div>
{/if}

<!-- Scroll to Top Button -->
<ScrollToTop />

<style lang="postcss">
  /* Accordion icon rotation */
  button[data-state='open'] .accordion-icon {
    transform: rotate(180deg);
  }

  /* Accordion content animation */
  .accordion-content[data-state='open'] {
    animation: slideDown 0.3s ease-out;
  }

  .accordion-content[data-state='closed'] {
    animation: slideUp 0.3s ease-out;
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--bits-accordion-content-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--bits-accordion-content-height);
    }
    to {
      height: 0;
    }
  }

  /* Blob animation for hero section */
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

  .animation-delay-4000 {
    animation-delay: 4s;
  }
</style>
