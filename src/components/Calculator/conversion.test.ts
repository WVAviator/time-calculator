import { getMinutesFromStr, getStrFromMinutes } from "./conversions";

it("should convert from time to minutes", () => {
	const time = "1:00";
	const minutes = getMinutesFromStr(time);
	expect(minutes).toBe(60);
});

it("should convert from minutes to time string", () => {
	const minutes = 60;
	const time = getStrFromMinutes(minutes);
	expect(time).toBe("1:00");
});
