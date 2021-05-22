import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "utils/testing/helpers/customRender";

import SteppedProcess from "../";

const prevStep = jest.fn();
const steps = [
  {
    title: "Step One",
    isCompleted: false,
    nextStep: {
      title: "Next: Step Two",
      onNextStep: () => {
        /* stubbed */
      },
    },
    content: "Step 1",
  },
  {
    title: "Step Two",
    isCompleted: false,
    prevStep: {
      title: "Prev: Step One",
      onPrevStep: prevStep,
    },
    nextStep: {
      title: "Next: Finished",
      onNextStep: () => {
        /* stubbed */
      },
    },
    content: "Step 2",
  },
];

const props = {
  title: "Stepped Process",
  steps,
  activeStepIndex: 0,
  isLoading: false,
};

describe("SteppedProcess component", () => {
  it("displays a title, steps, active step and next step navigation", () => {
    const { getByText, queryByText } = render(<SteppedProcess {...props} />);

    getByText(props.title);

    getByText(steps[0].title);
    getByText(steps[1].title);

    getByText(steps[0].content);
    expect(queryByText(steps[1].content)).not.toBeInTheDocument();

    getByText(steps[0].nextStep.title);
    expect(queryByText(steps[1].nextStep.title)).not.toBeInTheDocument();
  });

  it("displays a completed step state", () => {
    const stepsWithCompleted = [...steps];
    steps[0].isCompleted = true;

    const { getByTestId } = render(
      <SteppedProcess {...props} steps={stepsWithCompleted} />
    );

    getByTestId("steps-complete-icon");
  });

  it("executes a callback on next step change", () => {
    const stepsWithCallback = [...steps];
    const nextStep = jest.fn();
    steps[0].nextStep.onNextStep = nextStep;

    const { getByTestId } = render(
      <SteppedProcess {...props} steps={stepsWithCallback} />
    );

    fireEvent.click(getByTestId("button-next-step"));
    expect(nextStep).toHaveBeenCalled();
  });

  it("executes a callback on previous step change", () => {
    const stepsWithCallback = [...steps];

    const { getByTestId } = render(
      <SteppedProcess
        {...props}
        steps={stepsWithCallback}
        activeStepIndex={1}
      />
    );
    fireEvent.click(getByTestId("button-prev-step"));
    expect(prevStep).toHaveBeenCalled();
  });
});
