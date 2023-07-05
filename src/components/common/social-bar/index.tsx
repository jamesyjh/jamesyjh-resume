import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineDownload } from "react-icons/ai";
import styled from "styled-components";
import { navigateToEmailLink, navigateToExternalLink } from "../../../helpers/navigation";

interface SocialBarProps {}

const SocialBarContainer = styled(motion.div)`
  > div > svg {
    transition: 150ms all ease-in-out;

    &:hover {
      cursor: pointer;
      color: var(--palette-3-5);
      transform: translateY(-3px);
    }
  }
`;

const SocialBar = (props: SocialBarProps) => {
  return (
    <SocialBarContainer className="flex gap-4 justify-center">
      <div onClick={() => navigateToExternalLink("https://github.com/jamesyjh")}>
        <AiFillGithub size={30} />
      </div>
      <div onClick={() => navigateToExternalLink("https://www.linkedin.com/in/jamesyjh")}>
        <AiFillLinkedin size={30} />
      </div>
      <div>
        <AiOutlineMail onClick={() => navigateToEmailLink("mailto:jamesyj.hong@gmail.com")} size={30} />
      </div>
    </SocialBarContainer>
  );
};

export default SocialBar;
