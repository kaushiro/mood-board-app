import * as actionTypes from "./actionTypes";

export const setTeams = (teams) => {
  return {
    type: actionTypes.SET_TEAMS,
    teams: teams,
  };
};

export const fetchTeamsSuccess = () => {
  return {
    type: actionTypes.FETCH_TEAMS_SUCCESS,
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

export const addTeamMember = (
  teamIndex,
  userTeam,
  userIndex,
  userName,
  firstName,
  lastName,
  mood,
  time,
  history
) => {
  return {
    type: actionTypes.ADD_TEAM_MEMBER,
    teamIndex: teamIndex,
    userTeam: userTeam,
    userIndex: userIndex,
    userName: userName,
    firstName: firstName,
    lastName: lastName,
    mood: mood,
    time: time,
    history: history,
  };
};

export const addMood = (
  teamIndex,
  userTeam,
  userIndex,
  userName,
  nextMoodIndex,
  mood,
  time,
  history
) => {
  return {
    type: actionTypes.ADD_MOOD,
    teamIndex: teamIndex,
    userTeam: userTeam,
    userIndex: userIndex,
    userName: userName,
    mood: mood,
    nextMoodIndex: nextMoodIndex,
    time: time,
    history: history,
  };
};
