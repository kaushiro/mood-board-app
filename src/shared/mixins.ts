import { css } from "styled-components";
import { above, below } from "./mediaQuery";
import ceaser from "./ceaser";

const transition = (
  transitionDuriation = 250,
  type = "all",
  transitionEasing = ceaser.easeOutQuad
) => css`
  transition: ${type} ${transitionDuriation}ms ${transitionEasing};
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;
const hex2rgba = (hex = "", alpha = 1) => {
  const colorMatches = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (_m, r, g, b) => `#${r + r + g + g + b + b}`
    )
    .substring(1)
    .match(/.{2}/g);
  if (colorMatches) {
    const [red, green, blue] = colorMatches.map((x) => parseInt(x, 16));
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  } else {
    throw new Error("Invalid hex colour");
  }
};

const textEllipsis = `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default {
  transition,
  hex2rgba,
  above,
  below,
  textEllipsis,
};
