import React, { useEffect, useRef } from "react";

// import Icon from "components/Icon";

import {
  ModalHeaderStyled,
  ModalHeaderInnerStyled,
  ModalHeaderIconStyled,
  ModalHeaderContentStyled,
  CloseButtonStyled,
  ModalTitleStyled,
} from "../styles";
import { LABELLED_BY_ID } from "../constants";

export interface IModalHeaderProps {
  title: string;
  description?: string;
  icon?: {
    source: string;
    a11yLabel: string;
    title: string;
  };
  onClose(): void;
}

const ModalHeader: React.FC<IModalHeaderProps> = ({
  title,
  description,
  icon,
  onClose,
}) => {
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (closeBtn && closeBtn.current) {
      closeBtn && closeBtn.current.focus();
    }
  }, []);

  return (
    <ModalHeaderStyled>
      <ModalHeaderInnerStyled>
        {icon && (
          <ModalHeaderIconStyled>
            {/* <Icon
              source={icon.source}
              a11yLabel={icon.a11yLabel}
              title={icon.title}
            /> */}
          </ModalHeaderIconStyled>
        )}
        <ModalHeaderContentStyled>
          <ModalTitleStyled as="h1" id={LABELLED_BY_ID}>
            {title}
          </ModalTitleStyled>
          {description && <p>{description}</p>}
        </ModalHeaderContentStyled>
      </ModalHeaderInnerStyled>
      <CloseButtonStyled
        ref={closeBtn}
        onClick={onClose}
        data-qaid="modal-window-close-button"
        aria-label="Close modal"
        title="Close modal"
      >
        {/* <Icon source="closeNoCircle" a11yLabel="Cross icon" /> */}
      </CloseButtonStyled>
    </ModalHeaderStyled>
  );
};

export default ModalHeader;
