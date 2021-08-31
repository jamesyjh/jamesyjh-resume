import React from "react";
import styled from "styled-components";
import CodeIcon from "@material-ui/icons/Code";
import SectionHeader from "../SectionHeader";

const Projects = () => {
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
	`;
	return (
		<StyledSection
			className="d-flex flex-column justify-content-center"
			id="projects"
		>
			<StyledContent>
				<SectionHeader icon={CodeIcon}>My Creations</SectionHeader>
				<br />
				<p>
					<strong>Coming soon...</strong>
				</p>
			</StyledContent>
		</StyledSection>
	);
};

export default Projects;
