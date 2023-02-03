import React from 'react';

import { Container } from 'common/styles/container';
import { ContainerHeader } from './styles';
import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

export const Header: React.FC = () => {
  return (
    <ContainerHeader>
      <Container>
        <Desktop />
        <Mobile />
      </Container>
    </ContainerHeader>
  );
};
