import React from "react";
import "./styles.css";
import styled from "styled-components";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SchoolIcon from "@material-ui/icons/School";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import CodeIcon from "@material-ui/icons/Code";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

import { useMediaQuery } from "react-responsive";

import { Navbar, Container, Nav } from "react-bootstrap";

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

	const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

	if (!isMobile) {
		return (
			<>
				<FloatingMenu>
					<MenuLink href="#about" className="active">
						<AccountCircleIcon />
						&nbsp;&nbsp;About
					</MenuLink>
					<MenuLink href="#work">
						<WorkOutlineIcon /> &nbsp;&nbsp;Work
					</MenuLink>

					<MenuLink href="#projects">
						<CodeIcon /> &nbsp;&nbsp;Projects
					</MenuLink>
					<MenuLink href="#contact">
						<AlternateEmailIcon />
						&nbsp;&nbsp;Contact
					</MenuLink>
				</FloatingMenu>
			</>
		);
	}

	return (
		<>
			<Navbar bg="dark" expand="lg" fixed="top" variant="dark">
				<Container>
					<Navbar.Brand href="#home"></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#about">About</Nav.Link>
							<Nav.Link href="#work">Work</Nav.Link>
							<Nav.Link href="#projects">Creations</Nav.Link>
							<Nav.Link href="#contact">Contact Me</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
