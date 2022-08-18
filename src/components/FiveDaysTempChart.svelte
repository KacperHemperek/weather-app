<script lang="ts">
	import Chart from "svelte-frappe-charts";
	import { parseShortDate } from "../helpers/parseShortDate";

	export let data: any[];

	const labels = data.map((item: any) => parseShortDate(item.dt));
	const values = data.map((item: any) => Math.round(item.main.temp * 10) / 10);

	let chartData = {
		labels,
		datasets: [
			{
				values
			}
		]
	};
</script>

<div class="chart-wrapper">
	<Chart data={chartData} type="line" colors={["#ff9500"]} lineOptions={{ dotSize: 6 }} />
</div>
