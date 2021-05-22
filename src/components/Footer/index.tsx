import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { ROUTES } from "../../shared/routes";

import messages from "./messages";
import {
  FooterWrapperStyled,
  FooterRowContainerStyled,
  FooterLinksStyled,
  StyledSmallTextStyled,
} from "./styles";

const Footer = ({ user, className, isSignIn }: any) => {
  const isRingfenced = user && user.ringfenced;

  const links = [
    {
      // path: ROUTES.PRIVACY_NOTICE,
      text: messages.privacyNotice,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      // path: ROUTES.TERMS_POLICY,
      text: messages.termsOfUse,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      // path: ROUTES.COOKIE_POLICY,
      text: messages.cookiePolicy,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      path: "https://immersivelabs.com/",
      text: messages.about,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      // path: ROUTE / S.HELP,
      text: messages.help,
      isHidden: isSignIn || isRingfenced,
    },
  ];

  return (
    <FooterWrapperStyled className={`main-footer ${className}`}>
      <FooterRowContainerStyled>
        <p>{messages.footer}</p>
      </FooterRowContainerStyled>
      <FooterRowContainerStyled>
        <nav>
          <FooterLinksStyled>
            {links.map((link) => {
              if (link.isHidden) return;

              const props = {
                target: link.target,
                rel: link.rel,
                // to: link.path,
                "data-qaid": `link-footer-${link.text.defaultMessage}`,
              };
              return (
                <NavLink key={link.path} to={link.path} {...props}>
                  <p>{link.text}</p>
                </NavLink>
              );
            })}
          </FooterLinksStyled>
        </nav>
      </FooterRowContainerStyled>
    </FooterWrapperStyled>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
  isSignIn: PropTypes.bool,
};

Footer.defaultProps = {
  isSignIn: false,
};

export { FooterWrapperStyled };
export default Footer;
