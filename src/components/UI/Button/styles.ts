import styled, { css } from "styled-components";

interface IButtonProps {
  btnType?: string;
}

export const ButtonStyled = styled.button<IButtonProps>`
  border-radius: 4px;
  height: 37px;
  margin: 0;
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

  ${({ btnType }) =>
    btnType === "Success"
      ? css`
          background: linear-gradient(
            rgb(52, 64, 210) 0%,
            rgb(31, 37, 160) 100%
          );
          color: rgb(255, 255, 255);
        `
      : css`
          color: rgb(97, 110, 123);
        `}
  ${({ btnType }) =>
    btnType === "Secondary" &&
    css`
      margin-right: 1rem;
      box-shadow: rgb(207 213 222) 0px 0px 0px 1px;
    `}
`;
