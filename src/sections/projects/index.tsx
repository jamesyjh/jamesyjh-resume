import React, { useContext, useState } from "react";
import styled from "styled-components";
import SectionHeader from "../../components/common/section-header";
import { AppContext } from "../../context/AppContext";
import { projects } from "./data";
import ProjectHighlight from "./highlight";
import bgImage from "../../assets/images/mountains.jpg";

type ProjectKey = keyof typeof projects;

const ProjectsContainer = styled.section`
  padding: 12vh 0;
  /* background-color: var(--palette-1-1); */
  background-image: linear-gradient(rgba(0, 0, 0, 0.87), rgba(0, 0, 0, 0.8)), url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const ContentWrapper = styled.div`
  position: relative;
`;

const Projects = () => {
  const { activeProject, setActiveProject } = useContext(AppContext);

  const handleClick = (projectName: string) => {
    setActiveProject(projectName);
  };

  return (
    <ProjectsContainer className="flex flex-col items-center justify-center p-0 overflow-hidden" id="projects">
      <ContentWrapper className="mx-auto max-w-full sm:min-w-[40vw] lg:max-w-[48vw] px-4">
        <SectionHeader showDivider title="Things I've Built" />
        <div className="flex flex-col-reverse mt-2 sm:flex-row sm:mt-8">
          <ProjectHighlight activeProject={projects[activeProject as ProjectKey]} />
          <div className="my-2 ml-0 text-center sm:ml-5 max-w-max">
            <ul className="p-0.5 flex flex-row sm:flex-col gap-4">
              {Object.keys(projects).map((key) => {
                return (
                  <li
                    id={key}
                    key={key}
                    className="p-2 transition-all duration-200 ease-out rounded-md cursor-pointer bg-primary hover:bg-secondary"
                    onClick={() => handleClick(key as ProjectKey)}
                    style={{ backgroundColor: key === activeProject ? "var(--palette-6-2)" : "inherit" }}
                  >
                    <span className="h-4 px-2 overflow-hidden text-xs font-medium tracking-wide text-gray-300 no-underline cursor-pointer">
                      {projects[key as ProjectKey].title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </ContentWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
