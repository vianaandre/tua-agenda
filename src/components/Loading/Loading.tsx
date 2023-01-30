import React from 'react';

import LoadingGIF from 'common/assets/loading.gif';
import { ContainerLoading } from './styles';
import { LoadingProps } from './interface';

export const Loading: React.FC<LoadingProps> = ({ open }) => {
  return (
    <ContainerLoading className={open ? 'active' : ''}>
      <img src={LoadingGIF.src} alt="Carregando..." />
    </ContainerLoading>
  );
};
