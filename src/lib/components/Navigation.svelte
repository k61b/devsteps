<script lang="ts">
  import * as m from '$lib/paraglide/messages';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
  import { onMount } from 'svelte';

  let isScrolled = $state(false);
  let mobileMenuOpen = $state(false);

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<nav class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'py-5'}`}>
  <div class="container mx-auto px-6 w-full">
    <div class="flex items-center justify-between">
      <a href="/" class="text-2xl font-bold text-rose-800 hover:text-rose-900 transition">
        {m.site_title()}
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex gap-8">
        <a href="/#why" class="text-rose-700 hover:text-rose-900 transition font-medium">{m.nav_why()}</a>
        <a href="/#paths" class="text-rose-700 hover:text-rose-900 transition font-medium">{m.nav_paths()}</a>
        <a href="/browse-courses" class="text-rose-700 hover:text-rose-900 transition font-medium">{m.nav_courses()}</a>
        <a href="/#community" class="text-rose-700 hover:text-rose-900 transition font-medium">{m.nav_community()}</a>
        <a href="/#faq" class="text-rose-700 hover:text-rose-900 transition font-medium">{m.nav_faq()}</a>
      </div>

      <!-- Desktop Actions -->
      <div class="hidden md:flex items-center gap-4">
        <LanguageSwitcher />
        <a
          href="https://github.com/k61b/devsteps"
          target="_blank"
          rel="noreferrer"
          class="px-6 py-2 border-2 border-rose-300 text-rose-700 rounded-full hover:bg-rose-100 transition font-medium"
        >
          {m.nav_contribute()}
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center gap-3">
        <LanguageSwitcher />
        <button
          onclick={toggleMobileMenu}
          class="p-2 text-rose-700 hover:text-rose-900 transition"
          aria-label="Toggle menu"
        >
          {#if mobileMenuOpen}
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {:else}
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {/if}
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden mt-4 pb-4 border-t-2 border-rose-200 pt-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl">
        <div class="flex flex-col gap-4">
          <a href="/#why" onclick={closeMobileMenu} class="text-rose-700 hover:text-rose-900 transition font-medium px-4 py-2 hover:bg-rose-50 rounded-lg">{m.nav_why()}</a>
          <a href="/#paths" onclick={closeMobileMenu} class="text-rose-700 hover:text-rose-900 transition font-medium px-4 py-2 hover:bg-rose-50 rounded-lg">{m.nav_paths()}</a>
          <a href="/browse-courses" onclick={closeMobileMenu} class="text-rose-700 hover:text-rose-900 transition font-medium px-4 py-2 hover:bg-rose-50 rounded-lg">{m.nav_courses()}</a>
          <a href="/#community" onclick={closeMobileMenu} class="text-rose-700 hover:text-rose-900 transition font-medium px-4 py-2 hover:bg-rose-50 rounded-lg">{m.nav_community()}</a>
          <a href="/#faq" onclick={closeMobileMenu} class="text-rose-700 hover:text-rose-900 transition font-medium px-4 py-2 hover:bg-rose-50 rounded-lg">{m.nav_faq()}</a>
          <a
            href="https://github.com/k61b/devsteps"
            target="_blank"
            rel="noreferrer"
            class="mx-4 mt-2 px-6 py-2 border-2 border-rose-300 text-rose-700 rounded-full hover:bg-rose-100 transition font-medium text-center"
          >
            {m.nav_contribute()}
          </a>
        </div>
      </div>
    {/if}
  </div>
</nav>
