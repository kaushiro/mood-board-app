import styled, { css } from "styled-components";
// import { MediumText } from "matter";
// import mixins from "../../../../shared/mixins";

import { CIRCLE_DIAMETER, STEP_WIDTH, LINE_WIDTH } from "../constants";

import { IProps } from ".";

const activeStyles = () => css`
  ${StepCircleStyled} {
    background-color: #eb0493;
  }
`;

const completedStyles = () => css`
  ${"" /* !important is needed here to make sure any completed styles are not overwritten by active styles */}
  ${StepCircleStyled} {
    background-color: #1fc796 !important;
  }
  ${StepTitleStyled} {
    color: rgba(255, 255, 255, 0.2) !important;
  }
  ${"" /* Make the following step the active one */}
  & + ${StepDetailWrapperStyled} {
    ${activeStyles}
  }
`;

const disabledStyles = () => css`
  ${"" /* !important is needed here to make sure any disabled styles are not overwritten by active styles */}
  ${StepCircleStyled} {
    background-color: rgba(255, 255, 255, 0.2) !important;
    > span,
    svg {
      color: rgba(255, 255, 255, 0.2);
    }
  }
  ${StepTitleStyled} {
    color: rgba(255, 255, 255, 0.2) !important;
  }
`;

const defaultStyles = () => css`
  &:first-of-type {
    ${"" /* If we are the first step, make it active */}
    ${activeStyles}
  }
  ${StepCircleStyled} {
    background-color: rgba(255, 255, 255, 0.2);
  }
  ${StepTitleStyled} {
    color: #ffffff;
  }
`;

const getStyles = (props: any) => {
  switch (true) {
    case props.isDisabled:
      return disabledStyles();
    case props.isCompleted:
      return completedStyles();
    default:
      return defaultStyles();
  }
};

export const StepDetailWrapperStyled = styled.li<
  Pick<IProps, "isCompleted" | "isDisabled">
>`
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "inherit")};
  width: ${STEP_WIDTH}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => props.onClick && "cursor: pointer;"}
  ${getStyles}
  @media screen and (max-width: 80rem) {
    width: ${STEP_WIDTH / 2}px;
  }

  @media screen and (max-width: 48rem) {
    flex-direction: row;
    width: 100%;
    margin-top: 1rem;
  }
`;

export const StepCircleStyled = styled.div<
  Pick<IProps, "isCompleted" | "isDisabled" | "isLastStep">
>`
  height: ${CIRCLE_DIAMETER}px;
  width: ${CIRCLE_DIAMETER}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  > span {
    color: #ffffff;
  }
  margin-right: 1rem;

  @media screen and (min-width: 48rem) {
    margin-right: 0;

    ${(props) =>
      !props.isLastStep &&
      css`
        &::after {
          content: "";
          position: absolute;
          height: 4px;
          background-color: ${props.isCompleted && !props.isDisabled
            ? "#1fc796"
            : "rgba(255, 255, 255, 0.2)"};
          width: ${LINE_WIDTH}px;
          left: ${CIRCLE_DIAMETER}px;
          margin-top: calc(${CIRCLE_DIAMETER}px / 2);
          top: -2px;
          @media screen and (max-width: 80rem) {
            width: ${STEP_WIDTH / 2 - CIRCLE_DIAMETER}px;
          }
        }
      `}
  }
`;

export const StepTitleStyled = styled.p`
  text-align: center;

  @media screen and (min-width: 48rem) {
    padding-top: 0.5rem;
  }
`;

// import styled, { css } from "styled-components";
// // import { MediumText } from "matter";
// import mixins from "../../../../shared/mixins";

// import { CIRCLE_DIAMETER, STEP_WIDTH, LINE_WIDTH } from "../constants";

// import { IProps } from ".";

// const activeStyles = () => css`
//   ${StepCircleStyled} {
//     background-color: #eb0493;
//   }
// `;

