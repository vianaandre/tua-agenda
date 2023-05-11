import React from 'react';

import { ContainerAvatar, ContainerAvatarImage } from './styles';
import { IAvatar } from './interface';

export const Avatar: React.FC<IAvatar> = ({ image, username, variant = 'small' }) => {
  return (
    <ContainerAvatar variant={variant} className={`${image ? 'image' : ''} avatar`}>
      {image ? (
        <ContainerAvatarImage imageUrl={image} variant={variant} />
        // <img src={image} alt={username} />
      ) : (
        <p className="normal">
          {username.split(' ')[0][0]}
          {username.split(' ').length > 1 ? username.split(' ')[1][0] : ''}
        </p>
      )}
    </ContainerAvatar>
  );
};
