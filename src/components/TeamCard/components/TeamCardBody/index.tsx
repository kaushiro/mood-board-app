import React from "react";

import { TeamCardBodyStyled } from "./styles";

export interface ITeamCardBodyProps {
  title?: React.ReactNode;
  description?: React.ReactNode | null;
}

const TeamCardBody: React.FC<ITeamCardBodyProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <TeamCardBodyStyled>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {!title && !description && children}
    </TeamCardBodyStyled>
  );
};

export default TeamCardBody;
