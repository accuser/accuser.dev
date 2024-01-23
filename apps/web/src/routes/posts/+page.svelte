<script lang="ts">
	import ReadLink from '$lib/components/ReadLink.svelte';
	import Prose from '$lib/providers/Prose.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { posts } = data;
</script>

<Prose>
	<svelte:fragment slot="blocks" let:components>
		<h3>Recent Posts</h3>
		<ol>
			{#each posts as { author, lede, slug, title }, index (slug.current)}
				<li>
					<a href="/posts/{slug.current}"><strong>{title}</strong></a>&mdash;{lede}
					<ReadLink href="/posts/{slug.current}" />
				</li>
			{/each}
		</ol>
	</svelte:fragment>
</Prose>
