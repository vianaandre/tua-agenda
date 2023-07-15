import React from 'react';
import { useIntl } from 'react-intl';

import { ContainerDescription, ContainerDescriptionPhotos } from './styles';
import { DescriptionProps } from './interface';

export const Description: React.FC<DescriptionProps> = ({ description, images }) => {
  const { formatMessage } = useIntl();

  return (
    <ContainerDescription>
      <div className="description">
        <h4 className="title">
          {formatMessage({
            id: 'DESCRIPTION',
          })}

        </h4>
        <p className="normal">{description}</p>
      </div>
      {images && images.length > 0 && (
        <div className="photos">
          <ContainerDescriptionPhotos imageUrl={images[0]} />
          {images.length > 1 && (
            <div className="photos_internal">
                {images.splice(1, images.length).map((image) => (
                  <ContainerDescriptionPhotos imageUrl={image} key={image} className="photos_internals" />
                ))}
            </div>
          )}
        </div>
      )}
    </ContainerDescription>
  );
};
