import type { WeatherData } from "../interface/WeatherData.interface";

export const getWeatherData = async (
	lat: number = 52.2297,
	long: number = 21.0122
): Promise<WeatherData> => {
	try {
		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=en&appid=${
				import.meta.env.VITE_API
			}`
		);
		const weatherData = await res.json();
		return weatherData;
	} catch (err) {
		console.log(err);
		throw Error("couldn't retrive data'");
	}
};
