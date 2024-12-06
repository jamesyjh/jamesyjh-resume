import { motion } from "framer-motion";
import styled from "styled-components";

interface MenuButtonProps {
  isMenuOpen: boolean;
}

interface MenuProps {
  isMenuOpen: boolean;
}

const NavButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-image: linear-gradient(300deg, #0b0b0b64 5%, var(--color-primary-dark) 14%);
  width: 100%;

  > div {
    cursor: pointer;
  }

  > div > h3 {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 10px;
    color: #fff;
  }
`;

const NavMenuButton = styled.button<MenuButtonProps>`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  height: auto;
  max-width: 40px;

  > svg {
    .line {
      fill: none;
      stroke: #fff;
      stroke-width: 6;
      transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
      stroke-dasharray: ${({ isMenuOpen }) => (isMenuOpen ? "90 207" : "60 207")};
      stroke-dashoffset: ${({ isMenuOpen }) => (isMenuOpen ? "-134" : "0")};
    }

    .line2 {
      stroke-dasharray: ${({ isMenuOpen }) => (isMenuOpen ? "1 60" : "60 60")};
      stroke-dashoffset: ${({ isMenuOpen }) => (isMenuOpen ? "-30" : "0")};
    }
  }
`;

const StyledNavMenu = styled.nav<MenuProps>`
  visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
  background-image: linear-gradient(285deg, #0b0b0b28 5%, var(--color-primary-dark) 60%);
  z-index: 999;
`;

const NavMenuItem = styled(motion.div)`
  cursor: pointer;
  &:hover {
    > h2 {
      transition: all 125ms cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateX(2px);
    }
  }
`;

const NavMenuSubItem = styled(motion.div)`
  cursor: pointer;
  transition: all 125ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateX(8px);
  }
`;

export { NavButtonContainer, NavMenuButton, StyledNavMenu, NavMenuSubItem, NavMenuItem };
