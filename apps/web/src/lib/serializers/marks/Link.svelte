<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';

	export let portableText: MarkComponentProps<{
		_key: string;
		_type: 'link';
		href: string;
	}>;

	const { _key, href } = portableText.value;
</script>

<a {href} target="=_blank"><slot /></a>

<style lang="postcss">
	a {
		@apply font-normal text-current decoration-blue-800 decoration-2 underline-offset-2 transition-colors;

		&:hover {
			@apply -m-1 bg-blue-200 p-1;
		}
	}
</style>
