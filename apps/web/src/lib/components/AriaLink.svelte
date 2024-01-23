<script lang="ts">
	import ArrowRightIcon from './ArrowRightIcon.svelte';

	export let href: string;
</script>

<a {href}
	><i aria-hidden="true"><ArrowRightIcon /></i><span class="sr-only"><slot>Read</slot></span></a
>

<style lang="postcss">
	a {
		@apply inline-flex items-center px-1;
		@apply text-orange-500 hover:text-orange-600;
	}
</style>
