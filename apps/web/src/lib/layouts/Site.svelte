<script lang="ts">
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	let y: number;
</script>

<svelte:window bind:scrollY={y} />

<div class="mx-auto max-w-screen-xl bg-white dark:bg-slate-900 shadow-xl">
	<div class="flex flex-col">
		<slot name="header">
			<header class="fixed z-30 p-2 md:px-8 md:py-4 w-full max-w-screen-xl" class:scrolled={y > 32}>
				<slot name="site-header"><Header /></slot>
				<slot name="page-header" />
			</header>
		</slot>

		<slot />

		<slot name="footer">
			<footer class="w-full">
				<slot name="page-footer" />
				<slot name="site-footer"><Footer /></slot>
			</footer>
		</slot>
	</div>
</div>

<style lang="postcss">
	header {
		@apply transition-all duration-300 ease-in-out border-b border-white dark:border-slate-900;

		&.scrolled {
			@apply backdrop-blur-sm border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95;
		}
	}
</style>
