import React from 'react';

import AboutCompanyPhotoOne from 'common/assets/company/about-company-photo-one.png';
import { ContainerDescription, ContainerDescriptionPhotos } from './styles';
import { DescriptionProps } from './interface';

export const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <ContainerDescription>
      <div className="description">
        <h4 className="title">Descrição</h4>
        <p className="normal">{description}</p>
      </div>
      <div className="photos">
        <ContainerDescriptionPhotos imageUrl={AboutCompanyPhotoOne.src} />
        <div className="photos_internal">
          <ContainerDescriptionPhotos imageUrl={AboutCompanyPhotoOne.src} className="photos_internals" />
          <ContainerDescriptionPhotos imageUrl={AboutCompanyPhotoOne.src} className="photos_internals" />
          <ContainerDescriptionPhotos imageUrl={AboutCompanyPhotoOne.src} className="photos_internals" />
        </div>
      </div>
    </ContainerDescription>
  );
};
