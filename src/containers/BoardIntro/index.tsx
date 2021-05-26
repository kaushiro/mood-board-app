import React, { useEffect, useCallback } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/UI/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import TeamCard from "../../components/TeamCard";
import TeamCardHeader, {
  HEADER_VARIATIONS,
} from "../../components/TeamCard/components/TeamCardHeader";
import TeamCardBody from "../../components/TeamCard/components/TeamCardBody";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import axios from "../../axios";
import { ROUTES } from "../../shared/routes";

import {
  BoardWrapperStyled,
  TeamsWrapperStyled,
  TeamContainerStyled,
  ListTitleStyled,
  ResetButtonStyled,
  ButtonsWrapperStyled,
  NavLinkStyled,
} from "./styles";
const BoardIntro = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFetchTeams = useCallback(() => dispatch(actions.fetchTeams()), [
    dispatch,
  ]);
  useEffect(() => {
    onFetchTeams();
  }, [onFetchTeams]);

  const teamsData = useSelector((state: any) => {
    return state.team;
  });
  // console.log(teamsData);
  const teamsArray = useSelector((state: any) => {
    return Array.from(state.team?.teams);
  });
  // console.log(teamsArray);
  // const redTeamArray = teamsArray.filter(
  //   (team) => Object.keys(team)[0] === "red_team"
  // )[0]["red_team"];
  // console.log(redTeamArray);
  // const blueTeamArray = teamsArray.filter(
  //   (team) => Object.keys(team)[0] === "blue_team"
  // )[0]["blue_team"];
  // console.log(blueTeamArray);
  // const teamMoodsArray = [];
  // const redTeamMoodsArray = redTeamArray.map((member, i) => {
  //   console.log(member);
  //   return member.moods;
  // }, []);
  // console.log(redTeamMoodsArray);
  // const redTeamMoodsFlattenedArray = redTeamMoodsArray.map(
  //   (moods, i) => (mood, i) => {
  //     console.log(mood);
  //     return mood.mood;
  //   }
  // );
  // console.log(teamsArray);
  let content = teamsData?.error ? <p>Teams can't be loaded!</p> : <Spinner />;
  if (teamsArray.length) {
    content = (
      <>
        {teamsArray.map((team) => {
          const teamName = Object.keys(team)[0];
          console.log(team);
          // console.log(team[teamName]);
          const teamMembers = team[teamName];
          return (
            <TeamCard>
              <TeamCardHeader variation={HEADER_VARIATIONS.GREEN}>
                <ListTitleStyled>
                  <NavLink to={`/teams/${teamName}`}>{`${teamName}`}</NavLink>
                </ListTitleStyled>
              </TeamCardHeader>
              <TeamCardBody
                title={
                  <ListTitleStyled>
                    <NavLink to={`/teams/${teamName}`}>{`${teamName}`}</NavLink>
                  </ListTitleStyled>
                }
                description={teamMembers.map((member) => (
                  <NavLinkStyled
                    to={`/teams/${teamName}/user/${member.userName}`}
                  >
                    {member.userName}
                  </NavLinkStyled>
                ))}
              ></TeamCardBody>
            </TeamCard>
          );
        })}
      </>
    );
  }

  return (
    <BoardWrapperStyled>
      <TeamsWrapperStyled>
        {teamsData.loading ? <Spinner /> : content}
      </TeamsWrapperStyled>
      <p>
        These are the current teams. Please pick your name or click New Member
        if you have not been added to a team
      </p>

      <ButtonsWrapperStyled>
        <ResetButtonStyled
          onClick={() => dispatch(actions.resetTeams())}
          btnType="Danger"
          text={"Reset Teams"}
          disabled={true}
        />
        <Button
          onClick={() => history.push(ROUTES.USER_DETAILS)}
          btnType="Success"
          text={"New Member"}
        />
      </ButtonsWrapperStyled>
    </BoardWrapperStyled>
  );
};

export default withErrorHandler(BoardIntro, axios);
