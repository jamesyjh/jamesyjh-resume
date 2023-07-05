import React from "react";
import styled from "styled-components";

const StyledHr = styled.h1`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    height: 5px;
    width: 100px;
    background-color: #ffffff20;
  }

  &:after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 2px;
    height: 1px;
    width: 100%;
    background-color: #ffffff20;
  }
`;
const StyledLineBreak = () => {
  return <StyledHr />;
};

export default StyledLineBreak;
