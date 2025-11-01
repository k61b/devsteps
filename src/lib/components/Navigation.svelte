<script lang="ts">
  import * as m from '$lib/paraglide/messages';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
</script>

<nav class="relative z-10 container mx-auto px-6 py-8">
  <div class="flex items-center justify-between">
    <a href="/" class="text-2xl font-bold text-rose-800 hover:text-rose-900 transition">
      {m.site_title()}
    </a>
    <div class="hidden md:flex gap-8">
      <a href="/#why" class="text-rose-700 hover:text-rose-900 transition font-medium">{m.nav_why()}</a>
      <a href="/#paths" class="text-rose-700 hover:text-rose-900 transition font-medium">{m.nav_paths()}</a>
      <a href="/browse-courses" class="text-rose-700 hover:text-rose-900 transition font-medium">{m.nav_courses()}</a>
      <a href="/#community" class="text-rose-700 hover:text-rose-900 transition font-medium">{m.nav_community()}</a>
      <a href="/#faq" class="text-rose-700 hover:text-rose-900 transition font-medium">{m.nav_faq()}</a>
    </div>
    <div class="flex items-center gap-4">
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
  </div>
</nav>
