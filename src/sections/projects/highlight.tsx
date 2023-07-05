import React from "react";
import Badges from "./badges";
import Links from "./links";
import { ImageContainer, ProjectHighlightContainer } from "./styles";

type ProjectHighlightProps = {
  activeProject: {
    title: string;
    link: string;
    desc: string;
    img?: string;
    badges: Array<string>;
    repoUrl?: string;
    demoUrl?: string;
  };
};

const ProjectHighlight = ({ activeProject }: ProjectHighlightProps) => {
  const { title, desc, img, repoUrl, demoUrl, badges } = activeProject;
  return (
    <ProjectHighlightContainer className="flex flex-col sm:min-w-[20vw] sm:max-w-[30vw] max-w-[100%] overflow-auto">
      <ImageContainer className="h-[250px] sm:max-w-[28vw]" img={img} />
      <h2 className="text-xl sm:text-2xl font-semibold mt-3 pt-3">{title}</h2>
      <p className="whitespace-normal font-light my-5">{desc}</p>
      <div className="pt-2">
        <Badges badges={badges} />
      </div>
      <div className="mt-5">
        <Links github={repoUrl} demo={demoUrl} />
      </div>
    </ProjectHighlightContainer>
  );
};

export default ProjectHighlight;
