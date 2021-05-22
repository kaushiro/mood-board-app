import styled from "styled-components";

export const DrawerToggleContainerStyled = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  color: black;

  div {
    width: 90%;
    height: 3px;
    background-color: white;
  }

  @media screen and (min-width: 500px) {
    display: none;
  }
`;
