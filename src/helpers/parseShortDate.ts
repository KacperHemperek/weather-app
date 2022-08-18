export const parseShortDate = (unixTime: number): string => {
	const date = new Date(unixTime * 1000);
	// const weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

	const day = date.getDate();

	const month = date.getMonth();

	const returnDateString = (num: number) => `${day > 9 ? day : `0${day}`}`;

	return `${returnDateString(day)}.${returnDateString(month)}`;
};
