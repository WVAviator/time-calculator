/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import useMaskedNumericInput from "../../hooks/useMaskedNumericInput";
import Button from "../Button";
import Display from "../Display";
import Keypad from "../Keypad";
import { getMinutesFromStr, getStrFromMinutes } from "./conversions";

const Calculator = () => {
	const [mask, setMask] = useState("00:00");
	const { value, setValue } = useMaskedNumericInput(mask);

	const [previousValue, setPreviousValue] = useState("");
	const [operator, setOperator] = useState("");

	const handleValueInput = (buttonVal: string) => {
		setValue(value + buttonVal);
	};

	const handleClear = () => {
		setValue("");
		setPreviousValue("");
		setOperator("");
	};

	const handleAdd = () => {
		setOperator("+");
		setPreviousValue(value);
		setValue("");
	};

	const handleSubtract = () => {
		setOperator("-");
		setPreviousValue(value);
		setValue("");
	};

	const handleMultiply = () => {
		setOperator("*");
		setPreviousValue(value);
		setValue("");
		setMask("0");
	};

	const handleEquals = () => {
		if (!operator || !previousValue) {
			return;
		}

		const currentMinutes = getMinutesFromStr(value);
		const previousMinutes = getMinutesFromStr(previousValue);

		if (operator === "+") {
			const newTime = getStrFromMinutes(currentMinutes + previousMinutes);
			setValue(newTime);
			setPreviousValue(newTime);
			setOperator("");
		} else if (operator === "-") {
			const newTime = getStrFromMinutes(previousMinutes - currentMinutes);
			setValue(newTime);
			setPreviousValue(newTime);
			setOperator("");
		} else if (operator === "*") {
			const newTime = getStrFromMinutes(currentMinutes * previousMinutes);
			setMask("00:00");
			setValue(newTime);
			setPreviousValue(newTime);
			setOperator("");
		}
	};

	return (
		<main>
			<Display
				value={value}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setValue(e.target.value)
				}
			/>

			<div
				css={css`
					display: flex;
				`}
			>
				<Keypad>
					<Button onClick={handleClear} colWidth={3}>
						AC
					</Button>
					<Button onClick={() => handleValueInput("7")}>7</Button>
					<Button onClick={() => handleValueInput("8")}>8</Button>
					<Button onClick={() => handleValueInput("9")}>9</Button>
					<Button onClick={() => handleValueInput("4")}>4</Button>
					<Button onClick={() => handleValueInput("5")}>5</Button>
					<Button onClick={() => handleValueInput("6")}>6</Button>
					<Button onClick={() => handleValueInput("1")}>1</Button>
					<Button onClick={() => handleValueInput("2")}>2</Button>
					<Button onClick={() => handleValueInput("3")}>3</Button>
					<Button onClick={() => handleValueInput("0")}>0</Button>
					<Button onClick={handleEquals} colWidth={2}>
						=
					</Button>
				</Keypad>

				<Keypad cols={1}>
					<Button onClick={handleAdd}>+</Button>
					<Button onClick={handleSubtract}>-</Button>
					<Button onClick={handleMultiply}>*</Button>
				</Keypad>
			</div>
		</main>
	);
};
export default Calculator;
