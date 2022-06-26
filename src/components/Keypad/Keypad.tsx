/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import useKeypadStyles from "./Keypad.css";

interface KeypadProps {
	children: React.ReactNode;
	rows?: number;
	cols?: number;
}

const Keypad: React.FC<KeypadProps> = ({ children, rows = 4, cols = 3 }) => {
	const { keypadStyles } = useKeypadStyles(rows, cols);

	return <div css={keypadStyles}>{children}</div>;
};
export default Keypad;
