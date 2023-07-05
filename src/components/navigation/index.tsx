import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { AppContext } from "../../context/AppContext";
import NavMenu from "../common/nav";
import MenuButton from "../common/nav/MenuButton";
import { NavbarContainer } from "./styles";

const Navigation = () => {
  const { isMenuOpen, setMenuOpen } = useContext(AppContext);
  const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

  if (!isMobile) {
    return (
      <>
        <NavbarContainer>
          <MenuButton isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        </NavbarContainer>
        <NavMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </>
    );
  }

  return (
    <>
      <NavbarContainer>
        <MenuButton isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </NavbarContainer>
      <NavMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Navigation;
