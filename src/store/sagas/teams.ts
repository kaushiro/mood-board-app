import { put, call } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions";

const baseUrl =
  "https://mood-board-db-default-rtdb.europe-west1.firebasedatabase.app/teams.json";

export function* fetchTeamsSaga(action) {
  yield put(actions.fetchTeamsStart());
  try {
    const response = yield axios.get(baseUrl);
    yield put(actions.setTeams(response.data));
    yield put(actions.fetchTeamsSuccess());
  } catch (error) {
    yield put(actions.fetchTeamsFailed(error));
  }
}
