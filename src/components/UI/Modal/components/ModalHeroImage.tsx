import React from "react";

import { ModalHeroImageStyled } from "../styles";

export interface IModalHeroImageProps {
  image?: string;
  imageAlt?: string;
}

const ModalHeroImage: React.FC<IModalHeroImageProps> = ({
  image,
  imageAlt,
}) => {
  return (
    <ModalHeroImageStyled>
      <img src={image} alt={imageAlt} data-qaid="modal-hero" height={200} />
    </ModalHeroImageStyled>
  );
};

export default ModalHeroImage;
