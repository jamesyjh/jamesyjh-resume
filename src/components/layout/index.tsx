import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Navigation from "../navigation";
import { LayoutContainer } from "./styles";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isMenuOpen } = useContext(AppContext);
  return (
    <LayoutContainer>
      <Navigation />
      <div className={`content-wrapper ${isMenuOpen ? "blur-md" : ""}`}>{children}</div>
    </LayoutContainer>
  );
};

export default Layout;
