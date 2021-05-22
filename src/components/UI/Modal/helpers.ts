export interface IFocusableElements {
  elements: NodeListOf<HTMLElement>;
  firstFocusableEl: HTMLElement;
  lastFocusableEl: HTMLElement;
}

export const getFocusableElements = (
  element: HTMLDivElement
): IFocusableElements => {
  const focusableEls: NodeListOf<HTMLElement> = element.querySelectorAll(`
    a[href]:not([disabled]),
    button:not([disabled]),
    textarea:not([disabled]),
    input:not([disabled]),
    select:not([disabled]),
    [role="button"]:not([disabled])
  `);

  return {
    elements: focusableEls,
    firstFocusableEl: focusableEls[0],
    lastFocusableEl: focusableEls[focusableEls.length - 1],
  };
};
