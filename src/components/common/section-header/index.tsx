import React from "react";
import StyledHeader from "./styles";

interface SectionHeaderProps {
  title: string;
  showDivider: boolean;
}
const SectionHeader = ({ title, showDivider }: SectionHeaderProps) => {
  return (
    <StyledHeader className="text-4xl" showDivider={showDivider}>
      {title}
    </StyledHeader>
  );
};

export default SectionHeader;
