<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ status, error }) => {
		return {
			props: {
				title: `${status}: ${error?.message ?? 'unknown error'}`
			}
		};
	};
</script>

<script lang="ts">
	export let title: string = 'An unknown error occurred';
</script>

<h1>{title}</h1>
