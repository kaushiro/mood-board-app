import React from "react";

export type Title = React.ReactNode;

export interface INextStep {
  title: Title;
  onNextStep?: () => void | undefined;
  isDisabled?: boolean;
}

export interface IPrevStep {
  title: Title;
  isDisabled?: boolean | null;
  onPrevStep?: () => void;
}

export interface IStep {
  title?: Title;
  description?: string;
  isCompleted: boolean;
  isDisabled?: boolean;
  prevStep?: IPrevStep;
  nextStep?: INextStep;
  content: React.ReactNode;
  isStickyNavHidden?: boolean;
  onClickNavHeader?: () => void;
}

export interface ISteppedProcess {
  title?: Title;
  steps: IStep[];
  activeStepIndex: number;
  isLoading?: boolean;
}

export interface ITask {
  task: string;
  status?: string | null;
}
