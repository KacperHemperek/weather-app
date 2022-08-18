<script>
	import { goto } from "$app/navigation";
	import { onDestroy } from "svelte";
	import { fly } from "svelte/transition";

	import Spinner from "./Loader.svelte";

	let active = false;
	let value = "";
	let loading = false;

	onDestroy(() => {
		loading = false;
	});

	const animation = { duration: 300, y: 20, delay: 500 };
</script>

<form
	on:submit|preventDefault={() => {
		loading = true;
		goto(`search/${value}`);
	}}
>
	<div class="input-wrapper">
		<label class={value !== "" ? "active" : active ? "active" : ""} for="search">Search </label>
		<input
			type="text"
			name="search"
			on:focus={() => (active = true)}
			on:blur={() => (active = false)}
			bind:value
		/>
	</div>
	{#if value}
		<button
			type="submit"
			in:fly={{ duration: 300, y: 20, delay: 500 }}
			out:fly={{ duration: 300, y: 20 }}>Search</button
		>
	{/if}
	{#if loading}
		<div class="svg-wrapper ">
			<Spinner />
		</div>
	{/if}
</form>

<style>
	.svg-wrapper {
		fill: var(--bg-base);
	}
	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 1rem;
		gap: 1rem;
	}
	input {
		width: 100%;
		border-radius: var(--border-radius-base);
		border: 1px solid;
		padding: 0.5rem 0.75rem;
		border-color: var(--text-light);
		background-color: white;
	}
	@media only screen and (min-width: 767px) {
		input {
			width: 400px;
		}
	}
	label {
		background-color: white;
		color: var(--text-light);
		top: 9px;
		left: 0.75rem;
		position: absolute;
		transition: all 200ms ease-out;
		pointer-events: none;
	}

	label.active {
		padding: 0 5px;
		font-size: 0.75rem;
		top: -9px;
		left: 0.5rem;
	}

	.input-wrapper {
		position: relative;
		width: 100%;
		margin: 0 auto;
	}

	@media only screen and (min-width: 767px) {
		.input-wrapper {
			width: auto;
		}
	}
	input:focus {
		outline-color: var(--bg-base);
	}
	button {
		margin-top: 1rem;
		width: fit-content;
		padding: 0.5rem 2rem;
		border: none;
		background-color: var(--bg-base);
		color: var(--text-white);
		border-radius: var(--border-radius-base);
	}
	button:hover {
		background-color: var(-bg-light);
	}
</style>
