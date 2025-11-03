<script lang="ts">
  import { onMount } from 'svelte';

  let isVisible = $state(false);

  onMount(() => {
    const handleScroll = () => {
      isVisible = window.scrollY > 500;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
</script>

{#if isVisible}
  <button
    onclick={scrollToTop}
    class="fixed bottom-8 right-8 z-40 p-4 bg-rose-400 hover:bg-rose-500 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
    aria-label="Scroll to top"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
{/if}
