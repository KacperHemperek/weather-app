import type { Coordinates } from "./Coordinates.interface";
import type { MainWeatherData } from "./MainWeatherData.interface";
import type { Weather } from "./Weather.interface";
import type { Wind } from "./Wind.interface";

export interface WeatherData {
	coord: Coordinates;
	weather: Weather[];
	base: string;
	main: MainWeatherData;
	visibility: number;
	wind: Wind;
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		coutry: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
}
