import { Link, useNavigate } from "react-router-dom";
import { stagger } from "framer-motion";
import Lottie from "lottie-react";
import { StyledNavMenu, NavMenuItem, NavMenuSubItem } from "./styles";
import { navMenu as navMenuAnimations } from "../../../animations/framer-motion";
import useAnimation from "../../../animations/framer-motion/useAnimation";
import { AiOutlineDownload } from "react-icons/ai";
import SocialBar from "../social-bar";
import downloadAnimation from "../../../animations/lottie/download.json";
import BasicButton from "../button/basic-button";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
interface NavMenuProps {
  isMenuOpen: boolean;
  setMenuOpen: (isMenuOpen: boolean) => void;
}

const NavMenu = ({ isMenuOpen, setMenuOpen }: NavMenuProps) => {
  const { setActiveProject } = useContext(AppContext);

  const handleNavigate = (id: string, isProjectId?: boolean) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    if (isProjectId) {
      setActiveProject(id);
    }
    setMenuOpen(false);
  };

  const handleResumeDownload = () => window.open("./resume.pdf", "_blank");
  const staggerMenuItems = stagger(0.1, { startDelay: 0.2 });

  const scope = useAnimation(isMenuOpen, [
    {
      selector: ".link-card, .social-bar, hr, h3, button",
      properties: isMenuOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0.1, scale: 0.1, filter: "blur(30px)" },
      options: { duration: 0.12, delay: isMenuOpen ? staggerMenuItems : 0 },
    },
  ]);

  const { slideInLeft, slideOutLeft, slideInRight, slideOutRight } = navMenuAnimations.menuTitle;

  return (
    <StyledNavMenu
      className="flex flex-row justify-center overflow-hidden gap-0 h-[100vh] w-[100vw] fixed top-0 text-white transition-all duration-600 ease-in-out"
      isMenuOpen={isMenuOpen}
      ref={scope}
    >
      <div className="flex flex-col justify-center gap-7">
        <NavMenuItem
          className="mb-1 text-3xl font-thin tracking-wide"
          onClick={() => handleNavigate("about")}
          initial={false}
          animate={isMenuOpen ? slideInLeft : slideOutLeft}
        >
          <h2>About</h2>
        </NavMenuItem>
        <div>
          <NavMenuItem
            className="mb-1 text-3xl font-thin tracking-wide"
            onClick={() => handleNavigate("projects")}
            initial={false}
            animate={isMenuOpen ? slideInRight : slideOutRight}
          >
            <h2>Projects</h2>
          </NavMenuItem>
          <NavMenuSubItem
            onClick={() => handleNavigate("memoize", true)}
            className="mb-1 ml-6 text-lg font-thin tracking-wide cursor-pointer"
          >
            <h3>&#8250; Memoize</h3>
          </NavMenuSubItem>
          <NavMenuSubItem
            onClick={() => handleNavigate("talkbox", true)}
            className="mb-1 ml-6 text-lg font-thin tracking-wide cursor-pointer"
          >
            <h3>&#8250; Talkbox</h3>
          </NavMenuSubItem>
        </div>
        <div>
          <NavMenuItem
            className="mb-1 text-3xl font-thin tracking-wide"
            onClick={() => handleNavigate("work")}
            initial={false}
            animate={isMenuOpen ? slideInRight : slideOutRight}
          >
            <h2>Work</h2>
          </NavMenuItem>
        </div>

        <NavMenuItem id="download-resume" initial={false} animate={isMenuOpen ? slideInLeft : slideOutLeft}>
          <BasicButton onClick={() => handleResumeDownload()}>
            <AiOutlineDownload size={16} />
            <span>Download Resume</span>
          </BasicButton>
        </NavMenuItem>

        <hr className="border-[#ffffff40]" />
        <div className="flex justify-center social-bar">
          <SocialBar />
        </div>
      </div>
    </StyledNavMenu>
  );
};

export default NavMenu;
