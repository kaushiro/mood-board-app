import { css, ThemedCssFunction, DefaultTheme } from "styled-components";

import { BREAKPOINTS } from "./breakpoints";

type TBreakpointKey = keyof typeof BREAKPOINTS;

type TMediaHelpers = Record<TBreakpointKey, ThemedCssFunction<DefaultTheme>>;

const BreakpointKeys = Object.keys(BREAKPOINTS) as TBreakpointKey[];

function createAboveQueries(): TMediaHelpers {
  return BreakpointKeys.reduce((acc, key) => {
    acc[key] = (template: any, ...args: any) => css`
      @media (min-width: ${BREAKPOINTS[key]}rem) {
        ${css(template, ...args)};
      }
    `;
    return acc;
  }, {} as TMediaHelpers);
}
export const above = createAboveQueries();

function createBelowQueries(): TMediaHelpers {
  return BreakpointKeys.reduce((acc, key) => {
    acc[key] = (template: any, ...args: any) => css`
      @media (max-width: ${BREAKPOINTS[key]}rem) {
        ${css(template, ...args)};
      }
    `;
    return acc;
  }, {} as TMediaHelpers);
}
export const below = createBelowQueries();

// Sample usage
//   ${mixins.below.sm`
//     padding: ${({ theme }) => `${theme.spacing.small}`};
//   `}
//   ${mixins.above.md`
//     padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.large}`};
//  `}
