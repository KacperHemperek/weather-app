<script lang="ts">
	import type { WeatherData } from "../../../interface/WeatherData.interface";

	import Chart from "svelte-frappe-charts";
	import WeatherCards from "../../../components/WeatherCards.svelte";
	import Animate from "../../../components/Animate.svelte";

	import { parseShortDate } from "../../../helpers/parseShortDate";
	export let data: any;

	const {
		main: { temp, humidity },
		wind,
		weather
	} = data.currentWeather as WeatherData;

	const labels = data.fiveDayForecast.map((item: any) => parseShortDate(item.dt));
	const values = data.fiveDayForecast.map((item: any) => Math.round(item.main.temp * 10) / 10);

	let chartData = {
		labels,
		datasets: [
			{
				values
			}
		]
	};
</script>

<Animate>
	<h1>
		{data?.city ?? ""}
	</h1>

	<WeatherCards {temp} {humidity} weather={weather[0]?.main} wind={wind.speed} />
	<h2>Temperature graph</h2>
	<div class="chart-wrapper">
		<Chart data={chartData} type="line" colors={["#ff9500"]} lineOptions={{ dotSize: 6 }} />
	</div>
</Animate>

<style>
	h1 {
		font-size: 2rem;
		margin: 2rem;
	}

	h2 {
		font-size: 1.25rem;
		margin: 2rem;
	}

	.chart-wrapper {
		width: 100%;
	}
</style>
