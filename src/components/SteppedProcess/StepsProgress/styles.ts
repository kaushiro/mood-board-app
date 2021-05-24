import styled from "styled-components";

export const StepsProgressWrapperStyled = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  @media screen and (max-width: 48rem) {
    flex-direction: column;
  }
`;

export const StepDetailStyled = styled.div`
  display: flex;
  flex: 1;
  flex-basis: auto;
  justify-content: center;
  max-width: 100%;

  @media screen and (max-width: 48rem) {
    flex-direction: column;
  }
`;

export const StepsProgressStepDescription = styled.p`
  margin: 0 auto 2rem;
  text-align: center;
  color: #ffffff;
`;
