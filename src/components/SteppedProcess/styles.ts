import styled from "styled-components";
import mixins from "../../shared/mixins";

export const MAX_WIDTH_FOR_MOBILE_MENU = 1024;

export const StickyNavigationStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 4.5rem;
  background: ${mixins.hex2rgba("#21251A", 0.2)};
  width: 100%;
  padding-right: 3rem;

  @media screen and(min-width: ${MAX_WIDTH_FOR_MOBILE_MENU}px) {
    bottom: 0;
    padding-right: 0;
  }
`;

export const NavWrapperStyled = styled.div`
  padding: 0 3rem;
  width: 100%;
`;

export const SteppedProcessWrapperStyled = styled.div`
  padding-bottom: 2rem;
`;
