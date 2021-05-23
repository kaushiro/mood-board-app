import * as actionTypes from "./actionTypes";

export const setTeams = (teams) => {
  return {
    type: actionTypes.SET_TEAMS,
    teams: teams,
  };
};

export const fetchTeamsSuccess = (teams) => {
  return {
    type: actionTypes.FETCH_TEAMS_SUCCESS,
    teams: teams,
  };
};

export const fetchTeamsFailed = (error) => {
  return {
    type: actionTypes.FETCH_TEAMS_FAILED,
    error: error,
  };
};

export const fetchTeamsStart = () => {
  return {
    type: actionTypes.FETCH_TEAMS_START,
  };
};

export const fetchTeams = () => {
  return {
    type: actionTypes.FETCH_TEAMS,
  };
};
export const resetTeams = () => {
  return {
    type: actionTypes.RESET_TEAMS,
  };
};

export const addTeamMember = (userTeam, userName, firstName, lastName) => {
  return {
    type: actionTypes.ADD_TEAM_MEMBER,
    userTeam: userTeam,
    userName: userName,
    firstName: firstName,
    lastName: lastName,
  };
};
