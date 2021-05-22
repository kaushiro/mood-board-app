import React from "react";

// import companyLogo from "../../assets/images/logo-block-color.svg";
import { LogoStyled } from "./styles";

const logo = (props: { height?: undefined | number }) => (
  <LogoStyled height={props.height}>
    {/* <img src={companyLogo} alt="companyLogo" /> */}
  </LogoStyled>
);

export default logo;
