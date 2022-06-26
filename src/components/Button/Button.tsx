/** @jsxImportSource @emotion/react */
import React from "react";
import useButtonStyles from "./Button.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	colWidth?: number;
	size?: string;
}

const Button: React.FC<ButtonProps> = ({
	children,
	size = "5rem",
	colWidth = 1,
	...rest
}) => {
	const { buttonStyles } = useButtonStyles(size, colWidth);

	return (
		<button css={buttonStyles} {...rest}>
			<span>{children}</span>
		</button>
	);
};
export default Button;
