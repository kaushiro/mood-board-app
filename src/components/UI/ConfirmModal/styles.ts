import styled, { css } from "styled-components";

interface IModalWrapperStyled {
  isVisible?: boolean;
}
export const ModalWrapperStyled = styled.div<IModalWrapperStyled>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  perspective: 1000px;
  display: none;
  z-index: -1;
  justify-content: center;
  align-items: center;
  ${({ isVisible }) =>
    isVisible &&
    css`
      display: flex;
      align-items: flex-end;
      z-index: 9000;
      @media only screen and (min-width: 40rem) {
        align-items: center;
      }
    `}
`;

export const ModalBackgroundStyled = styled.div<IModalWrapperStyled>`
  transition: opacity 300ms ease-in;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const ModalHeaderStyled = styled.div`
  border-bottom: 1px solid "#cfd5de";
  padding: 1rem;
  position: relative;
`;

export const ModalHeaderInnerStyled = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 2rem);
`;

export const ModalHeaderContentStyled = styled.div`
  flex: 1;
`;

export const ModalTitleStyled = styled.h4`
  white-space: normal;
  word-break: break-word;
  font-weight: 700;
  color: #000;
`;

export const CloseButtonStyled = styled.button`
  background: none;
  border: none;
  color: #000;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  svg {
    font-size: 1.5em;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ModalHeroImageStyled = styled.div`
  background-color: "#f7faff";
  img {
    display: inline-block;
    object-fit: cover;
    width: 100%;
  }
`;

export const ModalContentStyled = styled.div`
  padding: 1rem;
`;

export const ModalFooterStyled = styled.div`
  background: "#f7faff";
  border-radius: ${({ theme }) => `0 0 4px 4px`};
  display: flex;
  padding: 1rem;

  @supports (position: sticky) {
    position: sticky;
    bottom: 0;
  }
  & > button {
    margin-left: auto;
    &:not(:first-of-type) {
      margin-left: 1rem;
    }
  }
`;
