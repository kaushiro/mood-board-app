import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

import {
  ToolbarHeaderStyled,
  ToolbarLogoStyled,
  ToolbarNavStyled,
} from "./styles";

const Toolbar = (props: { drawerToggleClicked: any; isAuthenticated: any }) => (
  <ToolbarHeaderStyled>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <ToolbarLogoStyled>
      <NavLink to={"/"}>
        <Logo />
      </NavLink>
    </ToolbarLogoStyled>
    <ToolbarNavStyled className="DesktopOnly">
      <NavigationItems isAuthenticated={props.isAuthenticated} />
    </ToolbarNavStyled>
  </ToolbarHeaderStyled>
);

export default Toolbar;
