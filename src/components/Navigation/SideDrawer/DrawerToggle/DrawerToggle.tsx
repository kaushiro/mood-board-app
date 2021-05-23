import React from "react";

import { DrawerToggleContainerStyled } from "./styles";

interface IProps {
  clicked:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
}

const DrawerToggle: React.FC<IProps> = ({ clicked }) => (
  <DrawerToggleContainerStyled onClick={clicked}>
    <div></div>
    <div></div>
    <div></div>
  </DrawerToggleContainerStyled>
);

export default DrawerToggle;
