import React from "react";

import { DrawerToggleContainerStyled } from "./styles";

const drawerToggle = (props: {
  clicked:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
}) => (
  <DrawerToggleContainerStyled onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </DrawerToggleContainerStyled>
);

export default drawerToggle;
