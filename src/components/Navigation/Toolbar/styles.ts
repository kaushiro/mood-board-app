import styled from "styled-components";

export const ToolbarHeaderStyled = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(27, 30, 74);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;
export const ToolbarLogoStyled = styled.div`
  height: 80%;
`;
export const ToolbarNavStyled = styled.nav`
  @media screen and(max-width: 499px) {
    display: none;
  }
`;
