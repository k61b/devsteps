<script lang="ts">
  import { page } from '$app/stores';
  import * as m from '$lib/paraglide/messages';
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';

  $: is404 = $page.status === 404;
  $: is500 = $page.status >= 500;
</script>

<!-- Hero Section with Navigation -->
<section class="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden min-h-screen flex flex-col">
  <!-- Decorative shapes -->
  <div class="absolute top-20 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
  <div class="absolute top-40 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
  <div class="absolute bottom-20 left-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

  <Navigation />

  <!-- Error Content -->
  <div class="relative z-10 container mx-auto px-6 flex-1 flex items-center justify-center">
    <div class="text-center max-w-2xl mx-auto">
      {#if is404}
        <!-- 404 Error -->
        <div class="mb-8">
          <div class="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-4">
            404
          </div>
          <div class="text-6xl mb-6">🔍</div>
        </div>

        <div class="bg-white/80 backdrop-blur border-2 border-purple-300 rounded-3xl p-10 shadow-xl">
          <h1 class="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            {m.error_404_title()}
          </h1>
          <p class="text-xl text-purple-700 mb-8 leading-relaxed">
            {m.error_404_description()}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              class="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full font-semibold text-lg hover:from-purple-500 hover:to-pink-500 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {m.error_404_cta()}
            </a>
            <a
              href="/browse-courses"
              class="px-8 py-4 bg-white border-2 border-purple-300 text-purple-700 rounded-full font-semibold text-lg hover:bg-purple-50 transition"
            >
              {m.nav_courses()}
            </a>
          </div>
        </div>
      {:else if is500}
        <!-- 500 Error -->
        <div class="mb-8">
          <div class="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 mb-4">
            500
          </div>
          <div class="text-6xl mb-6">⚠️</div>
        </div>

        <div class="bg-white/80 backdrop-blur border-2 border-rose-300 rounded-3xl p-10 shadow-xl">
          <h1 class="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
            {m.error_500_title()}
          </h1>
          <p class="text-xl text-rose-700 mb-8 leading-relaxed">
            {m.error_500_description()}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              on:click={() => window.location.reload()}
              class="px-8 py-4 bg-gradient-to-r from-rose-400 to-orange-400 text-white rounded-full font-semibold text-lg hover:from-rose-500 hover:to-orange-500 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {m.error_500_cta()}
            </button>
            <a
              href="/"
              class="px-8 py-4 bg-white border-2 border-rose-300 text-rose-700 rounded-full font-semibold text-lg hover:bg-rose-50 transition"
            >
              {m.error_back_home()}
            </a>
          </div>
        </div>
      {:else}
        <!-- Generic Error -->
        <div class="mb-8">
          <div class="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 mb-4">
            {$page.status}
          </div>
          <div class="text-6xl mb-6">😕</div>
        </div>

        <div class="bg-white/80 backdrop-blur border-2 border-purple-300 rounded-3xl p-10 shadow-xl">
          <h1 class="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            {m.error_500_title()}
          </h1>
          <p class="text-xl text-purple-700 mb-8 leading-relaxed">
            {$page.error?.message || m.error_500_description()}
          </p>

          <a
            href="/"
            class="inline-block px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full font-semibold text-lg hover:from-purple-500 hover:to-pink-500 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {m.error_back_home()}
          </a>
        </div>
      {/if}

      <!-- Helpful Links -->
      <div class="mt-12 p-6 bg-white/60 backdrop-blur border-2 border-purple-200 rounded-2xl">
        <h3 class="text-lg font-semibold text-purple-900 mb-4">
          {m.error_helpful_links_title()}
        </h3>
        <div class="flex flex-wrap gap-4 justify-center text-purple-700">
          <a href="/" class="hover:text-purple-900 transition underline">
            {m.error_helpful_links_home()}
          </a>
          <a href="/browse-courses" class="hover:text-purple-900 transition underline">
            {m.error_helpful_links_courses()}
          </a>
          <a href="https://www.reddit.com/r/devsteps/" target="_blank" rel="noreferrer" class="hover:text-purple-900 transition underline">
            {m.error_helpful_links_community()}
          </a>
          <a href="https://github.com/k61b/devsteps" target="_blank" rel="noreferrer" class="hover:text-purple-900 transition underline">
            {m.error_helpful_links_github()}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />

<style lang="postcss">
  /* Blob animation */
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
