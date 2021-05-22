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
import Aux from "../../hoc/Aux/Aux";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import axios from "../../axios";
import { ROUTES } from "../../shared/routes";
import { resolveRoute } from "../../shared/URL";
import UserDetails from "../../pages/UserDetails/child_pages/UserName";

const BoardIntro = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const teams = useSelector((state: any) => {
    console.log(state);
    return state;
  });
  // const error = useSelector((state: any) => {
  //   return state.list.error;
  // });

  const onFetchTeams = useCallback(() => dispatch(actions.fetchTeams()), [
    dispatch,
  ]);

  // const onSetAuthRedirectPath = (newTaskId?: string): void => {
  //   history.push(
  //     resolveRoute(ROUTES.TASK, {
  //       taskId: newTaskId,
  //     })
  //   );
  //   // history.push(`tasks/?step=${step}`);
  // };
  useEffect(() => {
    onFetchTeams();
  }, [onFetchTeams]);

  return (
    <Aux>
      <p>PLease continue to user details</p>
      <Button
        clicked={() => history.push(ROUTES.USER_DETAILS)}
        btnType="Success"
      >
        Save and Next
      </Button>
    </Aux>
  );
};

export default withErrorHandler(BoardIntro, axios);
