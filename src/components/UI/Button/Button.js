import React from "react";

import { ButtonStyled } from "./styles";

const button = (props) => (
  <ButtonStyled
    disabled={props.disabled}
    btnType={props.btnType}
    onClick={props.clicked}
    className={props.className}
  >
    {props.children}
  </ButtonStyled>
);

export default button;
