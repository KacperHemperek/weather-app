type Types = "farenheit" | "celcius" | "kelvin";

export const parseTemperature = (temperature: number | string, type: Types = "celcius"): string => {
	switch (type) {
		case "farenheit":
			return `${temperature}°F`;
		case "kelvin":
			return `${temperature}°K`;
		case "celcius":
			return `${temperature}°C`;
	}
};
