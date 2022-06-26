import { fireEvent, render } from "@testing-library/react";
import React from "react";
import useMaskedNumericInput from "./useMaskedNumericInput";

const setup = (mask: string) => {
	const Component = () => {
		const { value, setValue } = useMaskedNumericInput(mask);
		return (
			<input value={value} onChange={(e) => setValue(e.target.value)} />
		);
	};

	const utils = render(<Component />);
	const input = utils.getByRole("textbox") as HTMLInputElement;
	return { input, ...utils };
};

it("should mask any passed in values with the provided numeric mask", () => {
	const { input } = setup("000-000-0000");
	fireEvent.change(input, { target: { value: "1234567890" } });
	expect(input.value).toBe("123-456-7890");
});

it("should only slot in numeric characters from the mask", () => {
	const { input } = setup("937%%1010gg4^^4");
	fireEvent.change(input, { target: { value: "123456789" } });
	expect(input.value).toBe("123%%4567gg8^^9");
});

it("should ignore non-numeric characters in input", () => {
	const { input } = setup("00:00:00");
	fireEvent.change(input, {
		target: { value: "1aaaaasdfa23daa4fhaa5j6aaavvv" },
	});
	expect(input.value).toBe("12:34:56");
});

it("should work with an updated mask", () => {
	const MaskChangeComponent = () => {
		const [mask, setMask] = React.useState("00:00:00");
		const { value, setValue } = useMaskedNumericInput(mask);

		return (
			<div>
				<input
					data-testid="numInput"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<input
					data-testid="maskInput"
					value={mask}
					onChange={(e) => setMask(e.target.value)}
				/>
			</div>
		);
	};

	const utils = render(<MaskChangeComponent />);
	const numInput = utils.getByTestId("numInput") as HTMLInputElement;
	const maskInput = utils.getByTestId("maskInput") as HTMLInputElement;

	fireEvent.change(numInput, { target: { value: "123456" } });
	expect(numInput.value).toBe("12:34:56");
	fireEvent.change(maskInput, { target: { value: "000-000" } });
	expect(numInput.value).toBe("123-456");
	fireEvent.change(numInput, { target: { value: "123456789" } });
	expect(numInput.value).toBe("123456-789");
	fireEvent.change(maskInput, { target: { value: "0|00-000-00|0" } });
	expect(numInput.value).toBe("1|23-456-78|9");
});
