import React from "react";

import { TeamCardHeaderStyled } from "./styles";

export enum HEADER_VARIATIONS {
  RED = "RED",
  YELLOW = "YELLOW",
  GREEN = "GREEN",
  WHITE = "WHITE",
}

export interface ITeamCardHeaderProps {
  variation?: HEADER_VARIATIONS;
  title?: React.ReactNode;
  description?: React.ReactNode | null;
}

const TeamCardHeader: React.FC<ITeamCardHeaderProps> = ({
  variation,
  title,
  description,
  children,
}) => {
  return (
    <TeamCardHeaderStyled variation={variation}>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {!title && !description && children}
    </TeamCardHeaderStyled>
  );
};

export default TeamCardHeader;
