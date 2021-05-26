import React from "react";

import { CardHeaderStyled } from "./styles";

export interface ICardHeaderProps {
  title?: React.ReactNode;
  description?: React.ReactNode | null;
}

const CardHeader: React.FC<ICardHeaderProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <CardHeaderStyled>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {!title && !description && children}
    </CardHeaderStyled>
  );
};

export default CardHeader;
