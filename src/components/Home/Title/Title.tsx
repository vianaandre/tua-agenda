import React from 'react';

import { ContainerTitle } from './styles';
import { ITitle } from './interface';

export const Title: React.FC<ITitle> = ({ emphasis, title }) => {
  return (
    <ContainerTitle className="title">
      {title}
      {emphasis && <strong>{` ${emphasis}`}</strong>}
    </ContainerTitle>
  );
};
