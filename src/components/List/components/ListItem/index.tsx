import React from "react";
import Button from "../../../UI/Button/Button";

import { TaskItemStyled } from "./styles";
interface IProps {
  label?: string;
  labelValue?: string | null;
}

const TaskItem: React.FC<IProps> = ({ label, labelValue }) => {
  return (
    <>
      <TaskItemStyled>
        <div>{`${label}: ${labelValue}`}</div>
      </TaskItemStyled>
    </>
  );
};

export default TaskItem;
