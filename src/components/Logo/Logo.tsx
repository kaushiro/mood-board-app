import React from "react";

import customLogoBlack from "../../assets/images/owl_black.svg";
import customLogoWhite from "../../assets/images/owl_white.svg";
import kBlackLogo from "../../assets/images/k_black.svg";
import kWhiteLogo from "../../assets/images/k_white.svg";

import kkLogo from "../../assets/images/kk.svg";

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
