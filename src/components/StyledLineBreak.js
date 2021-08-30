import React from "react";
import styled from "styled-components";

const StyledLineBreak = () => {
	const StyledHr = styled.h1`
		position: relative;
		color: #fff;

		&:before {
			content: "";
			position: absolute;
			right: 0;
			bottom: 0;
			height: 5px;
			width: 100px;
			background-color: #fff;
		}

		&:after {
			content: "";
			position: absolute;
			right: 0;
			bottom: 2px;
			height: 1px;
			width: 100%;
			background-color: #fff;
		}
	`;

	return <StyledHr />;
};

export default StyledLineBreak;
