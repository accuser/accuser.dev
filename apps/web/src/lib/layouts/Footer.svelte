<script lang="ts">
	import GitHubLink from '$lib/components/GitHubLink.svelte';
	import RssLink from '$lib/components/RssLink.svelte';

	const year = new Date().getFullYear();
</script>

<div class="mx-auto max-w-screen-2xl p-2 md:px-8 md:py-4">
	<div class="flex items-center justify-between gap-x-8">
		<div class="inline-flex items-center justify-start">
			<p class="text-xs text-slate-500">
				Copyright &copy; {year}
			</p>
		</div>

		<div class="grow flex items-center justify-end space-x-8">
			<div
				class="flex items-center space-x-2 text-slate-500 hover:text-slate-900 dark:hover:text-white"
			>
				<span class="text-slate-500 hover:text-slate-900 dark:hover:text-white">
					<GitHubLink />
				</span>
				<span class="text-slate-500 hover:text-slate-900 dark:hover:text-white">
					<RssLink />
				</span>
			</div>
		</div>
	</div>
</div>
