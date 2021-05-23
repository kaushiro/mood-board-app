import React from "react";

import { ListItemStyled } from "./styles";

const ListItem: React.FC = ({ children }) => {
  return (
    <>
      <ListItemStyled>{children}</ListItemStyled>
    </>
  );
};

export default ListItem;
