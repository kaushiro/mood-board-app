import React, { useEffect, useRef } from "react";

import {
  ModalHeaderStyled,
  ModalHeaderInnerStyled,
  ModalHeaderContentStyled,
  CloseButtonStyled,
  ModalTitleStyled,
} from "../styles";

export interface IModalHeaderProps {
  title: string;
  description?: string;
  onClose?(): void;
}

const ModalHeader: React.FC<IModalHeaderProps> = ({
  title,
  description,
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
        <ModalHeaderContentStyled>
          <ModalTitleStyled as="h1">{title}</ModalTitleStyled>
          {description && <h3>{description}</h3>}
        </ModalHeaderContentStyled>
      </ModalHeaderInnerStyled>
      {onClose && (
        <CloseButtonStyled
          ref={closeBtn}
          onClick={onClose}
          title="Close modal"
        ></CloseButtonStyled>
      )}
    </ModalHeaderStyled>
  );
};

export default ModalHeader;
