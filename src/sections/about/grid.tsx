import TSLogo from "../../assets/logos/ts.svg";
import JSLogo from "../../assets/logos/javascript.svg";
import CSSLogo from "../../assets/logos/css.svg";
import HTMLLogo from "../../assets/logos/html.svg";
import NodeLogo from "../../assets/logos/nodejs.svg";
import PythonLogo from "../../assets/logos/python.svg";
import ReactLogo from "../../assets/logos/react.svg";
import ReduxLogo from "../../assets/logos/redux.svg";
import styled from "styled-components";

const TechStackGrid = () => {
  const logos = [
    { id: 1, src: TSLogo, name: "TypeScript" },
    { id: 2, src: JSLogo, name: "JavaScript" },
    { id: 3, src: CSSLogo, name: "CSS" },
    { id: 4, src: HTMLLogo, name: "HTML" },
    { id: 5, src: NodeLogo, name: "NodeJS" },
    { id: 6, src: PythonLogo, name: "Python" },
    { id: 7, src: ReactLogo, name: "React" },
    { id: 8, src: ReduxLogo, name: "Redux" },
  ];
  return (
    <LogoGrid className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 p-3 sm:p-5">
      {logos.map((svg) => (
        <div key={svg.id} className="flex flex-col justify-center items-center">
          <img src={svg.src} alt={svg.name} className="w-[60%] sm:w-[30%]" />
          <p className="text-xs sm:text-md mb-4 mt-2">{svg.name}</p>
        </div>
      ))}
    </LogoGrid>
  );
};

export default TechStackGrid;

const LogoGrid = styled.div`
  grid-template-columns: repeat(4, 1fr);
`;
