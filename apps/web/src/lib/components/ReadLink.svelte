<script lang="ts">
	import BookIcon from './BookIcon.svelte';

	export let href: string;
</script>

<a {href}><i aria-hidden="true"><BookIcon /></i><span class="sr-only"><slot>Read</slot></span></a>
