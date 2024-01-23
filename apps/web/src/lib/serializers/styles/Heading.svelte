<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';

	export let portableText: CustomBlockComponentProps<{
		_key: string;
		style: string;
	}>;

	const { _key, style } = portableText.value;
</script>

<div class="relative scroll-mt-32" id={_key.toString()}>
	<svelte:element this={style}><slot /></svelte:element>
</div>

<style lang="postcss">
	div {
		@apply prose-headings:font-normal  prose-h2:text-blue-800;
	}
</style>
