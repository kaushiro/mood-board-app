import React, { useState } from "react";
import { connect } from "react-redux";

import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/Footer";

import { MainContentContainerStyled } from "./styles";

interface IProps {
  isAuthenticated: boolean;
}
const Layout: React.FC<IProps> = ({ isAuthenticated, children }) => {
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
        isAuthenticated={isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        isAuthenticated={isAuthenticated}
        open={isDrawerOpen}
        closed={sideDrawerClosedHandler}
      />
      <MainContentContainerStyled>{children}</MainContentContainerStyled>
      <Footer />
    </Aux>
  );
};

const mapStateToProps = (state: { auth: { token: null } }) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
