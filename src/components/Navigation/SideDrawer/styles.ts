import styled, { css } from "styled-components";

interface IOpenProps {
  isOpen: boolean;
}

export const SideDrawerContainerStyled = styled.div<IOpenProps>`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  nav ul {
    display: block;

    li a {
      color: black;
    }
  }
  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(-100%);
        `}
  transition: transform 0.3s ease-out;

  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export const SideDrawerLogoStyled = styled.div`
  height: 11%;
  margin-bottom: 32px;
`;
