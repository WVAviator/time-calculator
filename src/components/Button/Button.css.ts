import { css } from "@emotion/react";
import { useMemo } from "react";

const useButtonStyles = (size: string, colWidth: number) => {
	const buttonStyles = useMemo(() => {
		return css`
			all: unset;
			grid-column: span ${colWidth};
			border: 1px solid #000;
			border-radius: 0.5rem;
			background-color: #fff;
			box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 1rem;
			& > * {
				width: 100%;
				height: 100%;
				text-align: center;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 1.5rem;
			}
			&:hover {
				cursor: pointer;
				background-color: #dbdbdb;
			}
		`;
	}, [size]);

	return { buttonStyles };
};

export default useButtonStyles;
