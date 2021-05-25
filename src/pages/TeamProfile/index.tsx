import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";

import axios from "../../axios";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";

import { MainContentWrapperStyled, TeamHeaderStyled } from "./styles";

interface IParamsProp {
  teamName: string;
}
const TeamProfie: React.FC = () => {
  const dispatch = useDispatch();
  const onFetchTeams = useCallback(() => dispatch(actions.fetchTeams()), [
    dispatch,
  ]);
  useEffect(() => {
    onFetchTeams();
  }, [onFetchTeams]);

  let slug = useParams<IParamsProp>();
  const allTeamsArray = useSelector((state: any) => {
    return Array.from(state.team?.teams);
  });
  const selectedTeamArray = allTeamsArray.filter(
    (team) => Object.keys(team)[0] === slug.teamName
  )[0][`${slug.teamName}`];

  const namesList = Object.entries(selectedTeamArray).map(([key]) => {
    return key;
  });
  return (
    <MainContentWrapperStyled>
      <TeamHeaderStyled>{`${slug.teamName}`}</TeamHeaderStyled>
      {namesList.map((name) => (
        <NavLink to={`/team/${slug.teamName}/user/${name}`}>{name}</NavLink>
      ))}
    </MainContentWrapperStyled>
  );
};

export default withErrorHandler(TeamProfie, axios);
