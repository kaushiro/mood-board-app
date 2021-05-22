import styled from "styled-components";

export const TaskItemStyled = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0px 1rem;
  &:first-of-type {
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }
  a {
    color: white;
    text-decoration: none;
  }

  /* .NavigationItem a {
    color: #8F5C2C;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
}

.NavigationItem a:hover,
.NavigationItem a:active,
.NavigationItem a.active {
    color: #40A4C8;
}

@media (min-width: 500px) {
    .NavigationItem {
        margin: 0;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;
    }
    
    .NavigationItem a {
        color: white;
        height: 100%;
        padding: 16px 10px;
        border-bottom: 4px solid transparent;
    }
    
    .NavigationItem a:hover,
    .NavigationItem a:active,
    .NavigationItem a.active {
        background-color: #8F5C2C;
        border-bottom: 4px solid #40A4C8;
        color: white;
    } */
`;
