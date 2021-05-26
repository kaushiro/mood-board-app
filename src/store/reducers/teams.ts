import axios from "axios";

import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";
const baseUrl =
  "https://mood-board-db-default-rtdb.europe-west1.firebasedatabase.app";

const initialState = {
  teams: {},
  loading: false,
  error: null,
};

const setTeams = (state, action) => {
  console.log(action);
  return updateObject(state, {
    teams: [
      { red_team: action.teams[0].red_team },
      { blue_team: action.teams[1].blue_team },
    ],
  });
};

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
    userName: action.userName,
    fullName: [action.firstName] + " " + [action.lastName],
    moods: [{ mood: action.mood, time: action.time }],
  };
  const teamUrl =
    baseUrl +
    `/teams/${action.teamIndex}/${action.userTeam}/${action.userIndex}.json`;
  axios.put(teamUrl, newMember).then(() => action.history.push("/intro"));
  return {
    ...state,
    teams: {
      [action.teamIndex]: {
        ...state.teams[action.teamIndex],
        [action.userTeam]: {
          ...state.teams[action.userTeam],
          userName: action.userName,
          fullName: [action.firstName] + " " + [action.lastName],
          moods: [{ mood: action.mood, time: action.time }],
        },
      },
    },
  };
};

const addMood = (state, action) => {
  const newMood = { mood: action.mood, time: action.time };

  const memberMoodsUrl =
    baseUrl +
    `/teams/${action.teamIndex}/${action.userTeam}/${action.userIndex}/moods/${action.nextMoodIndex}.json`;
  console.log(memberMoodsUrl);
  axios
    .patch(memberMoodsUrl, newMood)
    .then(() => action.history.push(`/teams/${action.userTeam}`));
  return {
    ...state,
    moods: { mood: action.mood, time: action.time },
  };
};

// const addMood = async (state, action) => {
//   const newMood = { mood: action.mood, time: action.time };

//   const memberMoodsUrl =
//     baseUrl +
//     `/teams/${action.teamIndex}/${action.userTeam}/${action.userIndex}/moods/${action.nextMoodIndex}.json`;
//   console.log(memberMoodsUrl);
//   await axios
//     .patch(memberMoodsUrl, newMood)
//     .then(() => action.history.push(`/teams/${action.userTeam}`));
//   return {
//     ...state,
//     moods: { mood: action.mood, time: action.time },
//   };
// };
// const addMoodSuccess = (state, action) => {
//   return updateObject(state, {
//     loading: false,
//     error: null,
//   });
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TEAMS:
      return setTeams(state, action);
    case actionTypes.FETCH_TEAMS_START:
      return fetchTeamsStart(state, action);
    case actionTypes.FETCH_TEAMS_SUCCESS:
      return fetchTeamsSuccess(state, action);
    case actionTypes.FETCH_TEAMS_FAILED:
      return fetchTeamsFailed(state, action);
    case actionTypes.ADD_TEAM_MEMBER:
      return addTeamMember(state, action);
    case actionTypes.ADD_MOOD:
      return addMood(state, action);
    // case actionTypes.ADD_MOOD_SUCCESS:
    //   return addMoodSuccess(state, action);
    case actionTypes.RESET_TEAMS:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
