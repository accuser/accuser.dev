<script lang="ts">
	import Site from '$lib/layouts/Site.svelte';
	import '../app.css';
</script>

<Site>
	<main class="relative my-32">
		<div class="max-w-screen-2xl mx-auto">
			<slot />
		</div>
	</main>
</Site>
