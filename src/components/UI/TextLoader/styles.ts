import styled, { css } from "styled-components";

import { ITextLoaderProps } from ".";

export const TextLoaderStyled = styled.div<ITextLoaderProps>`
  margin-bottom: ${(props) => (props.noMargin ? "0" : "2rem")};

  ${(props) =>
    props.isHeading &&
    css`
      margin-right: 40%;
      ${LineStyled} {
        height: 0.7rem;
      }
    `};
`;

export const LineStyled = styled.div<ITextLoaderProps & { short?: boolean }>`
  height: 0.5rem;
  ${(props) =>
    !props.noMargin &&
    css`
      margin-bottom: 0.5rem;
    `}

  ${(props) =>
    props.short &&
    css`
      width: 80%;
    `}
`;
/* ${props => */
/* props.center &&
    css`
      margin-right: auto;
      margin-left: auto;
    `} */

/* ${props => {
    if (props.dark) {
      return mixins.shimmer(
        props.theme.palette.skeletonGradientColorsDark[0],
        props.theme.palette.skeletonGradientColorsDark[1]
      );
    } else if (props.darker) {
      return mixins.shimmer(
        props.theme.palette.skeletonGradientColorsDarker[0],
        props.theme.palette.skeletonGradientColorsDarker[1]
      );
    } else if (props.invert) {
      return mixins.shimmer(
        props.theme.palette.skeletonGradientColorsInvert[0],
        props.theme.palette.skeletonGradientColorsInvert[1]
      );
    }

    return mixins.shimmer(
      props.theme.palette.skeletonGradientColors[0],
      props.theme.palette.skeletonGradientColors[1]
    ); */
/* }}; */
