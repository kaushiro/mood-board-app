import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import SteppedProcess from "../../components/SteppedProcess";
import { IStep, ITask } from "../../components/SteppedProcess/types";
import { SteppedProcessWrapperStyled } from "../../components/SteppedProcess/styles";
import * as actions from "../../store/actions/index";
import { ROUTES } from "../../shared/routes";
import axios from "../../axios";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { NewUserProvider } from "../../context/UserContext";

import ChooseMood from "./child_pages/ChooseMood";
import ChooseTeam from "./child_pages/ChooseTeam";
import UserName from "./child_pages/UserName";
import Confirmation from "./child_pages/Confirmation";

import messages from "./messages";
import { defineMessages } from "react-intl";

export enum USER_DETAILS {
  CHOOSE_TEAM = 0,
  ADD_USERNAME = 1,
  CHOOSE_MOOD = 2,
  CONFIRM_DETAILS = 3,
}

const UserDetails: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);

  const onFetchTeams = useCallback(() => dispatch(actions.fetchTeams()), [
    dispatch,
  ]);
  useEffect(() => {
    onFetchTeams();
  }, [onFetchTeams]);

  const steps = [
    {
      title: messages.chooseTeamStep.defaultMessage,
      description: messages.chooseTeamDescription.defaultMessage,
      content: (
        <ChooseTeam
          disableBack={true}
          onNextStep={() => {
            setActiveStep(activeStep + 1);
            history.push(ROUTES.ADD_USERNAME);
          }}
        />
      ),
      isCompleted: activeStep > USER_DETAILS.CHOOSE_TEAM,
    },
    {
      title: messages.userNameStep.defaultMessage,
      description: messages.userNameDescription.defaultMessage,
      content: (
        <UserName
          onPrevStep={() => {
            setActiveStep(activeStep - 1);
            history.push(ROUTES.CHOOSE_TEAM);
          }}
          onNextStep={() => {
            setActiveStep(activeStep + 1);
            history.push(ROUTES.CHOOSE_MOOD);
          }}
        />
      ),
      isCompleted: activeStep > USER_DETAILS.ADD_USERNAME,
    },
    {
      title: messages.chooseMoodStep.defaultMessage,
      description: messages.chooseMoodDescription.defaultMessage,
      content: (
        <ChooseMood
          onPrevStep={() => {
            setActiveStep(activeStep - 1);
            history.push(ROUTES.ADD_USERNAME);
          }}
          onNextStep={() => {
            setActiveStep(activeStep + 1);
            history.push(ROUTES.CONFIRM_DETAILS);
          }}
        />
      ),
      isCompleted: activeStep > USER_DETAILS.CHOOSE_MOOD,
    },
    {
      title: messages.confirmStep.defaultMessage,
      description: messages.confirmDescription.defaultMessage,
      content: (
        <Confirmation
          onPrevStep={() => {
            setActiveStep(activeStep - 1);
            history.push(ROUTES.CHOOSE_MOOD);
          }}
        />
      ),
      isCompleted: activeStep > USER_DETAILS.CONFIRM_DETAILS,
    },
  ];

  return (
    <NewUserProvider>
      <SteppedProcessWrapperStyled>
        <SteppedProcess
          title={messages.steppedProcessTitle.defaultMessage}
          steps={steps}
          activeStepIndex={activeStep}
          isLoading={false}
        />
      </SteppedProcessWrapperStyled>
    </NewUserProvider>
  );
};

export default withErrorHandler(UserDetails, axios);
