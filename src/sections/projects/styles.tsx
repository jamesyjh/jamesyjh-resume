import styled from "styled-components";
import { motion } from "framer-motion";

export const ImageContainer = styled.div`
  border: 2px solid #333;
  border-radius: 0.5em;
  background: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  /* border: 2px solid red; */
`;

export const ProjectHighlightContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  > img {
    align-self: left;
    max-width: 40vw;
    height: auto;
    border-radius: 0.5em;
  }

  > .badges-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`;

export const LinksContainer = styled(motion.div)`
  display: flex;
  gap: 1em;

  > span {
    display: flex;
    justify-content: center;
    border: 2px solid #fff;
    border-radius: 1em;
    padding: 10px;
    gap: 0.75em;
  }
`;

export const BadgesContainer = styled(motion.div)`
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
`;
