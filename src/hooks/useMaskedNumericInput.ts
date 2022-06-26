import { useEffect, useState } from "react";

const useMaskedNumericInput = (mask: string) => {
	const [internalValue, setInternalValue] = useState("");

	useEffect(() => {
		setValue(internalValue);
		console.log("Mask changed: ", mask);
	}, [mask]);

	const setValue = (value: string) => {
		let newValue = value.replace(/[^0-9]*/g, "");

		let j = newValue.length - 1;

		for (let i = mask.length - 1; i >= 0; i--) {
			if (j < 0) break;

			if (!/\d/.test(mask[i])) {
				newValue =
					newValue.slice(0, j + 1) + mask[i] + newValue.slice(j + 1);
				j++;
			}

			j--;
		}
		setInternalValue(newValue);
	};

	return {
		value: internalValue,
		setValue,
	};
};

export default useMaskedNumericInput;
