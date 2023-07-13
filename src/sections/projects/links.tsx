import React from "react";
import { LuGithub } from "react-icons/lu";
import { IoMdOpen } from "react-icons/io";
import { LinksContainer } from "./styles";
import BasicButton from "../../components/common/button/basic-button";
import { navigateToExternalLink } from "../../helpers/navigation";

interface LinksProps {
  github?: string;
  demo?: string;
  title: string;
}

const Links = ({ github, demo, title }: LinksProps) => {
  return (
    <LinksContainer>
      {github && (
        <BasicButton onClick={() => navigateToExternalLink(github)}>
          <LuGithub size={16} />
          <span>Source</span>
        </BasicButton>
      )}

      {demo && (
        <BasicButton id={`project-${title}`} onClick={() => navigateToExternalLink(demo)}>
          <IoMdOpen size={16} />
          <span>Demo</span>
        </BasicButton>
      )}
    </LinksContainer>
  );
};

export default Links;
