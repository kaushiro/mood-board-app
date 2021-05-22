import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  teams: [],
  loading: false,
  error: null,
};
const initialMemberState = {
  team: null,
  userName: null,
  firstName: null,
  lastName: null,
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
    list: action.teams,
    loading: false,
  });
};

const fetchTeamsFailed = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};
const addTeamMember = (state, action) => {
  const updatedTeams = {
    ...state,
    teams: {
      ...state.teams,
      [action.userTeam]: {
        ...state.teams[action.userTeam],
        [action.userName]: {
          fullName: [action.firstName] + " " + [action.lastName],
        },
        // [action.userName]: {
        //   ...state.teams[action.userTeam][action.userName],
        // },
      },
    },
  };
  console.log(updatedTeams);
  // const updatedTeams = updateObject(state.teams, updatedTeam);
  // const updatedState = {
  //   teams: updatedTeam,
  // };
  return updateObject(state, {
    teams: updatedTeams,
  });
};

// const addIngredient = (state, action) => {
//   const updatedIngredient = {
//     [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
//   };
//   const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
//   const updatedState = {
//     ingredients: updatedIngredients,
//     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
//     building: true,
//   };
//   return updateObject(state, updatedState);
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
    default:
      return state;
  }
};

export default reducer;
