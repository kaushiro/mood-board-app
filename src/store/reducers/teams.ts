import axios from "axios";

import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";
import { userInfo } from "os";

const baseUrl =
  "https://mood-board-db-default-rtdb.europe-west1.firebasedatabase.app";
// const initialState = {
//   teams: {
//     red_team: {
//       kim: {
//         fullName: "kim U",
//         moods: {
//           "01": "happy",
//           "02": "happy",
//         },
//       },
//       matt: {
//         fullName: "Matt Williams",
//         moods: {
//           "01": "happy",
//           "02": "sad",
//           "03": "sad",
//           "04": "undefined",
//         },
//       },
//     },
//     blue_team: {
//       leo: {
//         fullName: "Leo Williams",
//         moods: {
//           "01": "happy",
//           "02": "happy",
//           "03": "sad",
//           "04": "undefined",
//         },
//       },
//       steve: {
//         fullName: "Steve Williams",
//         moods: {
//           "01": "happy",
//           "02": "happy",
//           "03": "sad",
//           "04": "undefined",
//           "05": "sad",
//           "06": "undefined",
//         },
//       },
//     },
//   },
//   loading: false,
//   error: null,
// };
const initialState = {
  teams: {},
  loading: false,
  error: null,
};

const setTeams = (state, action) => {
  console.log(action);
  return updateObject(state, {
    teams: [
      { blue_team: action.teams.blue_team },
      { red_team: action.teams.red_team },
    ],
  });
};
// const fetchTeams = (state, action) => {
//   const response = axios.get(baseUrl + "/teams.json");
//   console.log(response);
//   console.log(response.data);
//   return updateObject(state, { teams: response.data });
// };

const fetchTeamsStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const fetchTeamsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: null,
  });
};

const fetchTeamsFailed = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};

const addTeamMember = (state, action) => {
  const newMember = {
    fullName: [action.firstName] + " " + [action.lastName],
    moods: { [action.time]: [action.mood] },
  };
  const teamUrl = baseUrl + `/teams/${action.userTeam}/${action.userName}.json`;
  const response = axios
    .put(teamUrl, newMember)
    .then(() => action.history.push("/intro"));
  // console.log(response);
  return {
    ...state,
    teams: {
      ...state.teams,
      [action.userTeam]: {
        ...state.teams[action.userTeam],
        [action.userName]: {
          fullName: [action.firstName] + " " + [action.lastName],
          moods: { [action.time]: [action.mood] },
        },
      },
    },
  };
};

// const addTeamMember = (state, action) => {
//   const newMember = {
//     fullName: [action.firstName] + " " + [action.lastName],
//   };
//   const teamMemberUrl =
//     baseUrl + `/teams/${action.userTeam}/${action.userName}.json`;
//   const response = axios.put(teamMemberUrl, newMember);
//   console.log(response);
//   // console.log(response.data);
//   return {
//     ...state,
//     teams: {
//       ...state.teams,
//       [action.userTeam]: {
//         ...state.teams[action.userTeam],
//         [action.userName]: {
//           fullName: [action.firstName] + " " + [action.lastName],
//         },
//       },
//     },
//   };
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TEAMS:
      return setTeams(state, action);
    // case actionTypes.FETCH_TEAMS:
    //   return fetchTeams(state, action);
    case actionTypes.FETCH_TEAMS_START:
      return fetchTeamsStart(state, action);
    case actionTypes.FETCH_TEAMS_SUCCESS:
      return fetchTeamsSuccess(state, action);
    case actionTypes.FETCH_TEAMS_FAILED:
      return fetchTeamsFailed(state, action);
    case actionTypes.ADD_TEAM_MEMBER:
      return addTeamMember(state, action);
    case actionTypes.RESET_TEAMS:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
