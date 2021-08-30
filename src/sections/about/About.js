import React from "react";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import profileImage from "../../assets/images/profile.jpg";
import StyledLineBreak from "../../components/StyledLineBreak";

const About = () => {
	const StyledSection = styled.section`
		min-height: 100vh;
		padding: 0;
		p {
			max-width: 800px;
			color: #fff;
			line-height: 1.5em;
		}

		// background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)));
		background: #000;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
	`;

	const StyledContent = styled.div`
		margin-left: auto;
		margin-right: auto;
	`;

	const StyledList = styled.li`
		float: left;
		list-style: outside outside outside;
		width: 50%;
	`;

	return (
		<StyledSection className="d-flex flex-column justify-content-center">
			<StyledContent>
				<SectionHeader icon={AccountCircleIcon}>About Me</SectionHeader>
				<div className="d-flex">
					<div className="lead mt-5">
						<p>
							Hello, my name is James and I'm a hardworking developer who loves
							to learn by diving into the deep end of technology and using what
							I've learned in meaningful ways.
						</p>
						<p>
							My journey through technology started in 2017 when I sparked a
							curiousity to try something for fun I hadn't done before - turn an
							idea into a real web app. It was an incredibly fun - yet difficult
							process. But what most compelled me (and still amazes me now) from
							this initial encounter was the ocean of available technologies
							built and being built by our worldwide community of incredible
							engineers enabling us to help breathe life into our ideas.
						</p>
						<p>
							I'm still learning and continually expanding my knowledge every
							day, but this journey just seems to get more enjoyable and
							exciting along the way.
						</p>

						<div className="pt-5 mb-5">
							<StyledLineBreak />
						</div>

						<p>
							Here's a bit of the tools and technologies I'm using these days:
						</p>

						<ul className="text-secondary d-block">
							<StyledList>JavaScript</StyledList>
							<StyledList>React</StyledList>
							<StyledList>Node.js</StyledList>
							<StyledList>MongoDB</StyledList>
							<StyledList>Docker</StyledList>
							<StyledList>Kubernetes</StyledList>
						</ul>
					</div>
					<div>
						{/* <span className="">
							<img
								className="img-fluid img-profile rounded-circle mx-auto mb-2"
								src={profileImage}
								alt="..."
							/>
						</span> */}
					</div>
				</div>
			</StyledContent>
		</StyledSection>
	);
};

export default About;
