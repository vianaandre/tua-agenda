import React from 'react';

import { Container } from 'common/styles/container';
import { useCompany } from 'common/hooks/useCompany';
import { ContainerAbourCompany } from './styles';
import { Description } from './Description';
import { InfosCompany } from './InfosCompany';

export const AboutCompany: React.FC = () => {
  const { config } = useCompany();

  return (
    <ContainerAbourCompany>
      <Container>
        {config && config.metaDescricao && (
        <Description description={config?.metaDescricao} images={[{ imageLink: 'asas' }]} />
        )}
        <InfosCompany />
      </Container>
    </ContainerAbourCompany>
  );
};
