import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  teams: {
    red_team: {
      kim: {
        fullName: "kim U",
        moods: {
          "01": "happy",
          "02": "happy",
        },
      },
      matt: {
        fullName: "Matt Williams",
        moods: {
          "01": "happy",
          "02": "sad",
          "03": "sad",
          "04": "undefined",
        },
      },
    },
    blue_team: {
      leo: {
        fullName: "Leo Williams",
        moods: {
          "01": "happy",
          "02": "happy",
          "03": "sad",
          "04": "undefined",
        },
      },
      steve: {
        fullName: "Steve Williams",
        moods: {
          "01": "happy",
          "02": "happy",
          "03": "sad",
          "04": "undefined",
          "05": "sad",
          "06": "undefined",
        },
      },
    },
  },
  loading: false,
  error: null,
};

const setTeams = (state, action) => {
  console.log(action);
  return updateObject(state, {
    teams: action.teams,
  });
};

const fetchTeamsStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const fetchTeamsSuccess = (state, action) => {
  return updateObject(state, {
    teams: action.teams,
    loading: false,
  });
};

const fetchTeamsFailed = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};

const addTeamMember = (state, action) => {
  return {
    ...state,
    teams: {
      ...state.teams,
      [action.userTeam]: {
        ...state.teams[action.userTeam],
        [action.userName]: {
          fullName: [action.firstName] + " " + [action.lastName],
        },
      },
    },
  };
  // console.log(updatedTeams);
  // return updateObject(state, {
  //   teams: updatedTeams,
  // });
};

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
    case actionTypes.RESET_TEAMS:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
