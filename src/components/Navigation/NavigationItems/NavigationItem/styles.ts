import styled, { css } from "styled-components";

export const NavListItemStyled = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0px 1rem;
  &:last-of-type {
    border-left: 1px solid rgba(255, 255, 255, 0.2);
  }
  a {
    color: white;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
  }
  a:hover,
  a:active,
  a.active {
    color: #40a4c8;
  }
`;
