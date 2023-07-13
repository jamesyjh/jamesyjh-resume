import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--palette-5-2);
  border: 1px solid transparent;
  border-radius: 0.75rem;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  text-decoration: none #6b7280 solid;
  transition: 200ms background-color, border-color, color, fill, stroke cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  > span,
  svg {
    justify-content: center;
    align-self: center;
    align-content: center;
  }

  &:hover {
    background-color: #5131a3;
  }

  &:focus {
    box-shadow: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

interface BasicButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  id?: string;
}

const BasicButton = (props: BasicButtonProps) => (
  <StyledButton id={props.id} onClick={props.onClick} className="flex gap-1 px-3 py-2 text-xs font-normal text-white">
    {props.children}
  </StyledButton>
);

export default BasicButton;
