import React from "react";

import ListItem from "./components/ListItem";

type GenericObject = { [key: string]: any };

const List: React.FC<GenericObject> = ({ list }) => (
  <ul>
    {list.map((listItem, i) => (
      <ListItem key={i}>{listItem}</ListItem>
    ))}
  </ul>
);

export default List;
