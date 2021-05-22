import React from "react";

import { StepNavigationStyled, ButtonStyled } from "./styles";
import { IStepsNavigation } from "./types";

const StepsNavigation: React.FC<IStepsNavigation> = ({ activeStep }) => {
  const { nextStep, prevStep } = activeStep;

  return (
    <StepNavigationStyled>
      {prevStep && !prevStep.isDisabled && (
        <ButtonStyled
          // text={prevStep.title}
          data-qaid="prev-step"
          onClick={prevStep.onPrevStep}
        />
      )}
      <ButtonStyled
        // text={nextStep.title}
        data-qaid="next-step"
        onClick={nextStep.onNextStep}
        // isDisabled={nextStep.isDisabled}
      />
    </StepNavigationStyled>
  );
};

export default StepsNavigation;
