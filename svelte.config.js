import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [],
	rehypePlugins: []
};

/** @type {import('@sveltejs/kit').Config}*/
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: sequence([vitePreprocess(), mdsvex(mdsvexOptions), preprocessMeltUI()]),
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.svx', '.md']
};
export default config;
