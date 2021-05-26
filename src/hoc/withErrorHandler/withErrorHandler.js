import React from "react";

import ErrorModal from "../../components/UI/ErrorModal";
import Aux from "../Aux/Aux";
import useHttpErrorHandler from "../../hooks/http-error-handler";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, clearError] = useHttpErrorHandler(axios);

    return (
      <Aux>
        <ErrorModal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </ErrorModal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default withErrorHandler;
