export const PARTIALS = {
  ADD: "/add",
  CONFIRM: "/confirm",
  EDIT: "/edit",
  INTRO: "/intro",
  MOOD: "/mood",
  NEW: "/new",
  PROFILE: "/profile",
  PROFILE_ID: "/:profileId",
  TEAM_ID: "/:teamId",
  TEAMS: "/teams",
  USER_DETAILS: "/user_details",
  USERNAME: "/username",
  USERS: "/users",
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
};

const ROUTES = {
  ...AUTHENTICATED_ROUTES,
};

export { AUTHENTICATED_ROUTES, ROUTES };

export default ROUTES;
