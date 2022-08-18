import { error, type Load } from "@sveltejs/kit";
import { getWeatherData } from "../../../helpers/getWeatherData";

/** @type {import('./$types').PageLoad} */
export const load: Load = async ({ params, fetch }) => {
	try {
		const coordsRes = await fetch(
			`https://api.openweathermap.org/geo/1.0/direct?q=${params.value}&limit=5&units=metric&appid=${
				import.meta.env.VITE_API
			}`
		);
		const coordsData = await coordsRes.json();
		const [lat, lon] = [coordsData[0].lat, coordsData[0].lon];

		const weatherRes = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${
				import.meta.env.VITE_API
			}`
		);
		const weatherData = await weatherRes.json();

		const weatherPerDay = weatherData.list.filter(
			(item: any, index: number) => index === 0 || index % 8 === 0
		);

		const currentWeather = await getWeatherData(lat, lon);

		return {
			fiveDayForecast: weatherPerDay,
			city: weatherData.city.name,
			currentWeather
		};
	} catch (err) {
		throw error(404, "Coulnd't find city");
	}
};
