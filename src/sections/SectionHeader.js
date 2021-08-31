import React from "react";
import styled from "styled-components";

const SectionHeader = ({ children, icon }) => {
	const HeaderIcon = icon;

	const StyledHeader = styled.h1`
		position: relative;
		padding: 0;
		margin: 0;
		color: #fff;
		-webkit-transition: all 0.4s ease 0s;
		-o-transition: all 0.4s ease 0s;
		transition: all 0.4s ease 0s;
		font-family: "Raleway";
		font-size: 3.5vh;
		font-weight: 700;
		letter-spacing: 1.5px;
		line-height: 1.25em;
		padding-bottom: 15px;
		position: relative;

		&:before {
			content: "";
			position: absolute;
			left: 0;
			bottom: 0;
			height: 5px;
			width: 100px;
			background-color: #fff;
		}

		&:after {
			content: "";
			position: absolute;
			left: 0;
			bottom: 2px;
			height: 1px;
			width: 100%;
			max-width: 100%;
			background-color: #fff;
		}
	`;

	return (
		<>
			<StyledHeader>{children}</StyledHeader>
		</>
	);
};

export default SectionHeader;
