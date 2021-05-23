import React from "react";
import { NavLink } from "react-router-dom";

// import classes from "./NavigationItem.css";

import { NavListItemStyled } from "./styles";

interface IProps {
  link: string;
  exact?: boolean;
}
const NavigationItem: React.FC<IProps> = ({ link, exact, children }) => (
  <NavListItemStyled>
    <NavLink to={link} exact={exact}>
      {children}
    </NavLink>
  </NavListItemStyled>
);

export default NavigationItem;
