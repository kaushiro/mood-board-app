import React from "react";

import { LogoStyled } from "./styles";
interface IProps {
  height?: undefined | number;
  imgSrc?: string;
}
const Logo: React.FC<IProps> = ({ height, imgSrc }) => (
  <LogoStyled height={height}>
    <img src={imgSrc} alt="customLogo" />
  </LogoStyled>
);

export default Logo;
