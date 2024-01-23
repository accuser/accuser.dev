<script lang="ts">
	import Prose from '$lib/providers/Prose.svelte';
	import { PortableText } from '@portabletext/svelte';
</script>

<main class="relative my-32">
	<div class="max-w-screen-2xl mx-auto">
		<slot />
	</div>
</main>
