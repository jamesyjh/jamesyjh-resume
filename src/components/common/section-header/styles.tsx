import styled from "styled-components";

interface StyledHeaderProps {
  showDivider: boolean;
}

const StyledHeader = styled.h1<StyledHeaderProps>`
  position: relative;
  padding: 0;
  margin: 0;
  padding-bottom: 0.5em;
  margin-bottom: 0.75em;
  font-family: "Just Another Hand", cursive;
  letter-spacing: 3px;

  &:before {
    display: ${({ showDivider }) => (showDivider ? "block" : "none")};
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 5px;
    width: 100px;
    background-color: #fff;
  }

  &:after {
    display: ${({ showDivider }) => (showDivider ? "block" : "none")};
    content: "";
    position: absolute;
    left: 0;
    bottom: 2px;
    height: 1px;
    width: 100%;
    max-width: 100%;
    background-color: #fff;
  }
`;

export default StyledHeader;
