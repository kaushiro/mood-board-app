import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, NavLink, useHistory } from "react-router-dom";

import axios from "../../axios";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Button from "../../components/UI/Button";
import { ROUTES } from "../../shared/routes";
import { resolveRoute } from "../../shared/URL";
import List from "../../components/List";
import Card, { CARD_VARIATIONS } from "../../components/Card";
import CardHeader from "../../components/Card/components/CardHeader";
import CardBody from "../../components/Card/components/CardBody";
import {
  MainContentWrapperStyled,
  TeamHeaderStyled,
  CardWrapperStyled,
  ButtonWrapperStyled,
} from "./styles";

interface IParamsProp {
  teamName: string;
  userName: string;
}
const UserProfile: React.FC = () => {
  const history = useHistory();
  let slug = useParams<IParamsProp>();

  const allTeamsArray = useSelector((state: any) => {
    return Array.from(state.team?.teams);
  });

  const selectedTeamArray = allTeamsArray.filter(
    (team) => Object.keys(team)[0] === slug.teamName
  )[0][slug.teamName];

  const selectedMemberData = selectedTeamArray.filter(
    (member) => member.userName === slug.userName
  )[0];

  const selectedMemberMoods = selectedMemberData.moods;
  // const selectedMemberMoods = selectedMemberData.moods.map(
  //   (mood) => `${mood.mood}: ${mood.time}`
  // );
  console.log(selectedMemberMoods);
  const getCardVariation = (mood: string) => {
    switch (mood) {
      case "happy":
        return CARD_VARIATIONS.GREEN;
      case "neutral":
        return CARD_VARIATIONS.YELLOW;
      case "sad":
        return CARD_VARIATIONS.RED;
      default:
        return CARD_VARIATIONS.WHITE;
    }
  };

  const onSetGoBackPath = (): void => {
    history.push(
      resolveRoute(ROUTES.TEAM, {
        teamId: slug.teamName,
      })
    );
  };
  const onSetAddMoodPath = (): void => {
    history.push(
      resolveRoute(ROUTES.NEW_MOOD, {
        teamId: slug.teamName,
        userId: slug.userName,
      })
    );
  };
  return (
    <MainContentWrapperStyled>
      <TeamHeaderStyled>{selectedMemberData.userName}</TeamHeaderStyled>
      <CardWrapperStyled>
        {selectedMemberMoods.map((mood, i) => (
          <Card key={i} variation={getCardVariation(mood.mood)}>
            <CardHeader title={"Today"} description={mood.time} />
            <CardBody description={`Your mood is ${mood.mood}`} />
          </Card>
        ))}
      </CardWrapperStyled>
      <ButtonWrapperStyled>
        <Button
          className="goBackButton"
          onClick={onSetGoBackPath}
          text={`Go back to ${slug.teamName}`}
        />
        <Button
          btnType="Success"
          className="addMoodButton"
          onClick={onSetAddMoodPath}
          text={"ADD ANOTHER MOOD"}
        />
      </ButtonWrapperStyled>
    </MainContentWrapperStyled>
  );
};

export default withErrorHandler(UserProfile, axios);
