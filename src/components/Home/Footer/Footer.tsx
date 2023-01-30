import React from 'react';

import { Container } from 'common/styles/container';
import { ContainerFooter } from './styles';
import { ContentFooter } from './ContentFooter';
import { CopyRightFooter } from './CopyrightFooter';

export const Footer: React.FC = () => {
  return (
    <ContainerFooter>
      <Container>
        <ContentFooter />
        <CopyRightFooter />
      </Container>
    </ContainerFooter>
  );
};
