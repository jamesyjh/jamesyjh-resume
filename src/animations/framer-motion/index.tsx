import { Variants } from "framer-motion";

export const navMenu = {
  menuTitle: {
    slideInLeft: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.4,
      },
    } as Variants,
    slideOutLeft: {
      x: "-5%",
      opacity: 0,
      transition: {
        delay: 0.15,
        duration: 0.2,
      },
    },
    slideInRight: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.4,
      },
    },
    slideOutRight: {
      x: "5%",
      opacity: 0,
      transition: {
        delay: 0.15,
        duration: 0.2,
      },
    },
  },
};
