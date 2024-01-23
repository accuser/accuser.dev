<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import hljs from 'highlight.js';

	export let portableText: CustomBlockComponentProps<{
		code: string;
		filename: string;
		language: string;
	}>;

	const { code, filename, language } = portableText.value;

	const processed = hljs.highlight(code, { language }).value.replaceAll('hljs-', '');
</script>

<pre><code lang={language}>{@html processed}</code></pre>

<style lang="postcss">
	pre {
		@apply -mx-4 px-4;
		@apply leading-tight;
	}

	code {
		@apply font-mono font-light;
	}
</style>
