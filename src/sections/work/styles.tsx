import styled from "styled-components";

export const WorkContainer = styled.div``;

export const WorkDetailsContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  > h2 {
    margin-bottom: 0.75em;

    > span {
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
  }
`;

export const BulletListContainer = styled.ul`
  list-style: inside;
  list-style-type: none;

  > li {
    margin: 0.75em 0;
  }
`;
