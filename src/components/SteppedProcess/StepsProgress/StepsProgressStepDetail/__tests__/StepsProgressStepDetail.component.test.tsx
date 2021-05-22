import React from "react";

import { render } from "utils/testing/helpers/customRender";

import StepsProgressStepDetail from "../";

const props = {
  value: 1,
  title: "Tell us about yourself",
  isCompleted: false,
  index: 1,
  isLastStep: false,
  headerWidth: 500,
};

describe("StepsProgressStepDetail component", () => {
  it("renders value and title correctly", () => {
    const { getByText } = render(<StepsProgressStepDetail {...props} />);
    getByText(props.value.toString());
    getByText(props.title);
  });
});
