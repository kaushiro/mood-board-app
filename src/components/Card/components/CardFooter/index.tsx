import React from "react";

import { CardFooterStyled } from "./styles";

const CardFooter: React.FC = ({ children }) => (
  <CardFooterStyled>{children}</CardFooterStyled>
);

export default CardFooter;
