import React from 'react';

import { ContainerAvatar } from './styles';
import { IAvatar } from './interface';

export const Avatar: React.FC<IAvatar> = ({ image, username, variant = 'small' }) => {
  return (
    <ContainerAvatar variant={variant}>
      {image ? (
        <img src={image} alt={username} />
      ) : (
        <p className="normal">
          {username.split(' ')[0][0]}
          {username.split(' ').length > 1 ? username.split(' ')[1][0] : ''}
        </p>
      )}
    </ContainerAvatar>
  );
};
