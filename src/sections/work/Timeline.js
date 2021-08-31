import React from "react";
import styled from "styled-components";
import "./timeline.css";
import abliminalLogo from "../../assets/images/abliminal.svg";
import eyridLogo from "../../assets/images/eyrid.svg";
import StyledLineBreak from "../../components/StyledLineBreak";

const TimelineTree = () => {
	const StyledList = styled.li`
		float: left;
		list-style: outside outside outside;
		width: 50%;
	`;
	return (
		<ul className="timeline-tree">
			<li className="timeline-event">
				<label className="timeline-event-icon"></label>
				{/* <img src={abliminalLogo} className="img-fluid timeline-event-icon" /> */}
				<div className="timeline-event-copy">
					<p className="timeline-event-thumbnail">June 2021 - Present</p>
					<h3>Full Stack Web Developer</h3>
					<div className="d-flex justify-content-between">
						<h4>EyrID</h4>
						<div style={{ width: "125px" }}>
							<img src={eyridLogo} className="img-fluid" />
						</div>
					</div>

					<div className="mt-2 pb-4">
						<StyledLineBreak />
					</div>

					<p>
						<strong>Cyber Risk Assessment Platform</strong>
					</p>

					<ul>
						<li>
							Architected UI and backend for B2B platform with a team of two
							developers
						</li>
						<li>
							Led feature migration to a multi-tenant architecture to promote
							scalability and optimization of resource consumption
						</li>
						<li>
							Enhanced platform security by migrating to role based access
							control and authentication leveraging various third-party APIs
						</li>
						<li>
							Mentored co-op students during multiple sprints to successfully
							deploy new features and enhance the look and feel of UI
						</li>
					</ul>
				</div>
			</li>
			<li className="timeline-event">
				<label className="timeline-event-icon"></label>
				<div className="timeline-event-copy">
					<p className="timeline-event-thumbnail">January 2021 - June 2021</p>
					<h3>Platform Developer</h3>
					<div className="d-flex justify-content-between">
						<h4>Abliminal</h4>
						<div style={{ width: "125px" }}>
							<img src={abliminalLogo} className="img-fluid" />
						</div>
					</div>

					<div className="mt-2 pb-4">
						<StyledLineBreak />
					</div>
					<p>
						<strong></strong>
					</p>

					<ul>
						<li>
							Built and released company's cybersecurity training management
							mobile application built using React Native
						</li>
						<li>
							Delivered cybersecurity training and awareness platform to
							prospective clients, helped convert 15% of engagement to active
							customers
						</li>
						<li>
							Developed and maintained code for company website leveraging tools
							such as React, JavaScript, HTML, and CSS
						</li>
						<li>
							Engaged in building knowledge transfer plan for prospective co-ops
							and developers resulting in shorter and more efficient onboarding
							periods
						</li>
					</ul>
				</div>
			</li>
			<li className="timeline-event">
				<label className="timeline-event-icon"></label>
				<div className="timeline-event-copy">
					<p className="timeline-event-thumbnail">
						September 2020 - January 2021
					</p>
					<h3>Platform Co-op</h3>
					<div className="d-flex justify-content-between">
						<h4>Abliminal</h4>
						<div style={{ width: "125px" }}>
							<img src={abliminalLogo} className="img-fluid" />
						</div>
					</div>
					<div className="mt-2 pb-4">
						<StyledLineBreak />
					</div>

					<ul>
						<li>
							Assisted in the development of Python scripts for automated tests
							and web scrapers
						</li>
						<li>
							Worked in a two-member team to redesign and start first iteration
							of company's main website
						</li>
					</ul>
				</div>
			</li>
		</ul>
	);
};

export default TimelineTree;
