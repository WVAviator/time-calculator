import { fireEvent, render } from "@testing-library/react";
import Calculator from "./Calculator";
import React from "react";

const setup = () => {
	const utils = render(<Calculator />);
	const input = utils.getByRole("textbox") as HTMLInputElement;
	return { input, ...utils };
};

it("user-entered numbers appear and are masked correctly", async () => {
	const { input } = setup();
	fireEvent.change(input, { target: { value: "123" } });
	expect(input.value).toBe("1:23");
	fireEvent.change(input, { target: { value: "1234" } });
	expect(input.value).toBe("12:34");
	fireEvent.change(input, { target: { value: "12345" } });
	expect(input.value).toBe("123:45");
});

it("properly adds two times", async () => {
	const { input, getByText } = setup();
	const addButton = getByText("+");
	const equalsButton = getByText("=");
	fireEvent.change(input, { target: { value: "123" } });
	fireEvent.click(addButton);
	fireEvent.change(input, { target: { value: "234" } });
	fireEvent.click(equalsButton);
	expect(input.value).toBe("3:57");
});

it("properly subtracts two times", async () => {
	const { input, getByText } = setup();
	const subtractButton = getByText("-");
	const equalsButton = getByText("=");
	fireEvent.change(input, { target: { value: "200" } });
	fireEvent.click(subtractButton);
	fireEvent.change(input, { target: { value: "37" } });
	fireEvent.click(equalsButton);
	expect(input.value).toBe("1:23");
});

it("properly multiplies time", async () => {
	const { input, getByText } = setup();
	const multiplyButton = getByText("*");
	const equalsButton = getByText("=");
	fireEvent.change(input, { target: { value: "518" } });
	fireEvent.click(multiplyButton);
	fireEvent.change(input, { target: { value: "3" } });
	fireEvent.click(equalsButton);
	expect(input.value).toBe("15:54");
});
