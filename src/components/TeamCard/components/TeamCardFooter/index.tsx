import React from "react";

import { TeamCardFooterStyled } from "./styles";

const TeamCardFooter: React.FC = ({ children }) => (
  <TeamCardFooterStyled>{children}</TeamCardFooterStyled>
);

export default TeamCardFooter;
