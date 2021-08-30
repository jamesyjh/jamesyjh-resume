import React from "react";
import "./styles.css";
import profilePhoto from "../../assets/profile.jpg";
import styled from "styled-components";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SchoolIcon from "@material-ui/icons/School";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import CodeIcon from "@material-ui/icons/Code";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

const Navigation = () => {
	// about, education, experience, skills, projects, contact

	const FloatingMenu = styled.nav`
		background: transparent;
		// border: 2px solid #222;
		border-radius: 5px;
		// padding: 5px;
		width: 110px;
		height: 250px;
		z-index: 100;
		position: fixed;
		bottom: 10vh;
		left: 3vw;
		display: flex;
		flex-direction: column;
		font-family: "Raleway";
		font-size: 0.9em;
		font-weight: 400;
	`;

	const MenuLink = styled.a`
		// margin: 0 0.5em;
		// padding: 15px;
		// background: #c9c9c9;
		text-align: center;
		height: 100%;
		color: white;
		text-decoration: none;
		display: flex;
		// flex-direction: column;
		// justify-content: center;
	`;

	return (
		<>
			<FloatingMenu>
				<MenuLink href="#about">
					<AccountCircleIcon />
					&nbsp;&nbsp;About
				</MenuLink>
				<MenuLink href="#experience">
					<WorkOutlineIcon /> &nbsp;&nbsp;Work
				</MenuLink>
				<MenuLink href="#skills">
					<CodeIcon /> &nbsp;&nbsp;Projects
				</MenuLink>
				<MenuLink href="#contact">
					<AlternateEmailIcon />
					&nbsp;&nbsp;Contact
				</MenuLink>
			</FloatingMenu>
		</>
	);
};

export default Navigation;
