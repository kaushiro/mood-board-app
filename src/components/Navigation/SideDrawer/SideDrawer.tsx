import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";
import kBlackLogo from "../../../assets/images/k_black.svg";

import { SideDrawerContainerStyled, SideDrawerLogoStyled } from "./styles";

interface IProps {
  open: boolean;
  closed:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  isAuthenticated: boolean;
}
const SideDrawer: React.FC<IProps> = ({ open, closed, isAuthenticated }) => {
  return (
    <Aux>
      <Backdrop show={open} clicked={closed} />
      <SideDrawerContainerStyled isOpen={open} onClick={closed}>
        <SideDrawerLogoStyled>
          <Logo imgSrc={kBlackLogo} />
        </SideDrawerLogoStyled>
        <nav>
          <NavigationItems isAuthenticated={isAuthenticated} />
        </nav>
      </SideDrawerContainerStyled>
    </Aux>
  );
};

export default SideDrawer;
