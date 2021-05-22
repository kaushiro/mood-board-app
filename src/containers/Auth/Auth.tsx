import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";

// import companyLogo from "../../assets/images/logo-primary.svg";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
// import classes from "./Auth.css";
import * as actions from "../../store/actions/index";
import { updateObject, checkValidity } from "../../shared/utility";
import {
  AuthContainerStyled,
  AuthLogoStyled,
  SubmitButtonContainerStyled,
} from "./styles";

export type IFormValue = string | number | boolean;
interface IFormFactoryProps {
  [key: string]: any;
  email: {
    elementType: string;
    elementConfig: {
      type: string;
      placeholder: string;
    };
    value: string;
    validation: {
      required: boolean;
      isEmail: boolean;
    };
    valid: boolean;
    touched: boolean;
  };
  password: {
    elementType: string;
    elementConfig: {
      type: string;
      placeholder: string;
    };
    value: string;
    validation: {
      required: boolean;
      minLength: number;
    };
    valid: boolean;
    touched: boolean;
  };
}

const Auth = (props: {
  onAuth?: any;
  loading?: any;
  error?: any;
  isAuthenticated?: any;
  authRedirectPath: any;
  onSetAuthRedirectPath?: any;
}) => {
  const [authForm, setAuthForm] = useState<IFormFactoryProps>({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Mail Address",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      value: "",
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
  });
  const history = useHistory();
  const [isSignup, setSignUp] = useState(false);
  const { authRedirectPath, onSetAuthRedirectPath } = props;
  useEffect(() => {
    authRedirectPath !== "/" && onSetAuthRedirectPath();
  }, [authRedirectPath, onSetAuthRedirectPath]);

  const inputChangedHandler = (
    event: { target: { value: any } },
    controlName: string
  ) => {
    const updatedControls = updateObject(authForm, {
      [controlName]: updateObject(authForm[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          authForm[controlName].validation
        ),
        touched: true,
      }),
    });
    setAuthForm(updatedControls);
  };

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    props.onAuth(authForm.email.value, authForm.password.value, isSignup);
  };

  const switchAuthModeHandler = () => {
    setSignUp(!isSignup);
  };

  const formElementsArray = [];
  for (let key in authForm) {
    formElementsArray.push({
      id: key,
      config: authForm[key],
    });
  }

  let form = formElementsArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event: any) => inputChangedHandler(event, formElement.id)}
    />
  ));

  // if (props.loading) {
  //   form = <Spinner />;
  // }

  let errorMessage = null;

  if (props.error) {
    errorMessage = <p>{props.error.message}</p>;
  }

  let authRedirect = null;
  if (props.isAuthenticated) {
    // authRedirectPath("/intro");
    authRedirect = <Redirect to="/intro" />;
    // authRedirect = <Redirect to={"/burger"} />;
  }
  console.log(props.onAuth);
  return (
    <AuthContainerStyled>
      {authRedirect}
      {errorMessage}
      <AuthLogoStyled>
        {/* <img src={companyLogo} alt="companyLogo" /> */}
      </AuthLogoStyled>
      <form onSubmit={submitHandler}>
        {props.loading ? <Spinner /> : form}
        <SubmitButtonContainerStyled>
          <Button btnType="Success" className="loginButton">
            LOGIN
          </Button>
        </SubmitButtonContainerStyled>
      </form>
      <Button clicked={switchAuthModeHandler} btnType="Danger">
        {!isSignup && "Sign up now"}
      </Button>
    </AuthContainerStyled>
  );
};

const mapStateToProps = (state: {
  auth: { loading: any; error: any; token: null; authRedirectPath: any };
}) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (
  dispatch: (arg0: {
    type: string;
    email?: any;
    password?: any;
    isSignup?: any;
    path?: any;
  }) => any
) => {
  return {
    onAuth: (email: any, password: any, isSignup: any) =>
      dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
