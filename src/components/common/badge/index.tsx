import React from "react";
import { BadgeContainer } from "./styles";

interface BadgeProps {
  name: string;
}

const Badge = ({ name }: BadgeProps) => {
  return (
    <BadgeContainer className="flex flex-col">
      <span className="font-light text-xs">{name}</span>
    </BadgeContainer>
  );
};

export default Badge;
