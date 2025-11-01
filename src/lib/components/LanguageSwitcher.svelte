<script lang="ts">
  import { getLocale, setLocale, locales } from '$lib/paraglide/runtime.js';
  import * as m from '$lib/paraglide/messages';

  let currentLocale = $state(getLocale());
  const languageLabels = $derived({
    en: m.language_name_english(),
    tr: m.language_name_turkish()
  });

  function switchLanguage(lang: 'en' | 'tr') {
    setLocale(lang, { reload: false });
    currentLocale = lang;
    // Force a re-render by updating the state
    setTimeout(() => window.location.reload(), 100);
  }
</script>

<div class="flex gap-2 items-center">
  {#each locales as lang}
    <button
      onclick={() => switchLanguage(lang as 'en' | 'tr')}
      class="px-3 py-1 rounded-full text-sm font-medium transition {currentLocale === lang
        ? 'bg-rose-400 text-white'
        : 'bg-white border-2 border-rose-300 text-rose-700 hover:bg-rose-50'}"
    >
      {languageLabels[lang as keyof typeof languageLabels]}
    </button>
  {/each}
</div>
