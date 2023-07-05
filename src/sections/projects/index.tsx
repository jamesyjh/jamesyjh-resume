import React, { useContext, useState } from "react";
import styled from "styled-components";
import SectionHeader from "../../components/common/section-header";
import { AppContext } from "../../context/AppContext";
import { projects } from "./data";
import ProjectHighlight from "./highlight";

type ProjectKey = keyof typeof projects;

const ProjectsContainer = styled.section`
  padding: 12vh 0;
  background-color: var(--palette-1-1);
  background-image: linear-gradient(315deg, #0b0b0b 20%, var(--color-primary-dark) 90%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
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
    <ProjectsContainer className="flex flex-col justify-center items-center p-0 overflow-hidden" id="projects">
      <ContentWrapper className="mx-auto max-w-full sm:min-w-[40vw] lg:max-w-[48vw] px-4">
        <SectionHeader showDivider title="Things I've Built" />
        <div className="flex flex-col-reverse sm:flex-row mt-2 sm:mt-8">
          <ProjectHighlight activeProject={projects[activeProject as ProjectKey]} />
          <div className="my-2 ml-0 sm:ml-5 max-w-max text-center">
            <ul className="p-0.5 flex flex-row sm:flex-col gap-4">
              {Object.keys(projects).map((key) => {
                return (
                  <li
                    id={key}
                    key={key}
                    className="p-2 bg-primary transition-all duration-200 ease-out rounded-md hover:bg-secondary cursor-pointer"
                    onClick={() => handleClick(key as ProjectKey)}
                    style={{ backgroundColor: key === activeProject ? "var(--palette-5-4)" : "inherit" }}
                  >
                    <span className="text-gray-300 overflow-hidden px-2 h-4 text-xs tracking-wide font-medium no-underline cursor-pointer">
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
