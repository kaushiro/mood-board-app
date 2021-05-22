import styled from "styled-components";

export const NavigationItemsStyled = styled.ul`
  margin: 0 1rem;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row;
    align-items: center;
    height: 100%;
}

@media screen and (min-width: 500px) {
    .NavigationItems {
        flex-flow: row;
    }
`;
