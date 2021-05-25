// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
import React from "react";

import Footer from "./components/Footer";
import ROUTES from "./shared/routes";
import UserDetails from "./pages/AddUser";
import ChooseTeam from "./pages/AddUser/child_pages/ChooseTeam";
import UserName from "./pages/AddUser/child_pages/UserName";
import ChooseMood from "./pages/AddUser/child_pages/ChooseMood";
import Confirmation from "./pages/AddUser/child_pages/Confirmation";

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
      // footer: null,
    }),
  },
  {
    path: ROUTES.ADD_USERNAME,
    name: "Adding user details",
    components: setLayout(UserName, {
      // footer: null,
    }),
  },
  {
    path: ROUTES.CHOOSE_MOOD,
    name: "Adding user mood",
    components: setLayout(ChooseMood, {
      // footer: null,
    }),
  },
  {
    path: ROUTES.CONFIRM_DETAILS,
    name: "Confirm User Details",
    components: setLayout(Confirmation, {
      // footer: null,
    }),
  },
  {
    path: ROUTES.USER_DETAILS,
    name: "All UserDetails",
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
