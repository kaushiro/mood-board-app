import styled from "styled-components";

export const HeaderSkeletonStyled = styled.header`
  min-height: 160px;
  background-color: ${({ theme }) => theme.palette.skeletonBackgroundDark};
  display: flex;
  align-items: center;
`;
