webpackHotUpdate("main",{

/***/ "./src/store/reducers/teams.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/teams.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/store/actions/actionTypes.ts");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utility */ "./src/shared/utility.ts");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




const baseUrl = "https://mood-board-db-default-rtdb.europe-west1.firebasedatabase.app"; // const initialState = {
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
  error: null
};

const setTeams = (state, action) => {
  console.log(action);
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_2__["updateObject"])(state, {
    teams: [{
      blue_team: action.teams[0].red_team
    }, {
      red_team: action.teams[1].blue_team
    }]
  });
};

const fetchTeamsStart = (state, action) => {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_2__["updateObject"])(state, {
    error: null,
    loading: true
  });
};

const fetchTeamsSuccess = (state, action) => {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_2__["updateObject"])(state, {
    loading: false,
    error: null
  });
};

const fetchTeamsFailed = (state, action) => {
  return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_2__["updateObject"])(state, {
    loading: false,
    error: action.error
  });
};

const addTeamMember = (state, action) => {
  console.log(action);
  const newMember = {
    fullName: [action.firstName] + " " + [action.lastName],
    moods: {
      [action.time]: [action.mood]
    }
  };
  const teamUrl = baseUrl + `/teams/${action.userTeam}/${action.userName}.json`;
  const response = axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(teamUrl, newMember).then(() => action.history.push("/intro")); // console.log(response);

  return { ...state,
    teams: { ...state.teams,
      [action.userTeam]: { ...state.teams[action.userTeam],
        [action.userName]: {
          fullName: [action.firstName] + " " + [action.lastName],
          moods: {
            [action.time]: [action.mood]
          }
        }
      }
    }
  };
};

const addMood = (state, action) => {
  console.log(action);
  const newMood = {
    [action.time]: [action.mood]
  };
  const memberMoodsUrl = baseUrl + `/teams/${action.userTeam}/${action.userName}/moods/${[action.time]}.json`;
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(memberMoodsUrl, action.mood).then(res => action.history.push(`/teams/${action.userTeam}/${action.userName}`)); // .then(() => action.history.push("/intro"));
  // console.log(response);

  return { ...state,
    teams: { ...state.teams,
      [action.userTeam]: { ...state.teams[action.userTeam],
        [action.userName]: { ...state.teams[action.userTeam][action.userName],
          moods: { ...state.teams[action.userTeam][action.userName].moods,
            [action.time]: [action.mood]
          }
        }
      }
    }
  };
}; // const addTeamMember = (state, action) => {
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
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_TEAMS"]:
      return setTeams(state, action);
    // case actionTypes.FETCH_TEAMS:
    //   return fetchTeams(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_TEAMS_START"]:
      return fetchTeamsStart(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_TEAMS_SUCCESS"]:
      return fetchTeamsSuccess(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_TEAMS_FAILED"]:
      return fetchTeamsFailed(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_TEAM_MEMBER"]:
      return addTeamMember(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_MOOD"]:
      return addMood(state, action);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["RESET_TEAMS"]:
      return initialState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.8d883c9dc8d2b9a961c6.hot-update.js.map