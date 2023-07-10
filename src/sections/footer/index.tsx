import { useEffect, useState } from "react";
import { BiGitBranch } from "react-icons/bi";
import styled from "styled-components";
import { navigateToExternalLink } from "../../helpers/navigation";
import { formatDate } from "../../helpers/date-time";

const StyledFooter = styled.footer`
  text-align: center;
  background-image: linear-gradient(315deg, #0b0b0b64 5%, var(--color-primary-dark) 95%);
`;

const Footer = () => {
  const [updated, setUpdated] = useState<any>(null);
  const [image, setImage] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/jamesyjh/jamesyjh-resume");

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("updated_at", data.updated_at);
          localStorage.setItem("avatar_url", data.owner.avatar_url);
          setUpdated(data.updated_at);
          setImage(data.owner.avatar_url);
        } else {
          throw new Error("Error fetching from GitHub");
        }
      } catch (error) {
        console.error("Error fetching from GitHub:", error);
        setUpdated(localStorage.getItem("updated_at"));
        setImage(localStorage.getItem("avatar_url"));
      }
    };

    fetchData();
  }, []);

  return (
    <StyledFooter className="flex flex-col">
      <div
        className="flex flex-wrap justify-center gap-0.5 hover:cursor-pointer"
        onClick={() => navigateToExternalLink("https://github.com/jamesyjh/jamesyjh-resume")}
      >
        <span className="self-center text-xs font-light">
          Created by{" "}
          <a href="https://github.com/jamesyjh/" className="font-bold">
            jamesyjh
          </a>
        </span>
        <a
          href="https://github.com/jamesyjh/"
          className="rounded-full h-[20px] w-[20px] self-center"
          style={{ background: `url(${image})`, backgroundSize: "contain" }}
        />
        <span className="flex self-center gap-0.5 text-xs">
          &nbsp;|&nbsp;
          <BiGitBranch className="self-center" size={20} />
          <span className="self-center">Last updated - {formatDate(updated)}</span>
        </span>
      </div>
      <span className="text-xs font-light">Built using Vite, Tailwind CSS + Styled Components</span>
    </StyledFooter>
  );
};

export default Footer;
