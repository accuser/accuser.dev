<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';

	export let portableText: MarkComponentProps<{ plainTextContent: string }>;
	const { plainTextContent } = portableText;
</script>

<code><slot /></code>

<style lang="postcss">
	code {
		@apply -mx-1 -my-0.5 px-1 py-0.5 bg-slate-300/50 dark:bg-slate-700/50 font-mono font-light text-current rounded;

		&::after {
			content: none;
		}

		&::before {
			content: none;
		}
	}
</style>
