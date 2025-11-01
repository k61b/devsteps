<script lang="ts">
  import type { CourseCurriculumDay } from '$lib/types/course-detail';
  import * as m from '$lib/paraglide/messages';

  export let curriculum: CourseCurriculumDay[];
  export let color: string = 'purple';
  export let courseId: string;

  // Track which days are expanded
  let expandedDays: Set<number> = new Set([1]); // First day expanded by default

  function toggleDay(day: number) {
    if (expandedDays.has(day)) {
      expandedDays.delete(day);
    } else {
      expandedDays.add(day);
    }
    expandedDays = expandedDays; // Trigger reactivity
  }

  function getLessonIcon(type: string): string {
    switch(type) {
      case 'reading': return '📖';
      case 'exercise': return '📝';
      case 'project': return '💻';
      case 'quiz': return '❓';
      default: return '📄';
    }
  }

  function getLessonTypeLabel(type: string): string {
    switch (type) {
      case 'reading':
        return m.course_lesson_type_reading();
      case 'exercise':
        return m.course_lesson_type_exercise();
      case 'project':
        return m.course_lesson_type_project();
      case 'quiz':
        return m.course_lesson_type_quiz();
      default:
        return type;
    }
  }

  // Color classes based on course color
  const colorMap: Record<string, any> = {
    pink: {
      header: 'bg-pink-50 hover:bg-pink-100 border-pink-200',
      headerActive: 'bg-pink-100 border-pink-300',
      icon: 'text-pink-600',
      text: 'text-pink-900',
      badge: 'bg-pink-100 text-pink-700',
      lesson: 'hover:bg-pink-50'
    },
    purple: {
      header: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
      headerActive: 'bg-purple-100 border-purple-300',
      icon: 'text-purple-600',
      text: 'text-purple-900',
      badge: 'bg-purple-100 text-purple-700',
      lesson: 'hover:bg-purple-50'
    },
    blue: {
      header: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
      headerActive: 'bg-blue-100 border-blue-300',
      icon: 'text-blue-600',
      text: 'text-blue-900',
      badge: 'bg-blue-100 text-blue-700',
      lesson: 'hover:bg-blue-50'
    },
    green: {
      header: 'bg-green-50 hover:bg-green-100 border-green-200',
      headerActive: 'bg-green-100 border-green-300',
      icon: 'text-green-600',
      text: 'text-green-900',
      badge: 'bg-green-100 text-green-700',
      lesson: 'hover:bg-green-50'
    },
    amber: {
      header: 'bg-amber-50 hover:bg-amber-100 border-amber-200',
      headerActive: 'bg-amber-100 border-amber-300',
      icon: 'text-amber-600',
      text: 'text-amber-900',
      badge: 'bg-amber-100 text-amber-700',
      lesson: 'hover:bg-amber-50'
    }
  };

  $: colors = colorMap[color] || colorMap.purple;
</script>

<div class="space-y-3">
  {#each curriculum as day}
    {@const isExpanded = expandedDays.has(day.day)}
    <div class="border-2 rounded-2xl overflow-hidden transition-all duration-200 {isExpanded ? colors.headerActive : 'border-slate-200'}">
      <!-- Accordion Header -->
      <button
        on:click={() => toggleDay(day.day)}
        class="w-full px-6 py-4 flex items-center justify-between transition-colors duration-200 {isExpanded ? colors.headerActive : colors.header}"
      >
        <div class="flex items-center gap-4 text-left">
          <div class="flex-shrink-0 w-10 h-10 rounded-full {colors.badge} flex items-center justify-center font-bold">
            {day.day}
          </div>
          <div>
            <h3 class="font-bold text-lg {colors.text}">{day.title}</h3>
            <p class="text-sm text-slate-600">{day.duration} • {day.lessons.length} lessons</p>
          </div>
        </div>
        <div class="flex-shrink-0 ml-4">
          <svg
            class="w-6 h-6 {colors.icon} transition-transform duration-200 {isExpanded ? 'rotate-180' : ''}"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <!-- Accordion Content -->
      {#if isExpanded}
        <div class="bg-white border-t-2 border-slate-100">
          <div class="px-6 py-4 space-y-2">
            {#each day.lessons as lesson, idx}
              {#if lesson.slug}
                <a
                  href="/courses/{courseId}/lessons/{lesson.slug}"
                  class="group flex items-start gap-3 p-3 rounded-xl transition-colors duration-150 {colors.lesson} cursor-pointer block"
                >
                  <div class="flex-shrink-0 text-xl mt-0.5">
                    {getLessonIcon(lesson.type)}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between gap-2">
                      <h4 class="font-semibold text-slate-800 group-hover:text-slate-900 group-hover:underline">
                        {lesson.title}
                      </h4>
                      <span class="flex-shrink-0 text-sm text-slate-500 font-medium">
                        {lesson.duration}
                      </span>
                    </div>
                    <p class="text-sm text-slate-600 mt-1">{lesson.description}</p>
                    <div class="mt-2 flex items-center gap-2">
                      <span class="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600 capitalize">
                        {getLessonTypeLabel(lesson.type)}
                      </span>
                    </div>
                  </div>
                </a>
              {:else}
                <div class="group flex items-start gap-3 p-3 rounded-xl transition-colors duration-150">
                  <div class="flex-shrink-0 text-xl mt-0.5">
                    {getLessonIcon(lesson.type)}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between gap-2">
                      <h4 class="font-semibold text-slate-800">
                        {lesson.title}
                      </h4>
                      <span class="flex-shrink-0 text-sm text-slate-500 font-medium">
                        {lesson.duration}
                      </span>
                    </div>
                    <p class="text-sm text-slate-600 mt-1">{lesson.description}</p>
                    <div class="mt-2 flex items-center gap-2">
                      <span class="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600 capitalize">
                        {getLessonTypeLabel(lesson.type)}
                      </span>
                      <span class="text-xs text-amber-600 font-medium">{m.lesson_status_coming_soon()}</span>
                    </div>
                  </div>
                </div>
              {/if}
            {/each}
          </div>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  button {
    -webkit-tap-highlight-color: transparent;
  }
</style>
