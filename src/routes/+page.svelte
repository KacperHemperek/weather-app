<script lang="ts">
	import { onMount } from "svelte";

	import Card from "../components/Card.svelte";
	import WeatherCards from "../components/WeatherCards.svelte";
	import type { WeatherData } from "./../interface/WeatherData.interface";
	import { parseTemperature } from "./../helpers/parseTemperature";
	import { getWeatherData } from "../helpers/getWeatherData";

	let weatherState: WeatherData;
	let loading: boolean = true;

	onMount(() => {
		loading = true;
		navigator.geolocation.getCurrentPosition(
			async (pos: GeolocationPosition) => {
				try {
					weatherState = await getWeatherData(pos.coords.latitude, pos.coords.longitude);
					loading = false;
				} catch (err) {
					console.log(err);
				}
			},
			async () => {
				try {
					weatherState = await getWeatherData();
					loading = false;
				} catch (err) {
					console.log(err);
				}
			}
		);
	});
</script>

<div class="weather-info">
	{#if loading}
		<div class="placeholder-title" />
	{:else}
		<h1>Current weather at {weatherState?.name ?? ""}</h1>
	{/if}
	<WeatherCards
		humidity={weatherState?.main?.humidity}
		{loading}
		temp={weatherState?.main?.temp}
		weather={weatherState?.weather[0]?.main}
		wind={weatherState?.wind?.speed}
	/>
</div>

<style>
	h1 {
		font-size: 1.75rem;
		margin: 3rem 0;
	}

	.placeholder-title {
		margin: 3rem 0;
		width: 100%;
		height: 42px;
		background-color: var(--text-lighter);
		border-radius: 30px;
	}

	@media only screen and (min-width: 767px) {
		.placeholder-title {
			width: 400px;
		}
	}

	svg {
		width: 100%;
		height: 100%;
	}

	.weather-info {
		width: 100%;
		margin: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
