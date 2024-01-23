<script lang="ts">
	import { browser } from '$app/environment';
	import { writable } from 'svelte/store';
	import MoonIcon from './MoonIcon.svelte';
	import SunIcon from './SunIcon.svelte';
	import DeviceDesktopIcon from './DeviceDesktopIcon.svelte';

	type Theme = 'dark' | 'light' | 'system';

	export let defaultTheme: Theme = 'system';

	const theme = writable(browser ? localStorage.getItem('theme') || defaultTheme : defaultTheme);

	theme.subscribe((value) => (browser ? localStorage.setItem('theme', value) : void 0));
</script>

<svelte:head>
	<script>
		if (
			localStorage.getItem('theme') === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

{#if $theme === 'dark'}
	<button
		type="button"
		class="p-1 rounded-full text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none focus:bg-slate-200 dark:focus:bg-slate-800"
		on:click={() => {
			$theme = 'light';
			document.documentElement.classList.remove('dark');
		}}
	>
		<i aria-hidden="true"><SunIcon /><span class="sr-only">Enable light colour scheme</span></i>
	</button>
{:else if $theme === 'light'}
	<button
		on:click={() => {
			$theme = 'dark';
			document.documentElement.classList.add('dark');
		}}
	>
		<i aria-hidden="true"><MoonIcon /><span class="sr-only">Enable dark colour scheme</span></i>
	</button>
{:else}
	<button
		on:click={() => {
			$theme = 'dark';
			document.documentElement.classList.add('dark');
		}}
	>
		<i aria-hidden="true"
			><DeviceDesktopIcon /><span class="sr-only">Enable dark colour scheme</span></i
		>
	</button>
{/if}

<style lang="postcss">
	button {
		@apply p-1 rounded-full;
		@apply text-slate-900 dark:text-slate-100;
		@apply hover:bg-slate-300 dark:hover:bg-slate-700;
		@apply focus:outline-none focus:bg-slate-200 dark:focus:bg-slate-800;
	}
</style>
