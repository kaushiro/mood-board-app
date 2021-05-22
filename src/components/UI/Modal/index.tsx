import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
  useImperativeHandle,
  forwardRef,
  RefForwardingComponent,
} from "react";
import { animated, useTransition } from "react-spring";

import ModalHeader, { IModalHeaderProps } from "./components/ModalHeader";
import ModalHeroImage, {
  IModalHeroImageProps,
} from "./components/ModalHeroImage";
import { getFocusableElements, IFocusableElements } from "./helpers";
import transitions from "./transitions";
import {
  BACKGROUND_FADE_DURATION_MS,
  LABELLED_BY_ID,
  KEYCODES,
} from "./constants";
import {
  ModalWrapperStyled,
  ModalBackgroundStyled,
  ModalContentStyled,
  ModalFooterStyled,
} from "./styles";

export type IProps = IModalHeaderProps &
  IModalHeroImageProps & {
    isOpen: boolean;
    hasFluidWidth?: boolean;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    qaid?: string;
    className?: string;
    hasFullWidthContent?: boolean;
  };

export interface IModalHandles {
  initialise(): void;
}

const Modal: RefForwardingComponent<IModalHandles, IProps> = (
  {
    title,
    description,
    isOpen = false,
    hasFluidWidth = false,
    image,
    footer,
    imageAlt,
    icon,
    onClose,
    children,
    qaid,
    className,
    hasFullWidthContent = false,
  },
  forwardedRef
) => {
  const modal = useRef<HTMLDivElement | null>();
  const focusableElements = useRef<IFocusableElements>();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  /**
   * Keep tab focus within the modal.
   * For accessibility reasons, focus should remain in the modal until the modal
   * is closed then focus can return to the main page, ideally back to the element
   * that triggered the open.
   */
  const onTabPress = useCallback(
    (e: KeyboardEvent): void => {
      const isTabPressed = e.key === "Tab" || e.keyCode === KEYCODES.TAB;
      const isEscPressed = e.key === "Escape" || e.keyCode === KEYCODES.ESCAPE;
      const els = focusableElements?.current;

      if ((!isTabPressed && !isEscPressed) || !els) return;

      if (isEscPressed) {
        return onClose();
      }

      if (e.shiftKey) {
        if (document.activeElement === els.firstFocusableEl) {
          els.lastFocusableEl.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === els.lastFocusableEl) {
          els.firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    },
    [onClose]
  );

  const unMount = useCallback(() => {
    window.removeEventListener("keydown", onTabPress);
  }, [onTabPress]);

  /**
   * We use a callback ref here so that we can do something when the
   * element first appears
   * @see: https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
   */
  const modalRef = useCallback(
    (node) => {
      if (isOpen && node !== null) {
        setIsVisible(true);
        modal.current = node;
        focusableElements.current = getFocusableElements(node);
      }
    },
    [isOpen]
  );

  useLayoutEffect(() => {
    if (isOpen && isVisible) {
      window.addEventListener("keydown", onTabPress);
    } else {
      unMount();
    }
  }, [isOpen, isVisible, modal, unMount, onTabPress]);

  // useEffect(() => {
  //   if (isOpen) {
  //     setScrollLock(true);
  //   } else {
  //     modal.current = null;
  //     setScrollLock(false);

  //     isVisible &&
  //       setTimeout(() => setIsVisible(false), BACKGROUND_FADE_DURATION_MS);
  //   }
  // }, [isOpen, isVisible]);

  // Cleanup, just to be safe in case the modal gets unmounted prematurely
  useEffect(() => {
    return () => {
      unMount();
    };
  }, [unMount]);

  useImperativeHandle(forwardedRef, () => ({
    initialise() {
      if (modal?.current) {
        if (focusableElements?.current) {
          focusableElements.current = getFocusableElements(modal.current);
        }
      }
    },
  }));

  const modalTransition = useTransition(isOpen, null, transitions.modal);
  return (
    <ModalWrapperStyled
      isVisible={isVisible}
      hasFluidWidth={hasFluidWidth}
      className={className}
    >
      <ModalBackgroundStyled isVisible={isOpen} onClick={onClose} />
      {modalTransition &&
        modalTransition.map(({ item, key, props }) => {
          return (
            item && (
              <animated.div
                className="modal-inner"
                role="dialog"
                aria-modal="true"
                aria-labelledby={LABELLED_BY_ID}
                style={props}
                data-qaid="modal-window-wrapper"
                data-qaid-modal={qaid}
                key={key}
                ref={modalRef}
              >
                <ModalHeader
                  title={title}
                  description={description}
                  icon={icon}
                  onClose={onClose}
                  data-qaid="modal-header"
                />
                {image && <ModalHeroImage image={image} imageAlt={imageAlt} />}
                {children && (
                  <ModalContentStyled
                    data-qaid="modal-content"
                    hasFullWidthContent={hasFullWidthContent}
                  >
                    {children}
                  </ModalContentStyled>
                )}
                {footer && (
                  <ModalFooterStyled data-qaid="modal-footer">
                    {footer}
                  </ModalFooterStyled>
                )}
              </animated.div>
            )
          );
        })}
    </ModalWrapperStyled>
  );
};

export { BACKGROUND_FADE_DURATION_MS };
export default forwardRef(Modal);
