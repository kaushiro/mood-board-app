import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";
import { ROUTES } from "../../../../shared/routes";
import { resolveRoute } from "../../../../shared/URL";
import { NewUserContext } from "../../../../context/UserContext";

import { ChooseTeamStyled, SubmitButtonWrapperStyled } from "./styles";
interface IProps {
  status?: string | null;
  disableBack?: boolean | undefined;
  disableNext?: boolean | undefined;
  isDisabled?: boolean | null;
  onPrevStep?: () => void;
  onNextStep?: () => void;
}

const ChooseTeam: React.FC<IProps> = ({
  disableBack,
  disableNext,
  onPrevStep,
  onNextStep,
}) => {
  const history = useHistory();
  const { userData, setUserData } = useContext(NewUserContext);

  console.log(userData);
  const onSetAuthRedirectPath = (): void => {
    history.push({ pathname: ROUTES.ADD_USERNAME });
    onNextStep();
  };

  const chooseTeam = (teamName: string) => {
    setUserData((state) => ({
      ...state,
      userTeam: teamName,
    }));
    onNextStep();
  };
  return (
    <>
      <ChooseTeamStyled>
        <SubmitButtonWrapperStyled>
          <Button
            btnType="Danger"
            className="redTeamButton"
            clicked={() => chooseTeam("red_team")}
          >
            RED TEAM
          </Button>
          <Button
            btnType="Success"
            className="blueTeamButton"
            clicked={() => chooseTeam("blue_team")}
          >
            BLUE TEAM
          </Button>
        </SubmitButtonWrapperStyled>
      </ChooseTeamStyled>

      <SubmitButtonWrapperStyled>
        <Button clicked={onSetAuthRedirectPath} btnType="Success">
          Save and Next
        </Button>
      </SubmitButtonWrapperStyled>
    </>
  );
};

export default ChooseTeam;
