import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Input from "../../../../components/UI/Input/Input";
import Button from "../../../../components/UI/Button";
import List from "../../../../components/List";
import { updateObject, checkValidity } from "../../../../shared/utility";
import { NewUserContext } from "../../../../context/UserContext";
import * as actions from "../../../../store/actions/index";
import { ROUTES } from "../../../../shared/routes";

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
  const { userData, setUserData } = useContext(NewUserContext);
  const userDataList = Object.entries(userData).map((entry) => {
    return String(entry[0] + ": " + entry[1]);
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const getTime = () => {
    var dateArray = new Date().toString().split(" ");
    return (
      dateArray[0] +
      " " +
      dateArray[2] +
      " " +
      dateArray[1] +
      " " +
      dateArray[3]
    );
  };
  // const options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };
  // const customDate = new Date().toLocaleTimeString("en-us", options);
  const submitHandler = (userData) => {
    dispatch(
      actions.addTeamMember(
        userData.teamIndex,
        userData.userTeam,
        userData.userIndex,
        userData.userName,
        userData.firstName,
        userData.lastName,
        userData.mood,
        getTime(),
        history
      )
    );
    userData.isFirstTimeUser &&
      setUserData((state) => ({
        ...state,
        isFirstTimeUser: false,
      }));
  };

  return (
    <>
      <ConfirmationStyled>
        <List list={userDataList} />
      </ConfirmationStyled>

      <SubmitButtonWrapperStyled>
        <Button onClick={onPrevStep} btnType="Secondary" text={"Back"} />
        <Button
          onClick={() => submitHandler(userData)}
          btnType="Success"
          text={"Confirm"}
        />
      </SubmitButtonWrapperStyled>
    </>
  );
};

export default Confirmation;
