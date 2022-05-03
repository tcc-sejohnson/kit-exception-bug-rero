<script lang="ts">
	const getData = async () => {
		const body = await fetch('/my-data/__data.json');
	};
</script>

<a href="/my-data">My data</a>
<button on:click={getData}>Get data</button>
