import React from "react";

import TextLoader from "../../../../../UI/TextLoader";

import { HeaderSkeletonStyled } from "./styles";

const HeaderSkeleton: React.FC = () => {
  return (
    <HeaderSkeletonStyled data-qaid="header-skeleton">
      <div data-qaid="header-skeleton">
        <div>
          <TextLoader lines={2} dark />
        </div>
      </div>
    </HeaderSkeletonStyled>
  );
};

export default HeaderSkeleton;
