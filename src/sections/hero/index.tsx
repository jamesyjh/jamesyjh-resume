import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import bgImage from "../../assets/images/mountains.jpg";
import SocialBar from "../../components/common/social-bar";
import StyledLineBreak from "../../components/StyledLineBreak";
import { navigateToExternalLink } from "../../helpers/navigation";

const HeroContainer = styled(motion.section)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const typing = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StyledIntro = styled.p`
  > span {
    font-family: "Cedarville Cursive", cursive;

    > .cursor {
      display: inline-block;
      width: 10px;
      animation: ${typing} 0.5s infinite;
      margin-bottom: 4px;
    }
  }
`;

const StyledName = styled(motion.div)`
  font-family: "Raleway";
  margin: 0;
  letter-spacing: -1px;
`;

const StyledDesc = styled(motion.h2)`
  font-family: "Lato";

  > span {
    transition: 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    &:hover {
      cursor: pointer;
      color: var(--palette-3-5);
    }
  }

  > span > span {
    transition: 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    position: relative;

    &:hover {
      cursor: pointer;
      color: var(--palette-3-5);
      &::before {
        left: 0;
        right: auto;
        width: 100%;
      }
    }

    &::before {
      content: "";
      position: absolute;
      bottom: -5px;
      right: 0;
      width: 0;
      height: 3px;
      background-color: var(--palette-3-5);
      transition: width 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    }
  }
`;

const Cursor = () => {
  return (
    <svg viewBox="8 4 8 16" xmlns="http://www.w3.org/2000/svg" className="cursor">
      <rect x="10" y="6" width="4" height="12" fill="var(--palette-3-5)" />
    </svg>
  );
};

const Hero = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [intro, setIntro] = useState("");

  useEffect(() => {
    const DURATION = 70;
    setIsTypingDone(false);

    let i = 0;
    const message = "Hello, my name is";

    const intervalId = setInterval(() => {
      setIntro(message.slice(0, i));

      i++;

      if (i > message.length) {
        clearInterval(intervalId);
        setIsTypingDone(true);
      }
    }, DURATION);

    return () => clearInterval(intervalId);
  }, []);

  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  return (
    <HeroContainer
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.75 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="flex flex-col items-center justify-center min-h-screen p-0 bg-scroll sm:bg-fixed"
    >
      <div className="mx-auto max-w-full sm:max-w-[60vw] lg:max-w-[40vw] px-4">
        <StyledIntro className="mb-8 ml-2 font-thin text-left">
          <span className="text-2xl">
            {intro}
            {!isTypingDone && <Cursor />}
          </span>
        </StyledIntro>
        <StyledName
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          className="pb-5 mb-5 text-5xl font-extrabold leading-none text-center sm:text-7xl"
        >
          James&nbsp;Hong
        </StyledName>
        <div className="pt-2 mt-2">
          <StyledLineBreak />
          <StyledDesc
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible,
            }}
            className="mt-2 mb-4 text-sm font-light text-center md:text-lg"
          >
            Software Engineer&nbsp;
            <span
              onClick={() => navigateToExternalLink("https://www.scotiabank.com/careers/en/careers/technology.html")}
              className="font-semibold"
            >
              @<span>Scotiabank Digital Factory</span>
            </span>
          </StyledDesc>
        </div>
        <div className="pt-5 mt-5">
          <SocialBar />
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
