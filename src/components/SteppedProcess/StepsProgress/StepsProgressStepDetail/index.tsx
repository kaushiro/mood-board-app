import React from "react";

import { Title } from "../../types";

import {
  StepDetailWrapperStyled,
  StepCircleStyled,
  StepTitleStyled,
} from "./styles";

export interface IProps {
  value: React.ReactNode;
  title: Title;
  isCompleted: boolean;
  isDisabled?: boolean;
  index: number;
  isLastStep: boolean;
  onClick?(): void;
}

const StepsProgressStepDetail: React.FC<IProps> = ({
  value,
  title,
  isCompleted,
  isDisabled,
  index,
  isLastStep,
  onClick,
}) => (
  <StepDetailWrapperStyled
    isCompleted={isCompleted}
    isDisabled={isDisabled}
    data-qaid={`stepsProgressDetailStep-${index}`}
    onClick={onClick}
  >
    <StepCircleStyled
      isCompleted={isCompleted}
      isDisabled={isDisabled}
      isLastStep={isLastStep}
    >
      <span>{value}</span>
    </StepCircleStyled>
    {title && <StepTitleStyled as="h3">{title}</StepTitleStyled>}
  </StepDetailWrapperStyled>
);

export default StepsProgressStepDetail;
