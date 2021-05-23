export enum BREAKPOINT_KEYS {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  XXL = "xxl",
}

export interface IBreakpointValues {
  [BREAKPOINT_KEYS.XS]: number;
  [BREAKPOINT_KEYS.SM]?: number;
  [BREAKPOINT_KEYS.MD]?: number;
  [BREAKPOINT_KEYS.LG]?: number;
  [BREAKPOINT_KEYS.XL]?: number;
  [BREAKPOINT_KEYS.XXL]?: number;
}

export const BREAKPOINTS: IBreakpointValues = Object.freeze({
  [BREAKPOINT_KEYS.XS]: 20, // 320px - iphone 5>
  [BREAKPOINT_KEYS.SM]: 48, // 768px
  [BREAKPOINT_KEYS.MD]: 80, // 1280px
  [BREAKPOINT_KEYS.LG]: 90, // 1440px
  [BREAKPOINT_KEYS.XL]: 100, // 1600px
  [BREAKPOINT_KEYS.XXL]: 120, // 1920px
});
