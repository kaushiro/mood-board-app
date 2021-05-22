import styled, { css } from "styled-components";

const displaySettings = css`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
`;
export const InputStyled = styled.input`
  ${displaySettings}
  &:focus {
    outline: none;
  }

  ${({ inputError }) =>
    inputError === "Invalid" &&
    css`
      border: 1px solid red;
      background-color: #fda49a;
    `}
`;

export const TextAreaStyled = styled.textarea`
  ${displaySettings}

  ${({ inputError }) =>
    inputError === "Invalid" &&
    css`
      border: 1px solid red;
      background-color: #fda49a;
    `}
`;
export const SelectStyled = styled.select`
  ${displaySettings}

  ${({ inputError }) =>
    inputError === "Invalid" &&
    css`
      border: 1px solid red;
      background-color: #fda49a;
    `}
`;
export const LabelStyled = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;
export const InputContainerStyled = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;
