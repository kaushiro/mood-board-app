import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../Logo/Logo";
import kWhiteLogo from "../../../assets/images/k_white.svg";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

import {
  ToolbarHeaderStyled,
  ToolbarLogoStyled,
  ToolbarNavStyled,
} from "./styles";
interface IProps {
  drawerToggleClicked:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  isAuthenticated: boolean;
}
const Toolbar: React.FC<IProps> = ({
  drawerToggleClicked,
  isAuthenticated,
}) => (
  <ToolbarHeaderStyled>
    <DrawerToggle clicked={drawerToggleClicked} />
    <ToolbarLogoStyled>
      <NavLink to={"/"}>
        <Logo imgSrc={kWhiteLogo} />
      </NavLink>
    </ToolbarLogoStyled>
    <ToolbarNavStyled>
      <NavigationItems isAuthenticated={isAuthenticated} />
    </ToolbarNavStyled>
  </ToolbarHeaderStyled>
);

export default Toolbar;
