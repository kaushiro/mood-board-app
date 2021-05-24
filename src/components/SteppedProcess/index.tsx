import React from "react";

import ContentWrapperStyled from "../../hoc/ContentWrapper";

import Header from "./Header";
import StepsProgress from "./StepsProgress";
import { ISteppedProcess } from "./types";

import {
  StickyNavigationStyled,
  NavWrapperStyled,
  StepsProgressWrapper,
  XLargeTextStyled,
} from "./styles";
import StepsNavigation from "./StepsNavigation";
const SteppedProcess: React.FC<ISteppedProcess> = ({
  title,
  steps,
  activeStepIndex,
  isLoading,
}) => {
  const activeStep = steps[activeStepIndex];
  console.log(activeStepIndex);
  console.log(activeStep);
  // const content = steps[activeStepIndex][content];
  // console.log(content);

  return (
    <>
      <Header qaid="stepped-proccess-header" isLoading={isLoading}>
        {title && <XLargeTextStyled as="h1">{title}</XLargeTextStyled>}
        <StepsProgressWrapper>
          <StepsProgress steps={steps} />
        </StepsProgressWrapper>
      </Header>
      {/* <SteppedProcessHeader title={title} steps={steps} /> */}

      {!isLoading && activeStep && (
        <ContentWrapperStyled>{activeStep.content}</ContentWrapperStyled>
      )}
      {/* {!activeStep.isStickyNavHidden && (
        <StickyNavigationStyled>
          <NavWrapperStyled>
            <div>
              <StepsNavigation activeStep={activeStep} />
            </div>
          </NavWrapperStyled>
        </StickyNavigationStyled>
      )} */}
    </>
  );
};

export default SteppedProcess;
