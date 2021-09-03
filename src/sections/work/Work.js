import React from "react";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import SectionHeader from "../SectionHeader";
import styled from "styled-components";
import Timeline from "./Timeline";
import StyledLineBreak from "../../components/StyledLineBreak";

const Work = () => {
	const StyledSection = styled.section`
		min-height: 100vh;
		padding: 0;
		p {
			max-width: 800px;
			color: #fff;
			line-height: 1.5em;
		}

		// background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)));
		background-color: #2d3436;
		background-image: linear-gradient(315deg, #191919 0%, #000000 74%);
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
	`;

	const StyledContent = styled.div`
		margin-left: auto;
		margin-right: auto;
		margin-top: 10em;
		margin-top: 10em;

		@media (max-width: 500px) {
			margin-left: 10px;
			margin-right: 10px;
		}
	`;
	return (
		<StyledSection
			className="d-flex flex-column justify-content-center"
			id="work"
		>
			<StyledContent>
				<SectionHeader icon={WorkOutlineIcon}>Work Experience</SectionHeader>
				<div className="">
					<Timeline />
				</div>
			</StyledContent>
		</StyledSection>
	);
};

export default Work;
