import React from "react";

import { CardBodyStyled } from "./styles";

export interface ICardBodyProps {
  title?: React.ReactNode;
  description?: React.ReactNode | null;
}

const CardBody: React.FC<ICardBodyProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <CardBodyStyled>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {!title && !description && children}
    </CardBodyStyled>
  );
};

export default CardBody;
