import React, { useState, Dispatch, SetStateAction } from "react";

import { HeaderStyled, ContainerStyled, ContentWrapperStyled } from "./styles";
import HeaderSkeleton from "./components/HeaderSkeleton";

interface IHeaderContext {
  hasBackLink: boolean;
  setHasBackLink: Dispatch<SetStateAction<boolean>>;
}
export const HeaderContext = React.createContext<IHeaderContext>({
  hasBackLink: false,
  setHasBackLink: () => {},
});

interface IProps {
  qaid?: string;
  isLoading?: boolean;
  className?: string;
}

const Header: React.FC<IProps> = ({
  qaid,
  children,
  isLoading = false,
  className,
}) => {
  const [hasBackLink, setHasBackLink] = useState(false);

  if (isLoading) {
    return <HeaderSkeleton />;
  }

  return (
    <HeaderContext.Provider value={{ hasBackLink, setHasBackLink }}>
      <HeaderStyled className={className} data-qaid={`${qaid}-header`}>
        <ContentWrapperStyled hasBackLink={hasBackLink} data-qaid={qaid}>
          <ContainerStyled>{children}</ContainerStyled>
        </ContentWrapperStyled>
      </HeaderStyled>
    </HeaderContext.Provider>
  );
};

export default Header;
