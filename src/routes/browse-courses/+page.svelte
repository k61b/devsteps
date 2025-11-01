<script lang="ts">
  import * as m from '$lib/paraglide/messages';
  import { getLocale } from '$lib/paraglide/runtime';
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { courses as allCourses, courseColorClasses } from '$lib/data/courses';

  // Filters state
  let searchQuery = '';
  let selectedDuration: 'all' | 7 | 30 | 'custom' = 'all';
  let selectedLanguage: 'all' | 'en' | 'tr' = 'all';
  let selectedTechnology: string = 'all';

  // Get unique technologies
  $: allTechnologies = Array.from(
    new Set(allCourses.flatMap((c) => c.technologies))
  ).sort();

  // Filtered courses
  $: filteredCourses = allCourses.filter((course) => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.technologies.some((tech) => tech.toLowerCase().includes(query));
      if (!matchesSearch) return false;
    }

    // Duration filter
    if (selectedDuration !== 'all') {
      if (selectedDuration === 'custom') {
        if (course.duration === 7 || course.duration === 30) return false;
      } else {
        if (course.duration !== selectedDuration) return false;
      }
    }

    // Language filter
    if (selectedLanguage !== 'all' && course.language !== selectedLanguage) {
      return false;
    }

    // Technology filter
    if (selectedTechnology !== 'all' && !course.technologies.includes(selectedTechnology)) {
      return false;
    }

    return true;
  });

  function clearFilters() {
    searchQuery = '';
    selectedDuration = 'all';
    selectedLanguage = 'all';
    selectedTechnology = 'all';
  }

  // Color classes for cards
  const colorClasses = courseColorClasses;
</script>

<!-- Hero Section with Navigation -->
<section class="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
  <!-- Decorative shapes -->
  <div class="absolute top-20 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
  <div class="absolute top-40 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

  <Navigation />

  <div class="relative z-10 container mx-auto px-6 py-16">
    <div class="text-center max-w-3xl mx-auto">
      <div class="inline-block px-4 py-2 bg-pink-100 border-2 border-pink-300 rounded-full text-pink-700 text-sm font-semibold mb-6">
        {m.paths_badge()}
      </div>
      <h1 class="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
        {m.browse_courses_title()}
      </h1>
      <p class="text-xl text-purple-700">
        {m.browse_courses_description()}
      </p>
    </div>
  </div>
</section>

