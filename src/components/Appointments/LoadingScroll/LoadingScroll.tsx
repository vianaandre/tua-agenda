import React from 'react';

import { ContainerLoadingScroll } from './styles';

export const LoadingScroll: React.FC = () => {
  return (
    <ContainerLoadingScroll>
      <div className="spinner">
        <div className="dot1" />
        <div className="dot2" />
        <div className="dot3" />
      </div>
    </ContainerLoadingScroll>
  );
};
