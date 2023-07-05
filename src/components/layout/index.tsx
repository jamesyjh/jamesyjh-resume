import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import Navigation from "../navigation";
import { LayoutContainer } from "./styles";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isMenuOpen } = useContext(AppContext);

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <LayoutContainer>
      <Navigation />
      <div className={`content-wrapper ${isMenuOpen ? "blur-md" : ""}`}>{children}</div>
    </LayoutContainer>
  );
};

export default Layout;
