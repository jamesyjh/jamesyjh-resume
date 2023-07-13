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
      <h2 className="pt-3 mt-3 text-xl font-semibold sm:text-2xl">{title}</h2>
      <p className="my-5 font-light whitespace-normal">{desc}</p>
      <div className="pt-2">
        <Badges badges={badges} />
      </div>
      <div className="mt-5">
        <Links github={repoUrl} demo={demoUrl} title={title} />
      </div>
    </ProjectHighlightContainer>
  );
};

export default ProjectHighlight;
