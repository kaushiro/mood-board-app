import React, { useEffect, useCallback } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
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
  const teamsArray = useSelector((state: any) => {
    return Array.from(state.team?.teams);
  });

  let content = teamsData?.error ? <p>Teams can't be loaded!</p> : <Spinner />;
  if (teamsArray.length) {
    content = (
      <>
        {teamsArray.map((team) => {
          const teamName = Object.keys(team)[0];
          const teamMembers = Object.keys(team[teamName]);
          return (
            <TeamContainerStyled>
              <ListTitleStyled>
                <NavLink
                  to={`/team/${teamName}`}
                >{`Team: ${teamName}`}</NavLink>
              </ListTitleStyled>

              {teamMembers.map((member) => (
                <NavLinkStyled to={`/team/${teamName}/user/${member}`}>
                  {member}
                </NavLinkStyled>
              ))}
            </TeamContainerStyled>
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
      <p>PLease continue to user details</p>

      <ButtonsWrapperStyled>
        <ResetButtonStyled
          clicked={() => dispatch(actions.resetTeams())}
          btnType="Danger"
        >
          Reset Teams
        </ResetButtonStyled>
        <Button
          clicked={() => history.push(ROUTES.USER_DETAILS)}
          btnType="Success"
        >
          Save and Next
        </Button>
      </ButtonsWrapperStyled>
    </BoardWrapperStyled>
  );
};

export default withErrorHandler(BoardIntro, axios);
