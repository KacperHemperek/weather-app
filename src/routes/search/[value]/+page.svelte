<script lang="ts">
	import { fly } from "svelte/transition";
	import { goto } from "$app/navigation";

	import type { WeatherData } from "../../../interface/WeatherData.interface";

	import Chart from "svelte-frappe-charts";
	import WeatherCards from "../../../components/WeatherCards.svelte";
	import Animate from "../../../components/Animate.svelte";

	import { parseShortDate } from "../../../helpers/parseShortDate";
	export let data: any;

	let buttonHover = false;

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

	let animationOptions = {
		x: -30,
		duration: 200,
		delay: 350
	};
</script>

<Animate>
	<div class="title">
		<div class="button-wrapper">
			<button
				on:click={() => goto("/search")}
				on:mouseover={() => (buttonHover = true)}
				on:focus={() => (buttonHover = true)}
				on:mouseout={() => (buttonHover = false)}
				on:blur={() => (buttonHover = false)}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path
						d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
					/>
				</svg>
			</button>
			{#if buttonHover}
				<span in:fly={animationOptions} out:fly={animationOptions} class="label">BACK</span>
			{/if}
		</div>
		<h1>
			{data?.city ?? ""}
		</h1>
	</div>
	<WeatherCards {temp} {humidity} weather={weather[0]?.main} wind={wind.speed} />
	<h2>Temperature graph</h2>
	<div class="chart-wrapper">
		<Chart data={chartData} type="line" colors={["#ff9500"]} lineOptions={{ dotSize: 6 }} />
	</div>
</Animate>

<style>
	h1 {
		font-size: 2rem;
	}

	h2 {
		font-size: 1.25rem;
		margin: 2rem;
	}
	.title {
		text-align: center;
		width: 100%;
		margin: 2rem;
		position: relative;
	}
	svg {
		pointer-events: none;
	}

	.button-wrapper {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 1.5rem;
		height: 1.5rem;
	}

	.label {
		position: absolute;
		top: 50%;
		transform: translateY(-45%);
		left: 2rem;
		color: var(--bg-base);
		font-weight: bold;
		pointer-events: none;
		z-index: -10;
	}
	button {
		background-color: white;
		fill: var(--bg-base);
		width: 100%;
		height: 100%;
		border: none;
		cursor: pointer;
	}
	button:focus {
		outline: none;
	}
	.chart-wrapper {
		width: 100%;
	}
</style>
