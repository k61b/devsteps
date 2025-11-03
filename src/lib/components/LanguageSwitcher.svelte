<script lang="ts">
  import { browser } from '$app/environment';
  import { createSelect, melt } from '@melt-ui/svelte';
  import { onDestroy } from 'svelte';
  import { getLocale, setLocale, locales } from '$lib/paraglide/runtime.js';
  import * as m from '$lib/paraglide/messages';

  type Locale = (typeof locales)[number];

  const availableLocales = locales as readonly Locale[];

  const localeLabelGetters: Partial<Record<Locale, () => string>> = {
    en: m.language_name_english,
    tr: m.language_name_turkish
  };

  const initialLocale = getLocale() as Locale;
  let currentLocale = $state(initialLocale);

  function getLanguageLabel(lang: Locale) {
    const getter = localeLabelGetters[lang];
    if (getter) {
      return getter();
    }

    if (typeof Intl !== 'undefined' && typeof Intl.DisplayNames !== 'undefined') {
      try {
        const displayNames = new Intl.DisplayNames([currentLocale, 'en'], { type: 'language' });
        const label = displayNames.of(lang);
        if (label) {
          return label;
        }
      } catch {
        // Ignore browsers without Intl.DisplayNames support for the given locale.
      }
    }

    return lang.toUpperCase();
  }

  function switchLanguage(lang: Locale) {
    if (!browser) {
      return;
    }

    if (lang === getLocale()) {
      return;
    }

    setLocale(lang, { reload: false });
    setTimeout(() => window.location.reload(), 100);
  }

  const {
    elements: {
      trigger: selectTrigger,
      menu: selectMenu,
      option: selectOption,
      hiddenInput: selectHiddenInput
    },
    states: { selected }
  } = createSelect<Locale>({
    defaultSelected: { value: initialLocale, label: getLanguageLabel(initialLocale) }
  });

  const unsubscribe = selected.subscribe(($selected) => {
    const next = $selected?.value;
    if (!next || next === currentLocale) {
      return;
    }

    currentLocale = next;
    switchLanguage(next);
  });

  onDestroy(unsubscribe);
</script>

<div class="relative inline-flex items-center">
  <button
    type="button"
    aria-label={m.language_switcher_label()}
    class="flex items-center gap-2 rounded-full border-2 border-rose-300 bg-white px-4 py-2 text-sm font-medium text-rose-700 shadow-sm transition data-[state=open]:border-rose-400 data-[state=open]:ring-rose-400 hover:border-rose-400 hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
    use:melt={$selectTrigger}
  >
    <span>{getLanguageLabel(currentLocale)}</span>
    <svg class="h-3 w-3 text-rose-500" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
      <path d="M1 1.5 5 4.5 9 1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
  <input class="hidden" use:melt={$selectHiddenInput} />
  <div
    class="z-50 mt-2 min-w-[10rem] overflow-hidden rounded-2xl border border-rose-200 bg-white p-1 text-sm text-rose-700 shadow-xl ring-1 ring-black/5 focus:outline-none"
    use:melt={$selectMenu}
  >
    {#each availableLocales as lang (lang)}
      <button
        type="button"
        class="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition data-[highlighted]:bg-rose-50 data-[highlighted]:text-rose-900"
        use:melt={$selectOption({ value: lang, label: getLanguageLabel(lang) })}
      >
        <span>{getLanguageLabel(lang)}</span>
        {#if lang === currentLocale}
          <svg
            class="h-4 w-4 text-rose-500"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M4 8l3 3 5-6" />
          </svg>
        {/if}
      </button>
    {/each}
  </div>
</div>
