import { css } from "@emotion/react";
import { useMemo } from "react";

const useKeypadStyles = (rows: number, cols: number) => {
	const keypadStyles = useMemo(() => {
		return css`
			margin: 1rem;
			display: grid;
			width: ${cols * 25}%;
			height: ${rows * 25}%;
			gap: 0.5rem;
			grid-template-columns: repeat(${cols.toString()}, 1fr);
			grid-template-rows: repeat(${rows.toString()}, 1fr);
		`;
	}, [rows, cols]);

	return { keypadStyles };
};

export default useKeypadStyles;
