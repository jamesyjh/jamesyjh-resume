import React from "react";
import styled from "styled-components";
import profileImage from "../../assets/images/profile2.jpg";
import SectionHeader from "../../components/common/section-header";
import TechStackGrid from "./grid";
import bgImage from "../../assets/images/mountains.jpg";

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 0;
  p {
    max-width: 800px;
    color: #fff;
    line-height: 1.5em;
  }

  background-color: var(--palette-1-1);
  /* background-image: linear-gradient(315deg, #0b0b0b 20%, var(--color-primary-dark) 90%); */
  background-image: linear-gradient(rgba(0, 0, 0, 0.87), rgba(0, 0, 0, 0.8)), url(${bgImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`;

const About = () => {
  return (
    <AboutContainer className="flex flex-col items-center justify-center min-h-screen p-0" id="about">
      <div className="mx-auto max-w-full sm:max-w-[60vw] lg:max-w-[40vw] px-4">
        <div className="flex items-center">
          <img
            className="mx-auto rounded-full img-fluid img-profile"
            src={profileImage}
            alt="profile-image"
            style={{
              maxWidth: "10rem",
              maxHeight: "10rem",
              filter: "saturate(0)",
            }}
          />
        </div>

        <div className="flex">
          <div className="mt-5 lead">
            <p className="pb-5 my-4 font-light text-md sm:text-md">
              I'm A Toronto-based software engineer finding creative ways to bring value and productivity through
              technology. I strive for constant learning and improvement. I'm currently focused on building scalable and
              secure APIs at Scotiabank.
            </p>

            <SectionHeader showDivider title="Tools Used:" />
            <TechStackGrid />
          </div>
          <div></div>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
