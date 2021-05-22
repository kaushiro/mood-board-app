import { put } from "redux-saga/effects";
import axios from "axios";

// import axios from "../../axios";
import * as actions from "../actions";

const baseUrl =
  "https://mood-board-db-default-rtdb.europe-west1.firebasedatabase.app/teams.json";
export function* fetchTeamsSaga(action) {
  yield put(actions.fetchTeamsStart());
  try {
    const response = yield axios.get(baseUrl);
    console.log(response);
    yield put(actions.setTeams(response.data));
  } catch (error) {
    yield put(actions.fetchTeamsFailed(error));
  }
}

// export function* addUserSaga(action) {
//   yield put(actions.fetchTeamsStart());
// console.log(userData);
// const url = baseUrl + action.userTeam;
// console.log(url);
// const userData = {
//   action.userTeam,
//   action.userName,
//   action.firstName,
//   action.lastName
// };
// console.log(userData);

// yield axios
//   .post(url)
//   .then((res) => {
//     // here will be code
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// try {
// } catch (error) {
//   yield put(actions.authFail(error.response.data.error));
// }
// }
