import React from "react";

import Header from "./deprecated";

import StepsProgress from "../StepsProgress";

import { XLargeTextStyled, StepsProgressWrapper } from "./styles";
import { ISteppedProcessHeader } from "./types";

const SteppedProcessHeader: React.FC<ISteppedProcessHeader> = ({
  title,
  steps,
  isLoading,
}) => {
  return (
    <div>
      <Header qaid="stepped-proccess-header" isLoading={isLoading}>
        {title && <XLargeTextStyled as="h1">{title}</XLargeTextStyled>}
        <StepsProgressWrapper>
          <StepsProgress steps={steps} />
        </StepsProgressWrapper>
      </Header>
    </div>
  );
};

export default SteppedProcessHeader;
