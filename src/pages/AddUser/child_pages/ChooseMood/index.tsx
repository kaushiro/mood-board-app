import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../../../components/UI/Button/Button";
import { ROUTES } from "../../../../shared/routes";
import { resolveRoute } from "../../../../shared/URL";
import { NewUserContext } from "../../../../context/UserContext";

import { ChooseMoodStyled, SubmitButtonWrapperStyled } from "./styles";
interface IProps {
  status?: string | null;
  disableBack?: boolean | undefined;
  disableNext?: boolean | undefined;
  isDisabled?: boolean | null;
  onPrevStep?: () => void;
  onNextStep?: () => void;
}
interface IMood {
  [key: string]: string;
}
const getTime = () => {
  var d = new Date();
  var t = d.toLocaleTimeString();
  return t;
};
const ChooseMood: React.FC<IProps> = ({
  disableBack,
  disableNext,
  onPrevStep,
  onNextStep,
}) => {
  const history = useHistory();
  const { userData, setUserData } = useContext(NewUserContext);

  console.log(userData);
  const onSetAuthRedirectPath = (): void => {
    history.push({ pathname: ROUTES.CONFIRM_DETAILS });
    onNextStep();
  };

  const chooseMood = (userMood: string) => {
    // let time = getTime();
    // const setMood: { [key: string]: string } = { time: userMood };
    // console.log(getTime());
    setUserData((state) => ({
      ...state,
      mood: userMood,
      time: getTime(),
    }));
    onNextStep();
  };
  return (
    <>
      <ChooseMoodStyled>
        <SubmitButtonWrapperStyled>
          <Button
            btnType="Danger"
            className="redMoodButton"
            clicked={() => chooseMood("blue_Mood")}
          >
            RED Mood
          </Button>
          <Button
            btnType="Success"
            className="blueMoodButton"
            clicked={() => chooseMood("blue_Mood")}
          >
            BLUE Mood
          </Button>
        </SubmitButtonWrapperStyled>
      </ChooseMoodStyled>

      <SubmitButtonWrapperStyled>
        <Button clicked={onSetAuthRedirectPath} btnType="Success">
          Save and Next
        </Button>
      </SubmitButtonWrapperStyled>
    </>
  );
};

export default ChooseMood;
