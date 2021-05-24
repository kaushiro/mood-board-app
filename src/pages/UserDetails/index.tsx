import React, { useState, useEffect, useCallback, createContext } from "react";
import {
  connect,
  useDispatch,
  useSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { useHistory } from "react-router-dom";
import snakeCase from "lodash/snakeCase";

import Aux from "../../hoc/Aux/Aux";
import Button from "../../components/UI/Button/Button";
import SteppedProcess from "../../components/SteppedProcess";
import { IStep, ITask } from "../../components/SteppedProcess/types";
import { SteppedProcessWrapperStyled } from "../../components/SteppedProcess/styles";
import * as actions from "../../store/actions/index";
import { ROUTES } from "../../shared/routes";
import { resolveRoute } from "../../shared/URL";
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

  // const listTeams = useSelector((state: any) => {
  //   return state.teams;
  // });

  // const error = useSelector((state: any) => {
  //   return state.teams.error;
  // });

  const onFetchTeams = useCallback(() => dispatch(actions.fetchTeams()), [
    dispatch,
  ]);
  useEffect(() => {
    onFetchTeams();
  }, [onFetchTeams]);

  // const onSetAuthRedirectPath = (newTeamId?: string): void => {
  //   history.push(
  //     resolveRoute(ROUTES.PROFILE, {
  //       teamId: newTeamId,
  //     })
  //   );
  //   // history.push(`tasks/?step=${step}`);
  // };

  // let list = error ? <p>List can't be loaded!</p> : <Spinner />;

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
      title: messages.userNameStep.defaultMessage,
      description: messages.userNameDescription.defaultMessage,
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
    <Aux>
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
    </Aux>
  );
};

export default withErrorHandler(UserDetails, axios);
