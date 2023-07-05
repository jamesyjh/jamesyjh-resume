import { useAnimate } from "framer-motion";
import { useEffect } from "react";

const useAnimation = (isOpen: boolean, animations: any[]) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animations.forEach(({ selector, properties, options = {} }: any) => {
      animate(selector, properties, options);
    });
  }, [isOpen, animate, animations]);

  return scope;
};

export default useAnimation;
