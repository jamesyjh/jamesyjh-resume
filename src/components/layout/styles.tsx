import styled from "styled-components";

const LayoutContainer = styled.div`
  position: relative;
  background-image: linear-gradient(315deg, #0b0b0b 20%, var(--color-primary-dark) 90%);

  > div {
    transition: all 100ms ease-in;
  }
`;

export { LayoutContainer };
