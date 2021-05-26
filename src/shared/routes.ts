export const PARTIALS = {
  ADD: "/add",
  CONFIRM: "/confirm",
  EDIT: "/edit",
  INTRO: "/intro",
  MOOD: "/mood",
  NEW: "/new",
  PROFILE: "/profile",
  TEAM_ID: "/:teamId",
  TEAMS: "/teams",
  USER_DETAILS: "/user_details",
  USERNAME: "/username",
  USER: "/user",
  USER_ID: "/:userId",
};

const AUTHENTICATED_ROUTES = {
  INTRO: PARTIALS.INTRO,
  PROFILE: PARTIALS.PROFILE,
  CHOOSE_TEAM: [PARTIALS.PROFILE, PARTIALS.ADD, PARTIALS.TEAMS].join(""),
  ADD_USERNAME: [PARTIALS.PROFILE, PARTIALS.ADD, PARTIALS.USERNAME].join(""),
  CHOOSE_MOOD: [PARTIALS.PROFILE, PARTIALS.ADD, PARTIALS.MOOD].join(""),
  ADD_DETAILS: [PARTIALS.PROFILE, PARTIALS.USER_DETAILS, PARTIALS.ADD].join(""),
  USER_DETAILS: [PARTIALS.PROFILE, PARTIALS.USER_DETAILS].join(""),
  CONFIRM_DETAILS: [
    PARTIALS.PROFILE,
    PARTIALS.USER_DETAILS,
    PARTIALS.CONFIRM,
  ].join(""),
  TEAM: [PARTIALS.TEAMS, PARTIALS.TEAM_ID].join(""),
  TEAM_NEW: [PARTIALS.TEAMS, PARTIALS.NEW].join(""),
  TEAM_EDIT: [PARTIALS.TEAMS, PARTIALS.TEAM_ID, PARTIALS.EDIT].join(""),
  USER_PROFILE: [
    PARTIALS.TEAMS,
    PARTIALS.TEAM_ID,
    PARTIALS.USER,
    PARTIALS.USER_ID,
  ].join(""),
  NEW_MOOD: [
    PARTIALS.TEAMS,
    PARTIALS.TEAM_ID,
    PARTIALS.USER,
    PARTIALS.USER_ID,
    ,
    PARTIALS.ADD,
    PARTIALS.MOOD,
  ].join(""),
};

const ROUTES = {
  ...AUTHENTICATED_ROUTES,
};

export { AUTHENTICATED_ROUTES, ROUTES };

export default ROUTES;
