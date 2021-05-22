import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";

// import mixins from "utils/deprecated_mixins";

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

const StepTooltipWrapper: React.FC<{ shouldUse?: boolean }> = ({
  shouldUse,
  children,
}) => {
  // if (shouldUse) {
  //   return (
  //     <Tooltip
  //       // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: Element; placement: string; trig... Remove this comment to see the full error message
  //       // placement="top"
  //       trigger="hover"
  //       content={<FormattedMessage {...messages.stepAccessDisabled} />}
  //     >
  //       <div>{children}</div>
  //     </Tooltip>
  //   );
  // }
  return <>{children}</>;
};

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
              // <StepTooltipWrapper shouldUse={step.isDisabled} key={i}>
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
              // </StepTooltipWrapper>
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
