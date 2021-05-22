import React from "react";
// @ts-ignore
import { times } from "lodash/times";

import { TextLoaderStyled, LineStyled } from "./styles";

export interface ITextLoaderProps {
  lines?: number;
  isHeading?: boolean;
  dark?: boolean;
  darker?: boolean;
  invert?: boolean;
  center?: boolean;
  noMargin?: boolean;
  className?: string;
}
class TextLoader extends React.Component<ITextLoaderProps> {
  render() {
    const {
      lines = 2,
      isHeading = false,
      dark = false,
      darker = false,
      invert = false,
      center = false,
      noMargin = false,
      className,
    } = this.props;
    return (
      <TextLoaderStyled
        className={className || "textLoader"}
        isHeading={isHeading}
        noMargin={noMargin}
      >
        {times(lines, (i: any) => (
          <LineStyled
            className="line"
            key={i}
            short={(isHeading && i === 0) || (!isHeading && i === lines - 1)}
            dark={dark}
            darker={darker}
            invert={invert}
            center={center}
            noMargin={noMargin && i === lines - 1}
          />
        ))}
      </TextLoaderStyled>
    );
  }
}

export default TextLoader;
