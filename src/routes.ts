// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
import React from "react";

import Footer from "./components/Footer";
import ROUTES from "./shared/routes";
import UserDetails from "./pages/UserDetails";
import ChooseTeam from "./pages/UserDetails/child_pages/ChooseTeam";
import UserName from "./pages/UserDetails/child_pages/UserName";

const setLayout = (main: any, customUi = {}) => ({
  footer: Footer,
  main,
  ...customUi,
});

// const registrationFromInviteRoute = {
//   path: ROUTES.REGISTER_FROM_INVITE,
//   name: "RegistrationFromInvite",
//   components: setLayout(RegistrationFromInvite, {
//     footer: null,
//     nav: null,
//   }),
// };

const userDetailsRoutes = [
  {
    path: ROUTES.CHOOSE_TEAM,
    name: "Choose user team",
    components: setLayout(ChooseTeam, {
      footer: null,
    }),
  },
  {
    path: ROUTES.ADD_DETAILS,
    name: "Adding user details",
    components: setLayout(UserName, {
      footer: null,
    }),
  },

  {
    path: ROUTES.USER_DETAILS,
    name: "All Onboarding Steps",
    indexRoute: {
      components: setLayout(UserDetails),
    },
  },
];

// const unauthenticatedRoutes = [];
const authenticatedRoutes = [...userDetailsRoutes];
export default [
  // ...unauthenticatedRoutes,
  ...authenticatedRoutes,
  // notFoundRoute,
];
