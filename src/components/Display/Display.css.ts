import { css } from "@emotion/react";
import { useMemo } from "react";

const useDisplayStyles = () => {
	const displayStyles = useMemo(() => {
		return css`
			padding: 1rem;
			margin: 1rem;
			border: 1px solid #000;
			border-radius: 0.5rem;
			background-color: #fff;
			box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			& > * {
				all: unset;
				font-size: 1.5rem;
				width: 100%;
				height: 100%;
				text-align: right;
			}
		`;
	}, []);

	return { displayStyles };
};

export default useDisplayStyles;
