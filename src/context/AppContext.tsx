import React, { createContext, ReactNode, useState } from "react";

interface AppContextProps {
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeProject: string;
  setActiveProject: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps>({
  isMenuOpen: false,
  setMenuOpen: () => {},
  activeProject: "memoize",
  setActiveProject: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState("memoize");

  return (
    <AppContext.Provider value={{ isMenuOpen, setMenuOpen, activeProject, setActiveProject }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
