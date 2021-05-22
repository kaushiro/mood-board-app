import React from "react";

import { ContentWrapperStyled } from "./styles";

export interface IContentWrapperProps {
  qaid?: string;
  className?: string;
}

const ContentWrapper: React.FC<IContentWrapperProps> = ({
  qaid,
  children,
  className,
}) => (
  <ContentWrapperStyled
    className={className}
    data-qaid={qaid && `wrapper-${qaid}`}
  >
    {children}
  </ContentWrapperStyled>
);
export default ContentWrapper;
export { ContentWrapperStyled };
