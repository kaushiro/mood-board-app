import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";

import axios from "../../axios";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import TeamCard from "../../components/TeamCard";
import TeamCardHeader, {
  HEADER_VARIATIONS,
} from "../../components/TeamCard/components/TeamCardHeader";
import TeamCardBody from "../../components/TeamCard/components/TeamCardBody";

import {
  MainContentWrapperStyled,
  NavLinkStyled,
  TeamHeaderStyled,
} from "./styles";

interface IParamsProp {
  teamName: string;
}
const TeamProfile: React.FC = () => {
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
  )[0][slug.teamName];
  console.log(selectedTeamArray);
  const teamMoodsArray = [];
  const selectedTeamMoodsArray = selectedTeamArray.map((member, i) => {
    console.log(member);
    return member.moods;
  }, []);
  console.log(selectedTeamMoodsArray);
  const selectedTeamMoodsFlattenedArray = selectedTeamMoodsArray.map(
    (moods, i) => (mood, i) => {
      console.log(mood);
      return mood.mood;
    }
  );
  console.log(selectedTeamMoodsFlattenedArray);
  console.log(teamMoodsArray);
  return (
    <MainContentWrapperStyled>
      <TeamCard>
        <TeamCardHeader variation={HEADER_VARIATIONS.GREEN}>
          <TeamHeaderStyled>{slug.teamName}</TeamHeaderStyled>
        </TeamCardHeader>
        <TeamCardBody
          description={selectedTeamArray.map((member) => (
            <NavLinkStyled
              to={`/teams/${slug.teamName}/user/${member.userName}`}
            >
              {member.fullName}
            </NavLinkStyled>
          ))}
        ></TeamCardBody>
      </TeamCard>
    </MainContentWrapperStyled>
  );
};

export default withErrorHandler(TeamProfile, axios);
