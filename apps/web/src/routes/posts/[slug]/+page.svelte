<script lang="ts">
	import Prose from '$lib/providers/Prose.svelte';
	import type { PageData } from './$types';
	import { PortableText } from '@portabletext/svelte';

	export let data: PageData;

	const {
		post: { _id, body, slug, title, tags }
	} = data;
</script>

<Prose>
	<svelte:fragment slot="blocks" let:components>
		<h1>{title}</h1>
		<PortableText value={body} {components} />

		<p class="text-gray-500">
			{#if tags}
				{tags.join(', ')}
			{/if}
		</p>
	</svelte:fragment>
</Prose>
