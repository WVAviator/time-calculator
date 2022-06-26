export const getMinutesFromStr = (time: string) => {
	if (time.indexOf(":") === -1) return +time;
	const [hours, minutes] = time.split(":").map(Number);
	return hours * 60 + minutes;
};

export const getStrFromMinutes = (totalMinutes: number) => {
	const hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;
	return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
};
