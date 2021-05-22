import React from "react";

import SteppedProcessHeader from "./Header";
import { ISteppedProcess } from "./types";
import { StickyNavigationStyled, NavWrapperStyled } from "./styles";
import StepsNavigation from "./StepsNavigation";
import ContentWrapperStyled from "../../hoc/ContentWrapper";
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
      <SteppedProcessHeader title={title} steps={steps} />

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
