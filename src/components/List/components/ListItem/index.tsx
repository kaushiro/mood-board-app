import React from "react";
import Button from "../../../UI/Button/Button";

import { ListItemStyled } from "./styles";
interface IProps {
  objectKey?: string;
  objectValue?: string | any | null;
}

const ListItem: React.FC<IProps> = ({ objectKey, objectValue }) => {
  // let stringifiedValue =
  //   objectValue !== String ? JSON.stringify(objectValue) : objectValue;
  //  typeof objectValue == Object && objectValue = JSON.stringify(objectValue);
  const displayContent = objectValue
    ? `${objectKey}: ${objectValue}`
    : `${objectKey}`;
  return (
    <>
      <ListItemStyled>{displayContent}</ListItemStyled>
    </>
  );
};

export default ListItem;
