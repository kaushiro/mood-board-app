import styled, { css } from "styled-components";

interface IHeightProps {
  height?: number;
}

export const LogoStyled = styled.div<IHeightProps>`
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  ${({ height }) =>
    css`
      height: ${height};
    `}
  img {
    height: 100%;
  }
`;
