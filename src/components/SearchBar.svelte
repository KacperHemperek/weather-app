<script>
	import { goto } from "$app/navigation";


	let active = false;
	let value = "";
</script>

<form
	on:submit|preventDefault={() => {
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
</form>

<style>
	form {
		width: 100%;
		display: flex;
		margin-bottom: 1rem;
		gap: 1rem;
	}
	input {
		width: 100%;
		border-radius: var(--border-radius-base);
		border: 1px solid;
		padding: 0.4rem 0.75rem;
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
		top: 8px;
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
</style>
