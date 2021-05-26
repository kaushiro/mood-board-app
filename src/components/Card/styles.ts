import styled, { css } from "styled-components";
import { CARD_VARIATIONS } from "./";
interface ICardProps {
  variation?: CARD_VARIATIONS;
}

export const CardWrapperStyled = styled.div<ICardProps>`
  margin: 1rem;
  padding: 1rem;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 40vw;
  ${({ variation }) => {
    switch (variation) {
      case CARD_VARIATIONS.RED:
        return css`
          background-color: rgb(255, 72, 77);
        `;

      case CARD_VARIATIONS.GREEN:
        return css`
          background-color: rgb(0, 221, 176);
        `;

      case CARD_VARIATIONS.YELLOW:
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
`;
