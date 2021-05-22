import styled, { css } from "styled-components";

import mixins from "../../../shared/mixins";

import { BACKGROUND_FADE_DURATION_MS, TINY_SCREEN_WIDTH } from "./constants";

interface IModalWrapperStyled {
  isVisible: boolean;
  hasFluidWidth?: boolean;
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
      @media only screen and (min-width: ${TINY_SCREEN_WIDTH}) {
        align-items: center;
      }
    `}

  .modal-inner {
    background: #ffffff;
    border-radius: 4px 4px 0 0;
    max-height: 98%;
    width: 100%;
    overflow: auto;
    z-index: 2;
    @media only screen and (min-width: ${TINY_SCREEN_WIDTH}) {
      border-radius: 4px;
      max-height: calc(100vh -2rem -2rem);
      ${({ hasFluidWidth }) =>
        hasFluidWidth
          ? css`
              min-width: calc(${TINY_SCREEN_WIDTH} - 2rem});
              max-width: 98vw;
              width: auto;
            `
          : css`
              max-width: 40rem;
            `}
    }
  }
`;

export const ModalBackgroundStyled = styled.div<IModalWrapperStyled>`
  transition: opacity ${BACKGROUND_FADE_DURATION_MS}ms ease-in;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  background: ${mixins.hex2rgba("#000000", 0.6)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const ModalHeaderStyled = styled.div`
  border-bottom: 1px solid #a4afbd;
  padding: 1rem;
  position: relative;
`;

export const ModalHeaderInnerStyled = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 2rem);
`;

export const ModalHeaderIconStyled = styled.div`
  background: #42505c;
  border-radius: 100%;
  color: #21251a;
  margin-right: 0.5rem;
  padding: 0.5rem;
  svg {
    vertical-align: middle;
  }
`;

export const ModalHeaderContentStyled = styled.div`
  flex: 1;
`;

export const ModalTitleStyled = styled.p`
  white-space: normal;
  word-break: break-word;
  font-weight: 700;
  color: #21251a;
`;

export const CloseButtonStyled = styled.button`
  background: none;
  border: none;
  color: #21251a;
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
  background-color: #42505c;
  img {
    display: inline-block;
    object-fit: cover;
    width: 100%;
  }
`;

export const ModalContentStyled = styled.div<{ hasFullWidthContent: boolean }>`
  padding: ${({ hasFullWidthContent }) => (hasFullWidthContent ? 0 : "1rem")};
`;

export const ModalFooterStyled = styled.div`
  background: ${(props) => props.theme.palette.modalFooterBackground};
  border-radius: 0 0 4px 4px;
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
