<script lang="ts">
	import { fly } from "svelte/transition";

	export let title: string;
	export let value: string | number;
	export let loading = false;
	export let delay = 100;

	const flyOptions = {
		y: -30,
		duration: 400,
		delay
	};
</script>

{#if loading}
	<div class="card loading">
		<div class="svg-wrapper loading">
			<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<circle cx="50" cy="50" r="50" />
			</svg>
		</div>
		<div>
			<div class="placeholder title" />
			<div class="placeholder value" />
		</div>
	</div>
{:else}
	<div in:fly={flyOptions} class="card">
		<div class="svg-wrapper">
			<slot name="icon" />
		</div>
		<div>
			<h2>{title}</h2>
			<p>{value}</p>
		</div>
	</div>
{/if}

<style>
	.card {
		width: 100%;
		display: flex;
		padding: 0.75rem 1.5rem 0.75rem 0;
		box-shadow: 0 0 10px -6px rgba(0, 0, 0, 0.7);
		align-items: center;
		border: 1px solid;
		border-color: var(--text-lighter);
		border-radius: var(--border-radius-base);
	}

	.card.loading {
		background-color: var(--text-lighter);
		box-shadow: none;
	}
	.svg-wrapper {
		width: 2rem;
		height: 2rem;
		fill: var(--bg-base);
		display: flex;
		margin: 0 0.5rem;
	}
	.svg-wrapper.loading {
		fill: var(--text-white) !important;
	}
	.placeholder {
		background-color: var(--text-white);
		width: 100px;
		height: 10px;
		border-radius: 10px;
		margin: 8px;
	}
	.placeholder.value {
		max-width: 40px !important;
	}
	h2 {
		font-size: 0.75rem;
		color: var(--text-light);
		font-weight: 300;
	}
</style>
