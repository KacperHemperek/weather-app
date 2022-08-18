<script lang="ts">
	import type { WeatherData } from "../../../interface/WeatherData.interface";

	import WeatherCards from "../../../components/WeatherCards.svelte";
	export let data: any;

	console.log(data);
	const {
		main: { temp, humidity },
		wind,
		weather
	} = data.currentWeather as WeatherData;
</script>

<h1>
	{data?.city ?? ""}
</h1>
<WeatherCards {temp} {humidity} weather={weather[0]?.main} wind={wind.speed} />
<h2>Temperature graph</h2>

<style>
	h1 {
		font-size: 1.5rem;
		margin: 2rem;
	}

	h2 {
		font-size: 1.25rem;
		margin: 2rem;
	}
</style>
