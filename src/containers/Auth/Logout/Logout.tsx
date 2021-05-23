import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as actions from "../../../store/actions/index";

const Logout = () => {
  const dispatch = useDispatch();
  // const { onLogout } = props;
  useEffect(() => {
    dispatch(actions.logout());
    // onLogout();
  });
  return <Redirect to="/" />;
};

// const mapDispatchToProps = (dispatch: (arg0: { type: string }) => any) => {
//   return {
//     onLogout: () => dispatch(actions.logout()),
//   };
// };

export default Logout;
