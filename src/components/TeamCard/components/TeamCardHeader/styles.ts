import styled, { css } from "styled-components";
import { HEADER_VARIATIONS } from ".";
interface IHeaderProps {
  variation?: HEADER_VARIATIONS;
}
export const TeamCardHeaderStyled = styled.div<IHeaderProps>`
  text-align: right;
  font-family: "Nanum Pen Script", cursive;
  padding-top: 3rem;
  ${({ variation }) => {
    switch (variation) {
      case HEADER_VARIATIONS.RED:
        return css`
          background-color: rgb(255, 72, 77);
        `;

      case HEADER_VARIATIONS.GREEN:
        return css`
          background-color: rgb(0, 221, 176);
        `;

      case HEADER_VARIATIONS.YELLOW:
        return css`
          background-color: rgb(232, 183, 43);
        `;

      default:
        return css`
          background-color: rgb(255, 255, 255);
          border: 1px solid #f5f2f0;
        `;
    }
  }};
  h3 {
    a {
      color: white;
    }
    line-height: 0px;
    font-size: 2rem;
  }
  p {
    line-height: 0px;
    font-size: 1.5rem;
    color: white;
  }
`;
