import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import { NavigationItemsStyled } from "./styles";

const NavigationItems = (props: { isAuthenticated: any }) => (
  <NavigationItemsStyled className="NavigationItems">
    <NavigationItem link="/add_note" exact>
      Add Notes
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/intro">List</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/auth">Log in</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Logout</NavigationItem>
    )}
  </NavigationItemsStyled>
);

export default NavigationItems;
