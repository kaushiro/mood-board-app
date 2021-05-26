import React from "react";

import { CardWrapperStyled } from "./styles";

export enum CARD_VARIATIONS {
  RED = "RED",
  YELLOW = "YELLOW",
  GREEN = "GREEN",
  WHITE = "WHITE",
}

interface IProps {
  variation?: CARD_VARIATIONS;
}
const Card: React.FC<IProps> = ({ variation, children }) => (
  <CardWrapperStyled variation={variation}>
    {/* <img src={imgSrc} alt="customCard" /> */}
    {children}
  </CardWrapperStyled>
);

export default Card;
