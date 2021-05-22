import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

import { SideDrawerContainerStyled, SideDrawerLogoStyled } from "./styles";

const sideDrawer = (props: {
  open: any;
  closed:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  isAuthenticated: any;
}) => {
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <SideDrawerContainerStyled isOpen={props.open} onClick={props.closed}>
        <SideDrawerLogoStyled>
          <Logo />
        </SideDrawerLogoStyled>
        <nav>
          <NavigationItems isAuthenticated={props.isAuthenticated} />
        </nav>
      </SideDrawerContainerStyled>
    </Aux>
  );
};

export default sideDrawer;
