<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import * as m from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import {
		baseOrganizationSchema,
		baseWebsiteSchema,
		serializeLdJson
	} from '$lib/seo';

	let { children } = $props();
	const locale = getLocale();
	const ogLocale = locale === 'tr' ? 'tr_TR' : 'en_US';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="robots" content="index, follow" />
	<meta name="theme-color" content="#f97316" />
	<meta name="color-scheme" content="light" />
	<meta property="og:site_name" content={m.site_title()} />
	<meta property="og:locale" content={ogLocale} />
	<meta name="twitter:card" content="summary_large_image" />
	<script type="application/ld+json">
		{serializeLdJson(baseOrganizationSchema)}
	</script>
	<script type="application/ld+json">
		{serializeLdJson(baseWebsiteSchema)}
	</script>
</svelte:head>

{@render children()}
