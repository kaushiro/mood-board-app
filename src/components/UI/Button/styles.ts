import styled, { css } from "styled-components";

interface IButtonProps {
  btnType?: string;
}

export const ButtonStyled = styled.button<IButtonProps>`
  border-radius: 4px;
  height: 37px;
  margin: 1rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  /* color: white; */
  outline: none;
  cursor: pointer;
  font: inherit;
  font-weight: bold;
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
  ${({ btnType }) => {
    switch (btnType) {
      case "sad":
        return css`
          background-color: rgb(255, 72, 77);
          height: 2rem;
          margin: 0.25rem;
          padding: 0.5rem 1rem;
        `;

      case "happy":
        return css`
          background-color: rgb(0, 221, 176);
          height: 2rem;
          margin: 0.25rem;
          padding: 0.5rem 1rem;
        `;

      case "neutral":
        return css`
          background-color: rgb(232, 183, 43);
          height: 2rem;
          margin: 0.25rem;
          padding: 0.5rem 1rem;
        `;
      case "Success":
        return css`
          background-color: rgb(52, 64, 210);
          color: rgb(255, 255, 255);
        `;
      case "Secondary":
        return css`
          margin-right: 1rem;
          box-shadow: rgb(207 213 222) 0px 0px 0px 1px;
        `;

      default:
        return css`
          background-color: rgb(255, 255, 255);
          border: 1px solid #f5f2f0;
        `;
    }
  }};
`;
