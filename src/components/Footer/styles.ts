import styled from "styled-components";

export const MAX_WIDTH_FOR_MOBILE_MENU = 1024;

export const FooterRowContainerStyled = styled.div`
  display: block;
  margin: auto;
  max-width: 40rem;
  padding: 0.5rem 2rem 0;
  text-align: center;
`;

export const FooterWrapperStyled = styled.footer`
  position: relative;
  padding: 1rem;
  background-color: "white";

  @media (min-width: 80rem) {
    margin-bottom: 0;
    padding: 1rem;
  }

  ${FooterRowContainerStyled}:last-child {
    @media (max-width: ${MAX_WIDTH_FOR_MOBILE_MENU - 1}px) {
      margin-bottom: 5rem; /* Should clear the mobile nav height */
    }
  }
`;

export const FooterLinksStyled = styled.ul`
  display: block;
  justify-content: space-around;
  padding: 0;
  margin: 0;

  li {
    display: block;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  @media (min-width: 48rem) {
    display: flex;

    li {
      display: inline;
    }
  }
`;

export const StyledSmallTextStyled = styled.p`
  color: "#0059a5;
`;
