import React from "react";
import styled from "styled-components";

const About = () => {
    const StyledSection = styled.section`
        min-height: 100vh;
        padding: 0;
        p {
            max-width: 550px;
            color: #fff;
        }

        // background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)));
        background: #000;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    `;

    const StyledContent = styled.div`
    margin-left auto;
    margin-right: auto;
`;

    return (
        <StyledSection className="d-flex flex-column justify-content-center">
            <StyledContent>About me</StyledContent>
        </StyledSection>
    );
};

export default About;
