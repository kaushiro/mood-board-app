import React from "react";

import { TeamCardWrapperStyled } from "./styles";

const TeamCard: React.FC = ({ children }) => (
  <TeamCardWrapperStyled>
    {/* <img src={imgSrc} alt="customTeamCard" /> */}
    {children}
  </TeamCardWrapperStyled>
);

export default TeamCard;
