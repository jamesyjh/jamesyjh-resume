import React from "react";
import Badge from "../../components/common/badge";
import ListItem from "../../components/common/list-item";
import { navigateToExternalLink } from "../../helpers/navigation";
import { BulletListContainer, WorkDetailsContainer } from "./styles";

interface WorkDetailProps {
  selected: RolesInfo[];
  badges: Array<string>;
  company: string;
  companyUrl: string;
}

interface RolesInfo {
  title: string;
  dates: string;
  details: Array<string>;
}

interface BadgesProps {
  badges: Array<string>;
}
interface BulletProps {
  details: Array<string>;
}

const WorkDetails = ({ selected, badges, company, companyUrl }: WorkDetailProps) => {
  return (
    <WorkDetailsContainer className="w-full h-full overflow-auto">
      <div id="company-header" className="pt-3 pb-3">
        <span
          className="pt-3 pb-8 mt-3 font-semibold text-md sm:text-xl"
          onClick={() => navigateToExternalLink(companyUrl)}
        >
          {company}
        </span>
        <WorkBadges badges={badges} />
      </div>

      <ul>
        {selected.map((role) => {
          return (
            <li key={role.title}>
              <h2 className="pt-3 mt-3 font-semibold text-md sm:text-xl">{role.title}&nbsp;</h2>
              <span className="text-sm font-normal sm:text-md">{role.dates}</span>
              <hr className="mt-3" />
              <DetailsList details={role.details} />
            </li>
          );
        })}
      </ul>
    </WorkDetailsContainer>
  );
};

export default WorkDetails;

const WorkBadges = ({ badges }: BadgesProps) => {
  return (
    <div className="flex flex-wrap gap-4 mt-3">
      {badges.length > 0 &&
        badges.map((element) => {
          return <Badge key={element} name={element} />;
        })}
    </div>
  );
};

const DetailsList = ({ details }: BulletProps) => (
  <BulletListContainer className="py-3 my-2">
    {details.length > 0 &&
      details.map((content) => {
        return <ListItem key={content} content={content} />;
      })}
  </BulletListContainer>
);
