import styled from "styled-components";
import Card from "../../components/Card";

export const MainContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export const TeamHeaderStyled = styled.h3`
  text-align: center;
`;

export const CardWrapperStyled = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
`;
export const ButtonWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
`;
