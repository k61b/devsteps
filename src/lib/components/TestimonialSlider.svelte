<script lang="ts">
  import { onMount } from 'svelte';
  import { getLocale } from '$lib/paraglide/runtime';
  import { testimonials } from '$lib/data/testimonials';

  let activeIndex = $state(0);
  let autoplayInterval: ReturnType<typeof setInterval>;
  let isPaused = $state(false);
  let isTransitioning = $state(false);

  onMount(() => {
    startAutoplay();
    return () => clearInterval(autoplayInterval);
  });

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 5000);
  }

  function nextSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    activeIndex = (activeIndex + 1) % testimonials.length;
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  function prevSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    activeIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  function goToSlide(index: number) {
    if (isTransitioning || index === activeIndex) return;
    isTransitioning = true;
    activeIndex = index;
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  function pauseAutoplay() {
    isPaused = true;
  }

  function resumeAutoplay() {
    isPaused = false;
  }

  const currentTestimonial = $derived(testimonials[activeIndex]);
  const locale = $derived(getLocale());
</script>

<div
  class="max-w-2xl mx-auto mt-16"
  role="region"
  aria-label="Testimonial slider"
  onmouseenter={pauseAutoplay}
  onmouseleave={resumeAutoplay}
>
  <!-- Slider Container -->
  <div class="relative overflow-hidden">
    <div class="flex transition-transform duration-500 ease-out" style="transform: translateX(-{activeIndex * 100}%)">
      {#each testimonials as testimonial, index}
        <div class="w-full flex-shrink-0 px-2">
          <div class="bg-white/80 backdrop-blur-md border-2 border-rose-200 rounded-3xl p-6 h-64 flex flex-col">
            <!-- Quote -->
            <div class="mb-6 flex-grow overflow-hidden">
              <svg class="w-10 h-10 text-rose-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p class="text-xl md:text-2xl font-medium text-rose-900 leading-relaxed line-clamp-3">
                {testimonial.quote[locale]}
              </p>
            </div>

            <!-- Author Info -->
            <div class="flex items-center gap-4 mt-auto">
              <div class="text-4xl">{testimonial.avatar}</div>
              <div class="flex-1">
                <p class="font-bold text-rose-900">{testimonial.name}</p>
                <p class="text-sm text-rose-700">{testimonial.role[locale]}</p>
              </div>

              <!-- Social Links -->
              <div class="flex gap-3">
                {#if testimonial.github}
                  <a
                    href="https://github.com/{testimonial.github}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 bg-rose-100 hover:bg-rose-200 rounded-full transition"
                    aria-label="GitHub profile"
                  >
                    <svg class="w-5 h-5 text-rose-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                {/if}
                {#if testimonial.linkedin}
                  <a
                    href="https://linkedin.com/in/{testimonial.linkedin}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 bg-rose-100 hover:bg-rose-200 rounded-full transition"
                    aria-label="LinkedIn profile"
                  >
                    <svg class="w-5 h-5 text-rose-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Navigation Dots -->
  <div class="flex justify-center gap-3 mt-6">
    {#each testimonials as _, index}
      <button
        onclick={() => goToSlide(index)}
        class={`h-3 rounded-full transition-all duration-300 ${
          index === activeIndex
            ? 'w-8 bg-rose-500'
            : 'w-3 bg-rose-300 hover:bg-rose-400'
        }`}
        aria-label={`Go to testimonial ${index + 1}`}
      ></button>
    {/each}
  </div>

  <!-- Arrow Navigation -->
  <div class="flex justify-center gap-4 mt-4">
    <button
      onclick={prevSlide}
      class="p-3 bg-white/80 hover:bg-white border-2 border-rose-200 rounded-full transition shadow-md hover:shadow-lg"
      aria-label="Previous testimonial"
    >
      <svg class="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      onclick={nextSlide}
      class="p-3 bg-white/80 hover:bg-white border-2 border-rose-200 rounded-full transition shadow-md hover:shadow-lg"
      aria-label="Next testimonial"
    >
      <svg class="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</div>
