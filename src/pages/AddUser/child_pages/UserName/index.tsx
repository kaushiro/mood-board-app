import React, { useState, useContext } from "react";

import Input from "../../../../components/UI/Input/Input";
import Button from "../../../../components/UI/Button";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import { updateObject, checkValidity } from "../../../../shared/utility";
import { NewUserContext } from "../../../../context/UserContext";
import { isValidUserName, isValidName } from "../../constants";

import { UserDetailsStyled, SubmitButtonWrapperStyled } from "./styles";

interface InputType {
  label: string;
  elementType: string;
  elementConfig: {
    type: string;
    placeholder: string;
  };
  value: string;
  validation: {
    required: boolean;
    isValidName: boolean;
  };
  valid: boolean;
  touched: boolean;
}

interface IFormProps {
  [key: string]: any;
  firstName: InputType;
  lastName: InputType;
  userName: InputType;
}
interface IProps {
  onPrevStep?: () => void;
  onNextStep?: () => void;
}
const UserDetails: React.FC<IProps> = ({ onPrevStep, onNextStep }) => {
  const { setUserData } = useContext(NewUserContext);
  const [userDetailsForm, setUserDetailsForm] = useState<IFormProps>({
    firstName: {
      label: "Please enter your first name",
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "John",
      },
      value: "",
      validation: {
        required: true,
        isValidName: true,
      },
      valid: false,
      touched: false,
    },
    lastName: {
      label: "Please enter your last name",
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Doe",
      },
      value: "",
      validation: {
        required: true,
        isValidName: true,
      },
      valid: false,
      touched: false,
    },
    userName: {
      label: "Please enter a username",
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "johnDoe",
      },
      value: "",
      validation: {
        required: true,
        isValidName: true,
      },
      valid: false,
      touched: false,
    },
  });

  const inputChangedHandler = (
    event: { target: { value: any } },
    controlName: string
  ) => {
    const updatedControls = updateObject(userDetailsForm, {
      [controlName]: updateObject(userDetailsForm[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          controlName === "userName" ? isValidUserName : isValidName
        ),
        touched: true,
      }),
    });
    setUserDetailsForm(updatedControls);
  };

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setUserData((state) => ({
      ...state,
      firstName: userDetailsForm.firstName.value,
      lastName: userDetailsForm.lastName.value,
      userName: userDetailsForm.userName.value,
    }));
    onNextStep();
  };

  const formElementsArray = [];
  for (let key in userDetailsForm) {
    formElementsArray.push({
      id: key,
      config: userDetailsForm[key],
    });
  }

  let form = formElementsArray.map((formElement) => (
    <>
      <label>{formElement.config.label}</label>
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
    </>
  ));
  return (
    <>
      <UserDetailsStyled>{form}</UserDetailsStyled>
      <SubmitButtonWrapperStyled>
        <Button onClick={onPrevStep} btnType="Secondary" text={"Back"} />
        <Button
          onClick={submitHandler}
          btnType="Success"
          text={"Save and Next"}
        />
      </SubmitButtonWrapperStyled>
    </>
  );
};

export default UserDetails;