<!-- Main Content -->
<section class="py-12 bg-amber-50 min-h-screen">
  <div class="container mx-auto px-6">
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Filters Sidebar -->
      <aside class="lg:w-64 flex-shrink-0">
        <div class="bg-white border-2 border-purple-200 rounded-3xl p-6 sticky top-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-purple-900">{m.browse_filters_title()}</h2>
            <button
              on:click={clearFilters}
              class="text-sm text-purple-600 hover:text-purple-800 underline transition"
            >
              {m.browse_clear_filters()}
            </button>
          </div>

          <!-- Search -->
          <div class="mb-6">
            <input
              type="text"
              bind:value={searchQuery}
              placeholder={m.browse_search_placeholder()}
              class="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none transition"
            />
          </div>

          <!-- Duration Filter -->
          <div class="mb-6">
            <h3 class="font-semibold text-purple-900 mb-3">{m.browse_filter_duration()}</h3>
            <div class="space-y-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="duration"
                  value="all"
                  bind:group={selectedDuration}
                  class="text-purple-500"
                />
                <span class="text-purple-700">{m.browse_filter_all()}</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="duration"
                  value={7}
                  bind:group={selectedDuration}
                  class="text-purple-500"
                />
                <span class="text-purple-700">{m.browse_filter_7days()}</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="duration"
                  value={30}
                  bind:group={selectedDuration}
                  class="text-purple-500"
                />
                <span class="text-purple-700">{m.browse_filter_30days()}</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="duration"
                  value="custom"
                  bind:group={selectedDuration}
                  class="text-purple-500"
                />
                <span class="text-purple-700">{m.browse_filter_custom()}</span>
              </label>
            </div>
          </div>

          <!-- Language Filter -->
          <div class="mb-6">
            <h3 class="font-semibold text-purple-900 mb-3">{m.browse_filter_language()}</h3>
            <div class="space-y-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="language"
                  value="all"
                  bind:group={selectedLanguage}
                  class="text-purple-500"
                />
                <span class="text-purple-700">{m.browse_filter_all()}</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="language"
                  value="en"
                  bind:group={selectedLanguage}
                  class="text-purple-500"
                />
                <span class="text-purple-700">{m.browse_filter_english()}</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="language"
                  value="tr"
                  bind:group={selectedLanguage}
                  class="text-purple-500"
                />
                <span class="text-purple-700">{m.browse_filter_turkish()}</span>
              </label>
            </div>
          </div>

          <!-- Technology Filter -->
          <div>
            <h3 class="font-semibold text-purple-900 mb-3">{m.browse_filter_technology()}</h3>
            <select
              bind:value={selectedTechnology}
              class="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none transition text-purple-700"
            >
              <option value="all">{m.browse_filter_all()}</option>
              {#each allTechnologies as tech}
                <option value={tech}>{tech}</option>
              {/each}
            </select>
          </div>
        </div>
      </aside>

      <!-- Courses Grid -->
      <div class="flex-1">
        <!-- Results count -->
        <div class="mb-6">
          <p class="text-purple-700 text-lg">
            {filteredCourses.length}
            {getLocale() === 'tr' ? 'kurs bulundu' : 'courses found'}
          </p>
        </div>

        <!-- Courses Grid -->
        {#if filteredCourses.length > 0}
          <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {#each filteredCourses as course}
              {@const colors = colorClasses[course.color]}
              <article
                id={course.id}
                class={`group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 bg-white transition duration-300 hover:-translate-y-1 ${colors.card}`}
              >
                <span class={`absolute inset-x-0 top-0 h-1 ${colors.accent}`}></span>
                <div class="relative flex h-full flex-col gap-5 p-6">
                  <!-- Header -->
                  <div class="flex items-start justify-between">
                    <div class={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${colors.badge}`}>
                      {course.duration} {m.browse_course_days()}
                    </div>
                    <div class="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600">
                      {course.level}
                    </div>
                  </div>

                  <!-- Title & Description -->
                  <div class="space-y-3">
                    <h3 class={`text-2xl font-bold ${colors.title}`}>
                      {course.title}
                    </h3>
                    <p class={`${colors.text} leading-relaxed`}>
                      {course.description}
                    </p>
                  </div>

                  <!-- Technologies -->
                  <div class="flex flex-wrap gap-2">
                    {#each course.technologies as tech}
                      <span class={`rounded-full border px-3 py-1 text-sm font-medium transition ${colors.chip}`}>
                        {tech}
                      </span>
                    {/each}
                  </div>

                  <!-- CTA Button -->
                  <a
                    href="/courses/{course.id}"
                    class={`mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${colors.button}`}
                  >
                    {m.browse_course_start()}
                    <span aria-hidden="true" class="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </article>
            {/each}
          </div>
        {:else}
          <!-- No Results -->
          <div class="text-center py-20">
            <div class="inline-block p-8 bg-white border-2 border-purple-200 rounded-3xl">
              <div class="text-6xl mb-4">🔍</div>
              <h3 class="text-2xl font-bold text-purple-900 mb-2">
                {m.browse_no_results()}
              </h3>
              <p class="text-purple-700 mb-6">
                {m.browse_no_results_description()}
              </p>
              <button
                on:click={clearFilters}
                class="px-6 py-3 bg-purple-400 text-white rounded-full font-semibold hover:bg-purple-500 transition"
              >
                {m.browse_clear_filters()}
              </button>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<Footer />

<style lang="postcss">
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
</style>
