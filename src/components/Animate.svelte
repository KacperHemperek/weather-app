<script lang="ts">
	import { fly } from "svelte/transition";
</script>

<div class="layout-container">
	<div
		class="content-wrapper"
		out:fly={{ duration: 300, x: -80 }}
		in:fly={{ duration: 300, x: 80, delay: 400 }}
	>
		<slot />
	</div>
</div>

<style>
	.layout-container {
		width: 100vw;
		display: flex;
		justify-content: center;
		padding: 1rem;
	}

	.content-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	@media only screen and (min-width: 767px) {
		.content-wrapper {
			width: 80%;
		}
	}
	@media only screen and (min-width: 1024px) {
		.content-wrapper {
			width: 60%;
		}
	}
</style>
