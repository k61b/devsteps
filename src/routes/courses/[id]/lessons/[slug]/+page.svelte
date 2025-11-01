<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import * as m from '$lib/paraglide/messages';
  import 'highlight.js/styles/atom-one-dark.css';

  export let data: PageData;

  $: courseId = data.courseId;
  $: metadata = data.metadata;
  $: toc = data.toc || [];

  // Color scheme based on lesson type
  const typeColors: Record<string, any> = {
    reading: {
      gradient: 'from-blue-50 via-blue-100 to-cyan-50',
      badge: 'bg-blue-100 border-blue-300 text-blue-700',
      icon: '📖',
      text: 'text-blue-700',
      title: 'text-blue-900',
      accent: 'bg-blue-500',
    },
    exercise: {
      gradient: 'from-purple-50 via-purple-100 to-indigo-50',
      badge: 'bg-purple-100 border-purple-300 text-purple-700',
      icon: '💻',
      text: 'text-purple-700',
      title: 'text-purple-900',
      accent: 'bg-purple-500',
    },
    project: {
      gradient: 'from-green-50 via-green-100 to-emerald-50',
      badge: 'bg-green-100 border-green-300 text-green-700',
      icon: '🚀',
      text: 'text-green-700',
      title: 'text-green-900',
      accent: 'bg-green-500',
    },
    quiz: {
      gradient: 'from-amber-50 via-amber-100 to-yellow-50',
      badge: 'bg-amber-100 border-amber-300 text-amber-700',
      icon: '❓',
      text: 'text-amber-700',
      title: 'text-amber-900',
      accent: 'bg-amber-500',
    }
  };

  const typeLabelMap: Record<string, () => string> = {
    reading: m.course_lesson_type_reading,
    exercise: m.course_lesson_type_exercise,
    project: m.course_lesson_type_project,
    quiz: m.course_lesson_type_quiz
  };

  const getTypeLabel = (type?: string) => {
    const translate = type ? typeLabelMap[type] : undefined;
    return translate ? translate() : type ?? m.course_lesson_type_reading();
  };

  $: colors = typeColors[metadata?.type || 'reading'];

  // Add copy buttons to code blocks
  onMount(() => {
    const codeBlocks = document.querySelectorAll('.lesson-content pre');

    codeBlocks.forEach((block) => {
      // Skip if button already exists
      if (block.querySelector('.copy-button')) return;

      const button = document.createElement('button');
      button.className = 'copy-button';
      button.innerHTML = `
        <svg class="copy-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;

      button.addEventListener('click', async () => {
        const code = block.querySelector('code');
        if (!code) return;

        try {
          await navigator.clipboard.writeText(code.textContent || '');

          // Show checkmark with animation
          button.classList.add('copied');

          // Reset after 2 seconds
          setTimeout(() => {
            button.classList.remove('copied');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy code:', err);
        }
      });

      block.appendChild(button);
    });

    // Reading progress tracker
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const article = document.querySelector('article');

    const updateProgress = () => {
      if (!article || !progressBar || !progressText) return;

      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      const articleBottom = articleTop + articleHeight;
      const scrollProgress = Math.min(
        Math.max((scrollTop - articleTop + windowHeight) / articleHeight, 0),
        1
      );

      const percentage = Math.round(scrollProgress * 100);
      progressBar.style.width = `${percentage}%`;
      progressText.textContent = `${percentage}%`;
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  });
</script>

<svelte:head>
  <title>{metadata?.title || m.lesson_default_title()} | DevSteps</title>
  <meta name="description" content={metadata?.description || ''} />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br {colors.gradient} relative overflow-hidden">
  <div class="absolute top-20 right-10 w-64 h-64 bg-white/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
  <div class="absolute top-40 left-10 w-64 h-64 bg-white/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

  <Navigation />

  <div class="relative z-10 container mx-auto px-6 py-8">
    <!-- Breadcrumb -->
    <nav class="mb-6">
      <ol class="flex items-center gap-2 text-sm">
        <li><a href="/" class="text-slate-600 hover:text-slate-900 transition">{m.course_breadcrumb_home()}</a></li>
        <li class="text-slate-400">/</li>
        <li><a href="/browse-courses" class="text-slate-600 hover:text-slate-900 transition">{m.course_breadcrumb_courses()}</a></li>
        <li class="text-slate-400">/</li>
        <li><a href="/courses/{courseId}" class="text-slate-600 hover:text-slate-900 transition">{courseId}</a></li>
        <li class="text-slate-400">/</li>
        <li class="text-slate-900 font-semibold">{metadata?.title || m.lesson_default_title()}</li>
      </ol>
    </nav>

    <!-- Lesson Header -->
    <div class="max-w-4xl">
      <div class="flex items-center gap-3 mb-4">
        <span class="px-3 py-1 border-2 rounded-full text-sm font-semibold {colors.badge}">
          <span class="mr-1">{colors.icon}</span>
          {getTypeLabel(metadata?.type)}
        </span>
        {#if metadata?.duration}
          <span class="px-3 py-1 bg-white/80 border-2 border-slate-200 rounded-full text-sm font-semibold text-slate-700">
            ⏱️ {metadata.duration}
          </span>
        {/if}
      </div>

      <h1 class="text-4xl md:text-5xl font-bold {colors.title} mb-4">
        {metadata?.title || m.lesson_default_title()}
      </h1>

      {#if metadata?.description}
        <p class="text-xl {colors.text} leading-relaxed">
          {metadata.description}
        </p>
      {/if}
    </div>
  </div>
</section>

<!-- Main Content -->
<section class="py-12 bg-slate-50 min-h-screen">
  <div class="container mx-auto px-6">
    <div class="grid lg:grid-cols-12 gap-8">
      <!-- Sidebar - Table of Contents -->
      <aside class="lg:col-span-3">
        <div class="bg-white border-2 border-slate-200 rounded-2xl p-6 sticky top-6 shadow-sm">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-2xl">📑</span>
            <h3 class="font-bold text-slate-900">{m.lesson_sidebar_title()}</h3>
          </div>
          {#if toc.length > 0}
            <nav class="space-y-1">
              {#each toc as item}
                <a
                  href="#{item.id}"
                  class="block text-sm py-2 px-3 rounded-lg transition-all duration-200 {item.level === 2 ? 'font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700' : 'pl-6 text-slate-600 hover:bg-slate-50 hover:text-slate-900'}"
                >
                  <span class="inline-block w-2 h-2 rounded-full bg-current opacity-50 mr-2"></span>
                  {item.text}
                </a>
              {/each}
            </nav>
          {:else}
            <p class="text-sm text-slate-500 italic">{m.lesson_sidebar_empty()}</p>
          {/if}

          <!-- Reading Progress -->
          <div class="mt-6 pt-6 border-t-2 border-slate-100">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold text-slate-600">{m.lesson_sidebar_progress()}</span>
              <span class="text-xs font-bold text-slate-900" id="progress-text">0%</span>
            </div>
            <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div id="progress-bar" class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300" style="width: 0%"></div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="mt-6 pt-6 border-t-2 border-slate-100 space-y-2">
            <button
              type="button"
              on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors"
            >
              <span>↑</span>
              {m.lesson_sidebar_back_to_top()}
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Content Area -->
      <div class="lg:col-span-9">
        <article class="bg-white border-2 border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
          <!-- Markdown Content with Enhanced Styling -->
          <div class="lesson-content">
            {@html data.html}
          </div>

          <!-- Assignment/Task Section (for projects) -->
          {#if metadata?.type === 'project' || metadata?.type === 'exercise'}
            <div class="mt-12 pt-8 border-t-2 border-slate-200">
              <div class="bg-gradient-to-br {colors.gradient} border-2 border-slate-200 rounded-2xl p-8">
                <div class="flex items-start gap-4 mb-6">
                  <span class="text-4xl">{metadata?.type === 'project' ? '🎯' : '✍️'}</span>
                  <div>
                    <h2 class="text-2xl font-bold {colors.title} mb-2">
                      {metadata?.type === 'project' ? m.lesson_assignment_title_project() : m.lesson_assignment_title_exercise()}
                    </h2>
                    <p class="{colors.text}">
                      {m.lesson_assignment_description()}
                    </p>
                  </div>
                </div>

                <div class="bg-white/80 backdrop-blur border-2 border-slate-200 rounded-xl p-6 mb-6">
                  <h3 class="font-bold text-slate-900 mb-3">📋 {m.lesson_assignment_instructions()}</h3>
                  <ol class="space-y-3 text-slate-700">
                    <li class="flex items-start gap-2">
                      <span class="font-bold {colors.text}">1.</span>
                      <span>{m.lesson_assignment_step_1()}</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="font-bold {colors.text}">2.</span>
                      <span>{m.lesson_assignment_step_2()}</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="font-bold {colors.text}">3.</span>
                      <span>{m.lesson_assignment_step_3()}</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="font-bold {colors.text}">4.</span>
                      <span>{m.lesson_assignment_step_4()}</span>
                    </li>
                  </ol>
                </div>

                <div class="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 py-3 px-6 {colors.accent} text-white rounded-xl font-semibold hover:opacity-90 transition text-center shadow-lg"
                  >
                    {m.lesson_assignment_cta_repo()}
                  </a>
                  <a
                    href="https://www.reddit.com/r/devsteps/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 py-3 px-6 bg-white border-2 {colors.badge.replace('bg-', 'border-').split(' ')[1]} text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition text-center"
                  >
                    {m.lesson_assignment_cta_reddit()}
                  </a>
                </div>
              </div>
            </div>
          {/if}

          <!-- Navigation -->
          <div class="mt-12 pt-8 border-t-2 border-slate-200">
            <div class="flex items-center justify-between">
              <a
                href="/courses/{courseId}"
                class="flex items-center gap-2 px-6 py-3 bg-slate-100 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition"
              >
                <span>←</span>
                <span>{m.lesson_navigation_back_to_course()}</span>
              </a>

              {#if metadata?.nextLesson}
                <a
                  href="/courses/{courseId}/lessons/{metadata.nextLesson}"
                  class="flex items-center gap-2 px-6 py-3 {colors.accent} text-white rounded-xl font-semibold hover:opacity-90 transition shadow-lg"
                >
                  <span>{m.lesson_navigation_next_lesson()}</span>
                  <span>→</span>
                </a>
              {:else}
                <a
                  href="/courses/{courseId}"
                  class="flex items-center gap-2 px-6 py-3 {colors.accent} text-white rounded-xl font-semibold hover:opacity-90 transition shadow-lg"
                >
                  <span>{m.lesson_navigation_complete_course()}</span>
                  <span>✓</span>
                </a>
              {/if}
            </div>
          </div>
        </article>

        <!-- Community Engagement -->
        <div class="mt-8 bg-white border-2 border-slate-200 rounded-2xl p-8">
          <div class="text-center">
            <div class="inline-block p-4 bg-purple-100 rounded-full mb-4">
              <span class="text-4xl">💬</span>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">{m.lesson_discussion_title()}</h3>
            <p class="text-slate-600 mb-6">
              {m.lesson_discussion_description()}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.reddit.com/r/devsteps/"
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3 bg-purple-400 text-white rounded-xl font-semibold hover:bg-purple-500 transition shadow-lg"
              >
                {m.lesson_discussion_cta_reddit()}
              </a>
              <a
                href="https://github.com/k61b/devsteps/tree/main/src/lib/content/courses/{courseId}"
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3 bg-white border-2 border-purple-300 text-purple-700 rounded-xl font-semibold hover:bg-purple-50 transition"
              >
                {m.lesson_discussion_cta_github()}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

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

  /* Enhanced Lesson Content Styles */
  .lesson-content {
    /* Base Typography */
    @apply text-slate-700 leading-relaxed;
    font-size: 1.125rem;
    line-height: 1.8;
  }

  /* Headings */
  .lesson-content :global(h1),
  .lesson-content :global(h2),
  .lesson-content :global(h3),
  .lesson-content :global(h4) {
    @apply font-bold text-slate-900 scroll-mt-20;
    line-height: 1.3;
  }

  .lesson-content :global(h1) {
    @apply text-4xl mb-6 mt-12 pb-4 border-b-2 border-slate-200;
  }

  .lesson-content :global(h2) {
    @apply text-3xl mb-5 mt-10;
    position: relative;
    padding-left: 1rem;
  }

  .lesson-content :global(h2::before) {
    content: '';
    position: absolute;
    left: 0;
    top: 0.25rem;
    bottom: 0.25rem;
    width: 4px;
    background: linear-gradient(180deg, #3b82f6, #8b5cf6);
    border-radius: 2px;
  }

  .lesson-content :global(h3) {
    @apply text-2xl mb-4 mt-8 text-slate-800;
  }

  .lesson-content :global(h4) {
    @apply text-xl mb-3 mt-6 text-slate-800;
  }

  /* Paragraphs */
  .lesson-content :global(p) {
    @apply mb-6 text-slate-700;
  }

  /* Links */
  .lesson-content :global(a) {
    @apply text-blue-600 font-semibold underline decoration-2 decoration-blue-300 underline-offset-2;
    transition: all 0.2s ease;
  }

  .lesson-content :global(a:hover) {
    @apply text-blue-700 decoration-blue-500;
  }

  /* Lists */
  .lesson-content :global(ul),
  .lesson-content :global(ol) {
    @apply mb-6;
  }

  .lesson-content :global(ul > li),
  .lesson-content :global(ol > li) {
    margin-top: 0.75rem;
  }

  .lesson-content :global(ul > li:first-child),
  .lesson-content :global(ol > li:first-child) {
    margin-top: 0;
  }

  .lesson-content :global(ul) {
    @apply list-none pl-0;
  }

  .lesson-content :global(ul > li) {
    @apply relative pl-8;
  }

  .lesson-content :global(ul > li::before) {
    content: '→';
    position: absolute;
    left: 0.5rem;
    color: #3b82f6;
    font-weight: bold;
    font-size: 1.25rem;
  }

  .lesson-content :global(ol) {
    counter-reset: item;
    @apply list-none pl-0;
  }

  .lesson-content :global(ol > li) {
    counter-increment: item;
    @apply relative pl-10;
  }

  .lesson-content :global(ol > li::before) {
    content: counter(item);
    position: absolute;
    left: 0;
    top: 0;
    @apply w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center text-sm font-bold;
  }

  .lesson-content :global(li) {
    @apply text-slate-700;
  }

  /* Inline Code */
  .lesson-content :global(p code),
  .lesson-content :global(li code) {
    @apply bg-slate-100 text-slate-800 px-2 py-1 rounded font-mono text-base;
    border: 1px solid #e2e8f0;
  }

  /* Code Blocks */
  .lesson-content :global(pre) {
    @apply bg-slate-900 text-slate-100 rounded-2xl overflow-x-auto mb-8 shadow-lg border-2 border-slate-700;
    position: relative;
    padding: 2.5rem 1.5rem 1.5rem 1.5rem;
  }

  .lesson-content :global(pre code) {
    @apply bg-transparent text-slate-100 p-0 border-0 text-base font-mono leading-relaxed;
    display: block;
  }

  /* Copy Button for Code Blocks */
  .lesson-content :global(pre .copy-button) {
    position: absolute !important;
    top: 0.5rem !important;
    right: 0.5rem !important;
    background-color: rgba(51, 65, 85, 0.8) !important;
    color: rgb(203, 213, 225) !important;
    border: 1px solid #475569 !important;
    border-radius: 0.375rem !important;
    cursor: pointer !important;
    z-index: 10 !important;
    padding: 0 !important;
    backdrop-filter: blur(4px) !important;
    transition: all 0.2s ease !important;
    width: 28px !important;
    height: 28px !important;
    min-width: unset !important;
    min-height: unset !important;
    line-height: 1 !important;
  }

  .lesson-content :global(pre .copy-button:hover) {
    background-color: rgb(71, 85, 105) !important;
    color: white !important;
  }

  .lesson-content :global(pre .copy-button.copied) {
    background-color: rgb(22, 163, 74) !important;
    color: white !important;
    border-color: #16a34a !important;
    transform: scale(1.1) !important;
  }

  .lesson-content :global(pre .copy-button.copied:hover) {
    background-color: rgb(21, 128, 61) !important;
  }

  .lesson-content :global(pre .copy-button svg) {
    width: 14px !important;
    height: 14px !important;
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    transition: opacity 0.15s ease !important;
  }

  .lesson-content :global(pre .copy-button .check-icon) {
    opacity: 0 !important;
    pointer-events: none !important;
  }

  .lesson-content :global(pre .copy-button.copied .copy-icon) {
    opacity: 0 !important;
  }

  .lesson-content :global(pre .copy-button.copied .check-icon) {
    opacity: 1 !important;
  }

  /* Blockquotes - Info Callouts */
  .lesson-content :global(blockquote) {
    @apply my-8 p-6 rounded-2xl border-l-4 italic relative overflow-hidden;
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border-left-color: #3b82f6;
    box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1);
  }

  .lesson-content :global(blockquote::before) {
    content: '💡';
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2rem;
    opacity: 0.3;
  }

  .lesson-content :global(blockquote p) {
    @apply text-blue-900 mb-0;
  }

  /* Images */
  .lesson-content :global(img) {
    @apply rounded-2xl shadow-xl my-8 border-2 border-slate-200;
    max-width: 100%;
    height: auto;
  }

  /* Tables */
  .lesson-content :global(table) {
    @apply w-full my-8 border-2 border-slate-200 rounded-xl overflow-hidden;
  }

  .lesson-content :global(thead) {
    @apply bg-gradient-to-r from-slate-100 to-slate-50;
  }

  .lesson-content :global(th) {
    @apply px-6 py-4 text-left font-bold text-slate-900 border-b-2 border-slate-200;
  }

  .lesson-content :global(td) {
    @apply px-6 py-4 border-b border-slate-100;
  }

  .lesson-content :global(tbody tr:hover) {
    @apply bg-slate-50;
  }

  /* Strong/Bold */
  .lesson-content :global(strong) {
    @apply font-bold text-slate-900;
  }

  /* Horizontal Rule */
  .lesson-content :global(hr) {
    @apply my-12 border-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent;
  }

  /* Nested Lists */
  .lesson-content :global(ul ul),
  .lesson-content :global(ol ul),
  .lesson-content :global(ul ol),
  .lesson-content :global(ol ol) {
    margin-top: 0.75rem;
    margin-bottom: 0;
  }

  /* Task Lists (GitHub-style) */
  .lesson-content :global(input[type="checkbox"]) {
    @apply mr-2 w-5 h-5 rounded border-2 border-slate-300;
  }

  /* Definition Lists */
  .lesson-content :global(dl) {
    @apply my-6;
  }

  .lesson-content :global(dt) {
    @apply font-bold text-slate-900 mb-2;
  }

  .lesson-content :global(dd) {
    @apply ml-6 mb-4 text-slate-700;
  }

  /* Special Alert Boxes - if you use specific classes in markdown */
  .lesson-content :global(.alert) {
    @apply p-6 rounded-2xl mb-6 border-2;
  }

  .lesson-content :global(.alert-info) {
    @apply bg-blue-50 border-blue-300 text-blue-900;
  }

  .lesson-content :global(.alert-warning) {
    @apply bg-amber-50 border-amber-300 text-amber-900;
  }

  .lesson-content :global(.alert-success) {
    @apply bg-green-50 border-green-300 text-green-900;
  }

  .lesson-content :global(.alert-danger) {
    @apply bg-red-50 border-red-300 text-red-900;
  }

  /* Enhanced Readability - First Paragraph */
  .lesson-content :global(> p:first-of-type) {
    font-size: 1.25rem;
    line-height: 1.9;
    @apply text-slate-800 font-medium;
  }

  /* Smooth Animations */
  .lesson-content :global(*) {
    animation: fadeInUp 0.4s ease-out;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Link hover effects */
  .lesson-content :global(a::after) {
    content: '↗';
    display: inline-block;
    margin-left: 0.25rem;
    opacity: 0;
    transform: translate(-4px, 4px);
    transition: all 0.2s ease;
  }

  .lesson-content :global(a:hover::after) {
    opacity: 1;
    transform: translate(0, 0);
  }

  /* Code language badge (if you add data-language attribute) */
  .lesson-content :global(pre[data-language]::before) {
    content: attr(data-language);
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    @apply bg-slate-700 text-slate-300 px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide;
    border: 1px solid #475569;
  }

  /* Emphasis (em/italic) */
  .lesson-content :global(em) {
    @apply text-slate-800 font-medium not-italic;
    background: linear-gradient(120deg, #fef3c7 0%, #fed7aa 100%);
    padding: 0 0.25rem;
    border-radius: 0.25rem;
  }

  /* Selection styling */
  .lesson-content :global(::selection) {
    background: rgba(59, 130, 246, 0.3);
  }

  /* Focus visible for accessibility */
  .lesson-content :global(a:focus-visible) {
    outline: 3px solid #3b82f6;
    outline-offset: 3px;
    border-radius: 0.25rem;
  }

  /* Print styles */
  @media print {
    .lesson-content :global(pre .copy-button) {
      display: none;
    }
  }

  /* Responsive typography */
  @media (max-width: 768px) {
    .lesson-content {
      font-size: 1rem;
    }

    .lesson-content :global(> p:first-of-type) {
      font-size: 1.125rem;
    }

    .lesson-content :global(h1) {
      @apply text-3xl;
    }

    .lesson-content :global(h2) {
      @apply text-2xl;
    }

    .lesson-content :global(h3) {
      @apply text-xl;
    }
  }
</style>
