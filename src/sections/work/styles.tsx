import styled from "styled-components";

export const WorkContainer = styled.div``;

export const WorkDetailsContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  > ul > li > h2 {
    margin-bottom: 0.75em;
  }
  #company-header > span {
    text-decoration: none;
    transition: all 150ms ease-out;
    color: var(--palette-3-5);
    opacity: 0.7;

    &:hover {
      cursor: pointer;
      color: var(--palette-3-5);
      opacity: 1;
    }
  }
`;

export const BulletListContainer = styled.ul`
  list-style: inside;
  list-style-type: none;
  line-height: 1.5rem;
  > li {
    margin: 1.25rem 1.5rem;
  }
`;
