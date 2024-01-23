<script lang="ts">
	import { page } from '$app/stores';
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
	import GitHubLink from '$lib/components/GitHubLink.svelte';

	const siteNavigation = [
		{ name: 'Posts', href: '/posts' },
		{ name: 'About', href: '/about' }
	];

	const section = (href: string) => href.split('/').filter(Boolean)[0];

	$: currentSection = section($page.url.pathname);
</script>

<div class="flex items-center justify-between gap-x-8">
	<div class="inline-flex items-center justify-start">
		<a
			href="/"
			class="text-base font-sans font-black tracking-tighter text-orange-500 md:text-3xl lowercase"
			>accuser<span class="font-light text-slate-500">.dev</span></a
		>
	</div>

	<nav class="grow flex items-center justify-end space-x-8">
		<div class="hidden items-center justify-end space-x-8 md:flex">
			{#each siteNavigation as { href, name } (name)}
				<a {href} class:active={currentSection === section(href)}>{name}</a>
			{/each}
		</div>
		<div class="flex items-center space-x-2">
			<DarkModeToggle />
		</div>
	</nav>
</div>

<style lang="postcss">
	nav {
		& a {
			@apply decoration-orange-500 decoration-4 underline-offset-4 decoration-slice;
		}

		& a:not([type='external']) {
			@apply font-medium text-slate-800 dark:text-slate-200 hover:text-orange-800 md:text-lg py-0.5;
		}

		& a.active {
			@apply underline;
		}
	}
</style>
