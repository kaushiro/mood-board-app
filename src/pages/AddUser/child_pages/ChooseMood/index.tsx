import React, { useState, useContext, useEffect } from "react";

import Aux from "../../../../hoc/Aux/Aux";
import Button from "../../../../components/UI/Button";
import { NewUserContext } from "../../../../context/UserContext";
import Modal from "../../../../components/UI/Modal ";
import Card from "../../../../components/Card";
import CardHeader from "../../../../components/Card/components/CardHeader";
import CardBody from "../../../../components/Card/components/CardBody";
import {
  ChooseMoodStyled,
  SubmitButtonWrapperStyled,
  ButtonStyled,
} from "./styles";
interface IProps {
  onPrevStep?: () => void;
  onNextStep?: () => void;
}

const moodPoints = [{ 0: "sad" }, { 50: "neutral" }, { 100: "happy" }];

const ChooseMood: React.FC<IProps> = ({ onPrevStep, onNextStep }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeMood, setActiveMood] = useState("");
  const { setUserData } = useContext(NewUserContext);

  const confirmMood = (mood: string) => {
    setActiveMood(mood);
    setModalOpen(true);
  };

  const chooseMood = (userMood: string) => {
    setUserData((state) => ({
      ...state,
      mood: userMood,
    }));
    onNextStep();
  };
  const dateArray = new Date().toString().split(" ");
  const dayOfWeek = () => {
    return dateArray[0];
  };
  const getDate = () => {
    return dateArray[2] + " " + dateArray[1] + " " + dateArray[3];
  };
  return (
    <Aux>
      <ChooseMoodStyled>
        <Card>
          <CardHeader title={dayOfWeek()} description={getDate()} />
          <CardBody title={"how are you feeling today?"} />
          <SubmitButtonWrapperStyled>
            {moodPoints.map((moodItem) => {
              const mood = Object.values(moodItem)[0];
              console.log(Object.values(moodItem)[0]);
              return (
                <ButtonStyled
                  btnType={mood}
                  className={`${mood}Button`}
                  onClick={() => confirmMood(mood)}
                  text={mood}
                />
              );
            })}
          </SubmitButtonWrapperStyled>
          <Modal show={isModalOpen}>
            <p>{`Are you sure you want to select ${activeMood}?`}</p>
            <>
              <Button
                btnType={"Danger"}
                onClick={() => setModalOpen(false)}
                text={"Cancel"}
              />
              <Button
                btnType={"Success"}
                onClick={() => chooseMood(activeMood)}
                text={`Confirm ${activeMood}`}
              />
            </>
          </Modal>
        </Card>
      </ChooseMoodStyled>

      <SubmitButtonWrapperStyled>
        <Button onClick={onPrevStep} btnType="Secondary" text={"Back"} />
        <Button onClick={onNextStep} btnType="Success" text={"Save and Next"} />
      </SubmitButtonWrapperStyled>
    </Aux>
  );
};

export default ChooseMood;
