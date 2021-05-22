import styled from "styled-components";

export const StepsProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 2rem;
`;

export const XLargeTextStyled = styled.p`
  min-width: 13rem;
  color: #ffffff;

  @media screen and (max-width: 80rem) {
    margin: 1rem auto 2rem;
  }

  @media screen and (max-width: 48rem) {
    margin-bottom: 0.5rem;
  }
`;
