import React, { Component } from "react";

import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

import { ModalStyled } from "./styles";

interface IProps {
  show?: boolean;
  modalClosed?: () => void;
}
const Modal: React.FC<IProps> = ({ show, modalClosed, children }) => {
  // shouldComponentUpdate ( nextProps, nextState ) {
  //     return nextProps.show !== props.show || nextProps.children !== this.props.children;
  // }

  return (
    <Aux>
      <Backdrop show={show} clicked={modalClosed} />
      <ModalStyled show={show}>{children}</ModalStyled>
    </Aux>
  );
};

export default Modal;
