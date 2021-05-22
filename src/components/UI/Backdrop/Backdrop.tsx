import React from "react";

import { BackDropStyled } from "./styles";

const Backdrop = (props: {
  show: any;
  clicked:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
}) =>
  props.show ? <BackDropStyled onClick={props.clicked}></BackDropStyled> : null;

export default Backdrop;
