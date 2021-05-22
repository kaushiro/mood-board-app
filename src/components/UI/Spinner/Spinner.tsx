import React from "react";

import { SpinnerLoaderStyled, SpinnerTextStyled } from "./styles";

const Spinner = () => (
  <SpinnerLoaderStyled>
    <SpinnerTextStyled>Loading....</SpinnerTextStyled>
  </SpinnerLoaderStyled>
);

export default Spinner;