// // @ts-expect-error ts-migrate(7024) FIXME: Function implicitly has return type 'any' because ... Remove this comment to see the full error message
// const completedStyles = () => css`
//   ${" /* !important is needed here to make sure any completed styles are not overwritten by active styles */"}

//   ${StepCircleStyled} {
//     background-color: #1fc796 !important;
//   }
//   ${StepTitleStyled} {
//     color: #ffffff !important;
//   }
//   ${"" /* Make the following step the active one */}
//   & + ${StepDetailWrapperStyled} {
//     ${activeStyles}
//   }
// `;

// const disabledStyles = () => css`
//   ${"" /* !important is needed here to make sure any disabled styles are not overwritten by active styles */}
//   ${StepCircleStyled} {
//     background-color: ${mixins.hex2rgba("#21251A", 0.2)} !important;
//     > span,
//     svg {
//       color: ${mixins.hex2rgba("#21251A", 0.2)};
//     }
//   }
//   ${StepTitleStyled} {
//     color: ${mixins.hex2rgba("#21251A", 0.2)} !important;
//   }
// `;

// const defaultStyles = () => css`
//   &:first-of-type {
//     ${"" /* If we are the first step, make it active */}
//     ${activeStyles}
//   }
//   ${StepCircleStyled} {
//     background-color: ${mixins.hex2rgba("#21251A", 0.2)};
//   }
//   ${StepTitleStyled} {
//     color: #21251a;
//   }
// `;

// // @ts-expect-error ts-migrate(7024) FIXME: Function implicitly has return type 'any' because ... Remove this comment to see the full error message
// const getStyles = (props: any) => {
//   switch (true) {
//     case props.isDisabled:
//       return disabledStyles();
//     case props.isCompleted:
//       return completedStyles();
//     default:
//       return defaultStyles();
//   }
// };

// // @ts-expect-error ts-migrate(7022) FIXME: 'StepDetailWrapperStyled' implicitly has type 'any... Remove this comment to see the full error message
// export const StepDetailWrapperStyled = styled.li<
//   Pick<IProps, "isCompleted" | "isDisabled">
// >`
//   cursor: ${(props) => (props.isDisabled ? "not-allowed" : "inherit")};
//   width: ${STEP_WIDTH}px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   ${(props) => props.onClick && "cursor: pointer;"}
//   ${getStyles}
//   @media screen and (max-width: 80rem) {
//     width: ${STEP_WIDTH / 2}px;
//   }

//   @media screen and (max-width: 48rem) {
//     flex-direction: row;
//     width: 100%;
//     margin-top: 1rem;
//   }
// `;
// export const StepCircleStyled = styled.div<
//   Pick<IProps, "isCompleted" | "isDisabled" | "isLastStep">
// >`
//   height: ${CIRCLE_DIAMETER}px;
//   width: ${CIRCLE_DIAMETER}px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   position: relative;
//   z-index: 2;
//   > span {
//     color: #21251a;
//   }
//   margin-right: 1rem;

//   @media screen and (min-width: 48rem) {
//     margin-right: 0;

//     ${(props) =>
//       !props.isLastStep &&
//       css`
//         &::after {
//           content: "";
//           position: absolute;
//           height: 4px;
//           background-color: ${props.isCompleted && !props.isDisabled
//             ? "#1fc796"
//             : mixins.hex2rgba("#21251A", 0.2)};
//           width: ${LINE_WIDTH}px;
//           left: ${CIRCLE_DIAMETER}px;
//           margin-top: calc(${CIRCLE_DIAMETER}px / 2);
//           top: -2px;
//           @media screen and (max-width: 48rem) {
//             width: ${STEP_WIDTH / 2 - CIRCLE_DIAMETER}px;
//           }
//         }
//       `}
//   }
// `;

// export const StepTitleStyled = styled.p`
//   text-align: center;

//   /* // @media screen and (min-width: 40rem) {
//   //   padding-top: 0.5rem;
//   // } */
// `;
