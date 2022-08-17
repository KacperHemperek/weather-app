<script lang="ts">
	export let title: string;
	export let value: string | number;
</script>

<div class="card">
	<div class="svg-wrapper">
		<slot name="icon" />
	</div>
	<div>
		<h2>{title}</h2>
		<p>{value}</p>
	</div>
</div>

<style>
	.card {
		width: 100%;
		display: flex;
		padding: 0.75rem 1.5rem 0.75rem 0;
		box-shadow: 0 0 10px -6px rgba(0, 0, 0, 0.7);
		align-items: center;
		border: 1px solid;
		border-color: var(--text-lighter);
		border-radius: 0.5rem;
	}
	.svg-wrapper {
		width: 2rem;
		height: 2rem;
		fill: var(--bg-base);
		display: flex;
		margin: 0 0.5rem;
	}
	h2 {
		font-size: 0.75rem;
		color: var(--text-light);
		font-weight: 300;
	}
</style>
