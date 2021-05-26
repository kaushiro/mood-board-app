import React, { useContext } from "react";
import { useSelector } from "react-redux";

import Button from "../../../../components/UI/Button";
import { NewUserContext } from "../../../../context/UserContext";

import { ChooseTeamStyled, SubmitButtonWrapperStyled } from "./styles";
interface IProps {
  disableBack?: boolean | undefined;
  onNextStep?: () => void;
}

const ChooseTeam: React.FC<IProps> = ({ disableBack, onNextStep }) => {
  const { setUserData } = useContext(NewUserContext);

  const allTeamsArray = useSelector((state: any) => {
    return Array.from(state.team?.teams);
  });

  const chooseTeam = (teamName: string, teamIndex: number) => {
    const team = allTeamsArray.filter(
      (team) => Object.keys(team)[0] == teamName
    )[0][teamName];
    const nextMemberIndex = team.length;
    console.log(team);
    setUserData((state) => ({
      ...state,
      teamIndex: teamIndex,
      userTeam: teamName,
      userIndex: nextMemberIndex,
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
            onClick={() => chooseTeam("red_team", 0)}
            text={"RED TEAM"}
          />
          <Button
            btnType="Success"
            className="blueTeamButton"
            onClick={() => chooseTeam("blue_team", 1)}
            text={"BLUE TEAM"}
          />
        </SubmitButtonWrapperStyled>
      </ChooseTeamStyled>

      <SubmitButtonWrapperStyled>
        <Button disabled={disableBack} btnType="Secondary" text={"Back"} />
        <Button onClick={onNextStep} btnType="Success" text={"Save and Next"} />
      </SubmitButtonWrapperStyled>
    </>
  );
};

export default ChooseTeam;
