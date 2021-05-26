import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "../Button";

import ModalHeader from "./components/ModalHeader";
import messages from "./messages";
import {
  ModalWrapperStyled,
  ModalBackgroundStyled,
  ModalContentStyled,
  ModalFooterStyled,
} from "./styles";

interface IProps {
  isOpen: boolean;
  isWarning?: boolean;
  img?: string;
  handleConfirm?(): void;
  handleCancel?(): void;
  onClose?(): void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  modalWidth?: string;
  footer?: React.ReactNode;
}

const ConfirmModal: React.FC<IProps> = ({
  isOpen,
  isWarning = false,
  title = messages.title.defaultMessage,
  description,
  confirmText = messages.confirmButton.defaultMessage,
  cancelText = messages.cancelButton.defaultMessage,
  handleConfirm,
  handleCancel,
  onClose,
  children,
  footer,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const ModalFooter: React.FC = () => (
    <>
      <Button
        btnType={"Danger"}
        onClick={() => handleCancel && handleCancel()}
        text={cancelText}
      />
      <Button
        btnType={"Success"}
        onClick={() => handleConfirm && handleConfirm()}
        text={confirmText}
      />
    </>
  );
  return (
    <ModalWrapperStyled isVisible={isVisible}>
      <ModalBackgroundStyled
        isVisible={isOpen}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.stopPropagation();
          onClose && onClose();
        }}
      />
      <ModalHeader
        title={title}
        description={description}
        onClose={onClose}
        data-qaid="modal-header"
      />
      {children && <ModalContentStyled>{children}</ModalContentStyled>}
      {footer && (
        <ModalFooterStyled data-qaid="modal-footer">{footer}</ModalFooterStyled>
      )}
    </ModalWrapperStyled>
  );
};

export default ConfirmModal;
