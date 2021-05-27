import React from "react";

import { ButtonStyled } from "./styles";

interface IProps {
  disabled?: boolean;
  btnType?: string;
  onClick?: (event: { preventDefault: () => void }) => void;
  className?: string;
  text?: string;
}
const Button: React.FC<IProps> = ({
  disabled,
  btnType,
  onClick,
  className,
  text,
}) => (
  <ButtonStyled
    disabled={disabled}
    btnType={btnType}
    onClick={onClick}
    className={className}
  >
    {text}
  </ButtonStyled>
);

export default Button;
