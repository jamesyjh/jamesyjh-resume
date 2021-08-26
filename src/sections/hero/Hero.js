import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import bgImage from "../../assets/images/toronto.jpg";
import LinkedinIcon from "../../assets/images/icons/linkedin.svg";
import GithubIcon from "../../assets/images/icons/github.svg";
import EmailIcon from "../../assets/images/icons/mail.svg";
// import DownloadIcon from "../../assets/images/icons/download.svg";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const StyledSection = styled.section`
    min-height: 100vh;
    padding: 0;
    p {
        max-width: 550px;
        color: #fff;
    }

    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${bgImage});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
`;

const StyledContent = styled.div`
    margin-left auto;
    margin-right: auto;
`;

const StyledIcon = styled.a`
    color: #fff;
`;

const StyledButton = styled.button`
    background: transparent;
    color: #c9c9c9;
    border: 3px solid #c9c9c9;
    border-radius: 10px;
    padding: 8px;
`;

const StyledSocialLink = styled.a`
    background: transparent;
`;

const StyledMotionButton = styled(motion.button)`
    background: transparent;
    border: none;
    padding: 8px;
    border-radius: 50px;
    box-shadow: none;
    transition: ease-in-out 150ms;
    &:hover {
        box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 10px 0px;
    }
`;

const Hero = () => {
    return (
        <StyledSection className="d-flex flex-column justify-content-center">
            <StyledContent>
                <p className="lead mb-4">
                    <b>Hello, my name is</b>
                </p>
                <h1
                    className="mb-4"
                    style={{
                        fontFamily: "Raleway",
                        fontSize: "8vh",
                        fontWeight: 800,
                        color: "#fff",
                    }}
                >
                    James&nbsp;Hong
                </h1>
                {/* <div className=" mb-5">
                    Toronto, ON · (437) 984-7589 ·<a href="mailto:name@email.com">jamesyjhong@gmail.com</a>
                </div> */}
                <p className="lead mb-4">
                    I'm a Toronto-based full stack developer finding creative ways to bring value and productivity through
                    technology. My current area of focus is building scalabe and secure B2B solutions at EyrID.
                </p>

                <div className="d-flex justify-content-around" style={{ margin: 50 }}>
                    <StyledMotionButton whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                        <StyledSocialLink className="social-icon" href="#!">
                            <img src={LinkedinIcon} alt="linkedin" className="img-fluid" />
                        </StyledSocialLink>
                    </StyledMotionButton>

                    <StyledMotionButton whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                        <StyledSocialLink className="social-icon" href="#!">
                            <img src={GithubIcon} alt="github" />
                        </StyledSocialLink>
                    </StyledMotionButton>

                    <StyledMotionButton whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                        <StyledSocialLink className="social-icon" href="#!">
                            <img src={EmailIcon} alt="email" />
                        </StyledSocialLink>
                    </StyledMotionButton>

                    <a className="social-icon" href="#!">
                        <motion.button
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                background: "transparent",
                                color: "#c9c9c9",
                                border: "3px solid #c9c9c9",
                                borderRadius: "10px",
                                padding: "8px 10px",
                                fontFamily: "Montserrat",
                                fontWeight: 500,
                                letterSpacing: 2,
                            }}
                        >
                            {/* <CloudDownloadIcon  /> */}
                            RESUME
                        </motion.button>
                    </a>
                </div>
            </StyledContent>
        </StyledSection>
    );
};

export default Hero;