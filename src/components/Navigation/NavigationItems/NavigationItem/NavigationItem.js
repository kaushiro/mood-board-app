import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.css";

import { TaskItemStyled } from "./styles";

const navigationItem = (props) => (
  <TaskItemStyled>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  </TaskItemStyled>
);

export default navigationItem;
