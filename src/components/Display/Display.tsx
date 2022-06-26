/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import useDisplayStyles from "./Display.css";

type InputMode = "time" | "number";

interface DisplayProps extends React.HTMLAttributes<HTMLInputElement> {
	value: string;
}

const Display: React.FC<DisplayProps> = (props) => {
	const { displayStyles } = useDisplayStyles();

	return (
		<div css={displayStyles}>
			<input type="text" {...props} />
		</div>
	);
};
export default Display;
