import styled, { css } from "styled-components";

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
export type IColorStop = [string, number];

const isColorStop = (item: string | IColorStop): item is IColorStop =>
  typeof item !== "string";

export const makeGradientCSSValue = (
  colors: (string | IColorStop)[],
  angle = 180
): string => {
  const steps = colors.reduce(
    (result: string, color: string | IColorStop, index: number) => {
      const colorValue = isColorStop(color)
        ? `${color[0]} ${color[1]}%`
        : `${color}`;
      const leadingComma = index === 0 ? "" : ",";

      return `${result}${leadingComma} ${colorValue}`;
    },
    ""
  );

  return `linear-gradient(${angle}deg, ${steps})`;
};
export const HeaderStyled = styled.header`
  background: ${makeGradientCSSValue(["#042d53", "#620f45"], 90)};
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
`;

interface IContentWrapperStyledProps {
  hasBackLink?: boolean;
}
export const ContentWrapperStyled = styled.div<IContentWrapperStyledProps>`
  display: block;
  width: 100%;

  ${({ hasBackLink }) => {
    if (hasBackLink)
      return css`
        padding: 2rem;
      `;
    return;
  }}
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;
export const ReportProblemLinkStyled = styled.span`
  cursor: pointer;
  padding: 0.5rem;
`;
export const HeaderTextWrapperStyled = styled.div`
  display: block;
  width: 50%;
  ${ReportProblemLinkStyled}, a {
    color: #ffffff;
  }

  @media screen and(max-width: 80rem) {
    width: 100%;
  }
`;
