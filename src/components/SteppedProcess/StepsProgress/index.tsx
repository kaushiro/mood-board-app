import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";

import { IStep } from "../types";

import messages from "./messages";
import StepsProgressStepDetail from "./StepsProgressStepDetail";
import {
  StepsProgressWrapperStyled,
  StepDetailStyled,
  StepsProgressStepDescription,
} from "./styles";

interface IProps {
  steps: IStep[];
}
const StepsProgress: React.FC<IProps> = ({ steps }) => {
  const [nextStep, setCurrentStep] = useState<IStep>();

  useEffect(() => {
    const nextStep = steps.filter((step) => step.isCompleted === false)[0];
    setCurrentStep(nextStep);
  }, [steps]);

  return (
    <>
      <StepsProgressWrapperStyled>
        <StepDetailStyled>
          {steps.map((step, i) => {
            const stepValue = step.isCompleted ? (
              <FontAwesomeIcon
                key={i}
                data-qaid="steps-complete-icon"
                icon={faCheck}
                color={"white"}
              />
            ) : (
              i + 1
            );

            return (
              <StepsProgressStepDetail
                key={i}
                value={stepValue}
                title={step.title}
                isCompleted={step.isCompleted}
                isDisabled={step.isDisabled}
                index={i}
                isLastStep={i + 1 >= steps.length}
                onClick={step.isDisabled ? undefined : step.onClickNavHeader}
              />
            );
          })}
        </StepDetailStyled>
      </StepsProgressWrapperStyled>

      {nextStep && nextStep.description && (
        <StepsProgressStepDescription as="h3">
          {nextStep.description}
        </StepsProgressStepDescription>
      )}
    </>
  );
};

export default StepsProgress;
