import React from 'react';

import { ContainerAvatar } from './styles';
import { IAvatar } from './interface';

export const Avatar: React.FC<IAvatar> = ({ image, username }) => {
  return (
    <ContainerAvatar>
      {image ? (
        <img src={image} alt={username} />
      ) : (
        <p className="normal">{username[0]}</p>
      )}
    </ContainerAvatar>
  );
};
