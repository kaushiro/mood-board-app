import React, { useEffect, Suspense } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";

import Auth from "./containers/Auth/Auth";

import BoardIntro from "./containers/BoardIntro";
import UserDetails from "./pages/AddUser";
import ChooseMood from "./pages/AddUser/child_pages/ChooseMood";
import UserProfile from "./pages/UserProfile";
import TeamProfile from "./pages/TeamProfile";
import NewMood from "./pages/NewMood";
import Logout from "./containers/Auth/Logout/Logout";
import * as actions from "./store/actions/index";
import ROUTES from "./shared/routes";

// const Checkout = React.lazy(() => {
//   return import("./containers/Checkout/Checkout");
// });

// const Orders = React.lazy(() => {
//   return import("./containers/Orders/Orders");
// });

// const Auth = React.lazy(() => {
//   return import("./containers/Auth/Auth");
// });
interface IProps {
  onTryAutoSignup: any;
  isAuthenticated: boolean;
}
const App: React.FC<IProps> = (props) => {
  const { onTryAutoSignup } = props;
  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/auth" render={(props) => <Auth {...props} />} />
      <Route path="/" render={(props) => <Auth {...props} />} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route
          path="/teams/:teamName/user/:userName/add/mood"
          component={NewMood}
        />
        <Route path="/teams/:teamName/user/:userName" component={UserProfile} />
        <Route path="/teams/:teamName" component={TeamProfile} />
        <Route path="/logout" component={Logout} />
        <Route path="/intro" component={BoardIntro} />
        <Route path="/choose_mood" component={ChooseMood} />
        <Route path="/profile" component={UserDetails} />
        <Route path="/auth" render={(props) => <Auth {...props} />} />
        <Route path="/" exact render={(props) => <Auth {...props} />} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div>
      <Layout>
        {/* {routes} */}
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
