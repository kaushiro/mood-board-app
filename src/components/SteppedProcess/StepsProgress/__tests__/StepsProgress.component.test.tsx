import React from "react";

import { render, fireEvent } from "utils/testing/helpers/customRender";

import StepsProgress from "../";

const navHandler = jest.fn();

const props = {
  steps: [
    {
      title: "Tell us about yourself",
      description: "Fill in the form below...",
      isCompleted: false,
      nextStep: {
        title: "step title",
        onNextStep: () => {
          /* stubbed */
        },
      },
      content: "content",
      onClickNavHeader: navHandler,
    },
    {
      title: "Select your persona",
      description:
        "We now need you to select your persona. This will enable us to tailor content to your skill level.",
      isCompleted: false,
      nextStep: {
        title: "step title",
        onNextStep: () => {
          /* stubbed */
        },
      },
      content: "content",
    },
  ],
};

const step1CompleteProps = {
  steps: [
    {
      title: "Tell us about yourself",
      description: "Fill in the form below...",
      isCompleted: true,
      nextStep: {
        title: "step title",
        onNextStep: () => {
          /* stubbed */
        },
      },
      content: "content",
    },
    {
      title: "Select your persona",
      description:
        "We now need you to select your persona. This will enable us to tailor content to your skill level.",
      isCompleted: false,
      nextStep: {
        title: "step title",
        onNextStep: () => {
          /* stubbed */
        },
      },
      content: "content",
    },
  ],
};

describe("StepsProgress component", () => {
  it("renders all ProgressStepDetailsteps components", () => {
    const { getByText } = render(<StepsProgress {...props} />);
    props.steps.forEach(step => getByText(step.title));
  });

  it("runs an action on step click when a navigation handler is passed for a specific step", () => {
    const { getByText } = render(<StepsProgress {...props} />);
    const step1 = getByText(props.steps[0].title);

    fireEvent.click(step1);
    expect(navHandler).toHaveBeenCalled();
  });

  it("does nothing on step click when a navigation handler isn't passed in for a specific step", () => {
    const { getByTestId } = render(<StepsProgress {...props} />);
    const step2 = getByTestId("stepsProgressDetailStep-1");

    expect(step2.onclick).toBeNull();
  });

  describe("when no step is completed", () => {
    it("renders current step's description correctly", () => {
      const { getByText } = render(<StepsProgress {...props} />);
      getByText(props.steps[0].description);
    });
  });

  describe("when step 1 is completed", () => {
    it("renders step2 description in current step correctly", () => {
      const { getByText } = render(<StepsProgress {...step1CompleteProps} />);
      getByText(step1CompleteProps.steps[1].description);
    });

    it("renders completed icon correctly", () => {
      const { getByTestId } = render(<StepsProgress {...step1CompleteProps} />);
      getByTestId("steps-complete-icon");
    });
  });
});
