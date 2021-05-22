import React, { useState, useContext } from "react";
// import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import Input from "../../../../components/UI/Input/Input";
import Button from "../../../../components/UI/Button/Button";
import List from "../../../../components/List";
import { updateObject, checkValidity } from "../../../../shared/utility";
import { NewUserContext } from "../../../../context/UserContext";
import * as actions from "../../../../store/actions/index";

import { ConfirmationStyled, SubmitButtonWrapperStyled } from "./styles";
interface IProps {
  status?: string | null;
  disableBack?: boolean | undefined;
  disableNext?: boolean | undefined;
  isDisabled?: boolean | null;
  onPrevStep?: () => void;
  onNextStep?: () => void;
}
const Confirmation: React.FC<IProps> = ({ onPrevStep }) => {
  const { userData } = useContext(NewUserContext);
  const dispatch = useDispatch();

  // console.log(userData);

  const submitHandler = (userData) => {
    // events.preventDefault();
    dispatch(
      actions.addTeamMember(
        userData.userTeam,
        userData.userName,
        userData.firstName,
        userData.lastName
      )
    );
    // props.onAuth(
    //   userDetailsForm.email.value,
    //   userDetailsForm.password.value,
    //   isSignup
    // );
  };

  return (
    <>
      <ConfirmationStyled>
        <List list={userData} />
      </ConfirmationStyled>

      <SubmitButtonWrapperStyled>
        <Button clicked={onPrevStep} btnType="Secondary">
          Back
        </Button>
        <Button clicked={() => submitHandler(userData)} btnType="Success">
          Confirm
        </Button>
      </SubmitButtonWrapperStyled>
    </>
  );
};

export default Confirmation;
