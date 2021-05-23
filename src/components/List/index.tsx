import React from "react";
import { useDispatch } from "react-redux";
// import classes from './Burger.css';\import Aux from "../../hoc/Aux/Aux";
import Button from "../UI/Button/Button";
import ListItem from "./components/ListItem";
import * as actions from "../../store/actions/index";

// type GenericObject = { [key: string]: any };

// const List: React.FC = ({ children }) => {
//   return (
//     <ul>
//       {children}
//       {/* {Object.keys(list).map((listItem, i) => (
//         <ListItem key={i} objectKey={listItem} objectValue={list[listItem]} />
//       ))} */}
//     </ul>
//   );
// };

// export default List;

type GenericObject = { [key: string]: any };

const List: React.FC<GenericObject> = ({ list }) => {
  return (
    <ul>
      {Object.keys(list).map((listItem, i) => (
        <ListItem key={i} objectKey={listItem} objectValue={list[listItem]} />
      ))}
    </ul>
  );
};

export default List;
