import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import {
  connect,
  useDispatch,
  useSelector,
  TypedUseSelectorHook,
} from "react-redux";

import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import List from "../../components/List";
import Aux from "../../hoc/Aux/Aux";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import axios from "../../axios";
import { ROUTES } from "../../shared/routes";
import { resolveRoute } from "../../shared/URL";
import UserDetails from "../../pages/UserDetails/child_pages/UserName";

import {
  BoardWrapperStyled,
  TeamsWrapperStyled,
  TeamContainerStyled,
  ListTitleStyled,
  ResetButtonStyled,
  ButtonsWrapperStyled,
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
              <ListTitleStyled>{`Team: ${teamName}`}</ListTitleStyled>
              <List list={teamMembers} />
            </TeamContainerStyled>
          );
        })}
      </>
    );
  }

  return (
    <BoardWrapperStyled>
      <TeamsWrapperStyled>
        {teamsData.loading && <Spinner />}
        {content}
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
