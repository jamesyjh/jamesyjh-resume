import { NavigateFunction } from "react-router-dom";

const handleNavigate = (
  navigate: NavigateFunction,
  dest: string,
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  navigate(dest);
  setMenuOpen(false);
};

export { handleNavigate };
