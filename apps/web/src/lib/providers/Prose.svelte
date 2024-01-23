<script lang="ts">
	import { Marks, Styles, Types } from '$lib/serializers/index.js';

	const components = {
		block: {
			h2: Styles.Heading,
			h3: Styles.Heading,
			h4: Styles.Heading
		},
		marks: {
			code: Marks.Code,
			link: Marks.Link
		},
		types: {
			code: Types.Code
		}
	};

	export let as: 'article' | 'div' = 'article';
</script>

<svelte:element
	this={as}
	class="prose prose-sm md:prose-base prose-slate mx-auto max-w-prose lg:prose-xl xl:prose-2xl dark:prose-invert"
>
	<slot name="blocks" {components} />
</svelte:element>
