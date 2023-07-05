import React from "react";
import Badge from "../../components/common/badge";
import ListItem from "../../components/common/list-item";
import { navigateToExternalLink } from "../../helpers/navigation";
import { BulletListContainer, WorkDetailsContainer } from "./styles";

interface WorkDetailProps {
  selected: {
    company: string;
    title: string;
    dates: string;
    companyUrl: string;
    badges: Array<string>;
    details: Array<string>;
  };
}

interface BadgesProps {
  badges: Array<string>;
}
interface BulletProps {
  details: Array<string>;
}

const WorkDetails = ({ selected }: WorkDetailProps) => {
  const { company, title, dates, companyUrl, badges, details } = selected;

  return (
    <WorkDetailsContainer className="w-full h-full overflow-auto">
      <h2 className="text-md sm:text-xl font-semibold mt-3 pt-3">
        {title}&nbsp;
        <span onClick={() => navigateToExternalLink(companyUrl)}>@{company}</span>
      </h2>
      <span className="text-sm sm:text-md font-normal">{dates}</span>
      <hr className="mt-3" />
      <DetailsList details={details} />
      <WorkBadges badges={badges} />
    </WorkDetailsContainer>
  );
};

export default WorkDetails;

const WorkBadges = ({ badges }: BadgesProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {badges.length > 0 &&
        badges.map((element) => {
          return <Badge name={element} />;
        })}
    </div>
  );
};

const DetailsList = ({ details }: BulletProps) => (
  <BulletListContainer className="py-3 my-2">
    {details.length > 0 &&
      details.map((content) => {
        return <ListItem content={content} />;
      })}
  </BulletListContainer>
);
