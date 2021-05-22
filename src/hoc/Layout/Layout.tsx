import React, { useState } from "react";
import { connect } from "react-redux";

import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

import { MainContentContainerStyled } from "./styles";
const Layout = (props: { isAuthenticated: any; children: React.ReactNode }) => {
  const [isDrawerOpen, showSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    showSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    showSideDrawer(!isDrawerOpen);
  };
  return (
    <Aux>
      <Toolbar
        isAuthenticated={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        isAuthenticated={props.isAuthenticated}
        open={isDrawerOpen}
        closed={sideDrawerClosedHandler}
      />
      <MainContentContainerStyled>{props.children}</MainContentContainerStyled>
    </Aux>
  );
};

const mapStateToProps = (state: { auth: { token: null } }) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
