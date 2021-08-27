import React from "react";
import "./styles.css";
import profilePhoto from "../../assets/profile.jpg";
import styled from "styled-components";

const Navigation = () => {
    // about, education, experience, skills, projects, contact

    const FloatingMenu = styled.nav`
        background: transparent;
        border: 2px solid #fff;
        padding: 5px;
        width: 110px;
        height: 300px;
        z-index: 100;
        position: fixed;
        bottom: 10vh;
        left: 10vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `;

    const MenuLink = styled.a`
        // font-size: 0.9em;
        text-align: center;
        margin: 0 0.5em;
        color: white;
        text-decoration: none;
    `;

    return (
        <>
            <FloatingMenu>
                <MenuLink href="#about">About</MenuLink>
                <MenuLink href="#education">Education</MenuLink>
                <MenuLink href="#experience">Experience</MenuLink>
                <MenuLink href="#skills">Skills</MenuLink>
                <MenuLink href="#projects">Projects</MenuLink>
                <MenuLink href="#contact">Contact</MenuLink>
            </FloatingMenu>
        </>
    );
};

export default Navigation;
