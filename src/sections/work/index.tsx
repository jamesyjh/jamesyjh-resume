import React, { useState } from "react";
import SectionHeader from "../../components/common/section-header";
import styled from "styled-components";
import { data } from "./data";
import WorkDetails from "./details";
import bgImage from "../../assets/images/mountains.jpg";

type WorkExpKey = keyof typeof data;

const WorkContainer = styled.section`
  padding: 12vh 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.87), rgba(0, 0, 0, 0.8)), url(${bgImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`;

const ContentWrapper = styled.div`
  position: relative;
`;

const Work = () => {
  const [selected, setSelected] = useState("scotia-digital");

  const handleClick = (workKey: string) => {
    setSelected(workKey);
  };
  return (
    <WorkContainer className="flex flex-col items-center justify-center p-0 overflow-hidden" id="work">
      <ContentWrapper className="mx-auto max-w-full sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[48vw] px-4">
        <SectionHeader showDivider title="Where I've Worked" />
        <div className="flex flex-col mt-2 sm:flex-row sm:mt-8">
          <div className="my-2 mr-5 text-center max-w-max">
            <ul className="p-0.5 flex flex-row sm:flex-col gap-4">
              {Object.keys(data).map((key) => {
                return (
                  <li
                    className="p-2 transition-all duration-200 ease-out rounded-md cursor-pointer bg-primary hover:bg-secondary"
                    key={key}
                    onClick={() => handleClick(key as WorkExpKey)}
                    style={{ backgroundColor: key === selected ? "var(--palette-6-2)" : "inherit" }}
                  >
                    <span className="h-4 px-2 overflow-hidden text-xs font-medium tracking-wide text-gray-300 no-underline cursor-pointer">
                      {data[key as WorkExpKey].company}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <WorkDetails
            key={selected}
            selected={data[selected as WorkExpKey].roles}
            company={data[selected as WorkExpKey].company}
            companyUrl={data[selected as WorkExpKey].companyUrl}
            badges={data[selected as WorkExpKey].badges}
          />
        </div>
      </ContentWrapper>
    </WorkContainer>
  );
};

export default Work;
