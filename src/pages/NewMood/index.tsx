import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import Modal from "../../components/UI/Modal ";
import Button from "../../components/UI/Button";
import Card, { CARD_VARIATIONS } from "../../components/Card";
import CardHeader from "../../components/Card/components/CardHeader";
import CardBody from "../../components/Card/components/CardBody";
import { ROUTES } from "../../shared/routes";
import { resolveRoute } from "../../shared/URL";
import { NewUserContext } from "../../context/UserContext";
import * as actions from "../../store/actions/index";

import {
  NewMoodStyled,
  ButtonStyled,
  SubmitButtonWrapperStyled,
} from "./styles";

interface IParamsProp {
  teamName: string;
  userName: string;
}

const moodPoints = [{ 0: "sad" }, { 50: "neutral" }, { 100: "happy" }];

const NewMood: React.FC = ({}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeMood, setActiveMood] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  let slug = useParams<IParamsProp>();

  const allTeamsArray = useSelector((state: any) => {
    return Array.from(state.team?.teams);
  });

  const selectedTeamArray = allTeamsArray.filter(
    (team) => Object.keys(team)[0] === slug.teamName
  )[0][slug.teamName];

  const selectedMemberIndex = selectedTeamArray.findIndex(
    (member) => member.userName === slug.userName
  );

  const selectedMemberData = selectedTeamArray.filter(
    (member) => member.userName === slug.userName
  );

  const selectedMemberMoods = selectedMemberData[0].moods;
  console.log(selectedMemberMoods);

  const nextMoodIndex = selectedMemberMoods.length;
  console.log(nextMoodIndex);

  const getTime = () => {
    var d = new Date();
    var t = d.toLocaleTimeString();
    return t;
  };
  const confirmMood = (mood: string) => {
    setActiveMood(mood);
    setModalOpen(true);
  };
  const submitHandler = (mood: string) => {
    const teamIndex = slug.teamName === "red_team" ? 0 : 1;
    dispatch(
      actions.addMood(
        teamIndex,
        slug.teamName,
        selectedMemberIndex,
        slug.userName,
        nextMoodIndex,
        mood,
        getTime(),
        history
      )
    );
  };
  const dateArray = new Date().toString().split(" ");
  const dayOfWeek = () => {
    return dateArray[0];
  };
  const getDate = () => {
    return dateArray[2] + " " + dateArray[1] + " " + dateArray[3];
  };

  return (
    <NewMoodStyled>
      <Card>
        <CardHeader title={dayOfWeek()} description={getDate()} />
        <CardBody title={"how are you feeling today?"} />
        <SubmitButtonWrapperStyled>
          {moodPoints.map((moodItem) => {
            const mood = Object.values(moodItem)[0];
            console.log(Object.values(moodItem)[0]);
            return (
              <ButtonStyled
                btnType={mood}
                className={`${mood}Button`}
                onClick={() => confirmMood(mood)}
                text={mood}
              />
            );
          })}
        </SubmitButtonWrapperStyled>

        <Modal show={isModalOpen}>
          <p>{`Are you sure you want to select ${activeMood}?`}</p>
          <>
            <Button
              btnType={"Danger"}
              onClick={() => setModalOpen(false)}
              text={"Cancel"}
            />
            <Button
              btnType={"Success"}
              onClick={() => submitHandler(activeMood)}
              text={`Confirm ${activeMood}`}
            />
          </>
        </Modal>
      </Card>
    </NewMoodStyled>
  );
};

export default NewMood;
