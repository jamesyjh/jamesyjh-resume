import React, { useState } from "react";
import SectionHeader from "../../components/common/section-header";
import styled from "styled-components";
import { data } from "./data";
import WorkDetails from "./details";

type WorkExpKey = keyof typeof data;

const WorkContainer = styled.section`
  padding: 12vh 0;

  background-color: var(--palette-1-1);
  background-image: linear-gradient(315deg, #0b0b0b 20%, var(--color-primary-dark) 90%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
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
    <WorkContainer className="flex flex-col justify-center items-center p-0 overflow-hidden" id="work">
      <ContentWrapper className="mx-auto max-w-full sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[48vw] px-4">
        <SectionHeader showDivider title="Where I've Worked" />
        <div className="flex flex-col sm:flex-row mt-2 sm:mt-8">
          <div className="my-2 mr-5 max-w-max text-center">
            <ul className="p-0.5 flex flex-row sm:flex-col gap-4">
              {Object.keys(data).map((key) => {
                return (
                  <li
                    className="p-2 bg-primary transition-all duration-200 ease-out rounded-md hover:bg-secondary cursor-pointer"
                    key={key}
                    onClick={() => handleClick(key as WorkExpKey)}
                    style={{ backgroundColor: key === selected ? "var(--palette-5-4)" : "inherit" }}
                  >
                    <span className="text-gray-300 overflow-hidden px-2 h-4 text-xs tracking-wide font-medium no-underline cursor-pointer">
                      {data[key as WorkExpKey].company}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <WorkDetails selected={data[selected as WorkExpKey]} />
        </div>
      </ContentWrapper>
    </WorkContainer>
  );
};

export default Work;
