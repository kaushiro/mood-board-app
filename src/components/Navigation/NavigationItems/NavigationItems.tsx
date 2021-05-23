import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import { NavigationItemsStyled } from "./styles";
import messages from "./messages";

interface IProps {
  isAuthenticated: boolean;
}
const NavigationItems: React.FC<IProps> = ({ isAuthenticated }) => (
  <NavigationItemsStyled className="NavigationItems">
    {isAuthenticated ? (
      <NavigationItem link="/profile" exact>
        {messages.addMemberLink.defaultMessage}
      </NavigationItem>
    ) : null}
    {isAuthenticated ? (
      <NavigationItem link="/intro">
        {messages.boardLink.defaultMessage}
      </NavigationItem>
    ) : null}
    {!isAuthenticated ? (
      <NavigationItem link="/auth">
        {messages.loginLink.defaultMessage}
      </NavigationItem>
    ) : (
      <NavigationItem link="/logout">
        {messages.logoutLink.defaultMessage}
      </NavigationItem>
    )}
  </NavigationItemsStyled>
);

export default NavigationItems;
