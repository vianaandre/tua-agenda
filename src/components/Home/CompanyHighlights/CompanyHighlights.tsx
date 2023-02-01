import React from 'react';

import { Title } from 'components/Home/Title';
import { Container } from 'common/styles/container';
import { Arrow } from 'common/icons/Arrow';
import { theme } from 'common/styles/theme';
import { ServiceProps } from 'common/interface/ServiceProps';
import { CardCompany } from 'components/Home/CardCompany';
import { useServices } from 'common/hooks/useServices';
import { ContainerCompanyHighlights } from './styles';

export const CompanyHighlights: React.FC<{ services: ServiceProps[] }> = ({ services }) => {
  const { onLoadServicesAll } = useServices();

  return (
    <ContainerCompanyHighlights>
      <Container>
        <header>
          <Title title="Estabelecimentos em" emphasis="destaque" />
          <button type="button" onClick={onLoadServicesAll}>
            <p className="normal color_normal">Ver mais</p>
            <Arrow width={24} height={24} color={theme.colors.PRIMARY[500]} />
          </button>
        </header>
        <ul>
          {services.slice(0, 4).map((item) => (
            <CardCompany key={`${item.name}-${item.id}`} address={item.address} categories={item.categories} evaluation={item.evaluation} image={item.image} name={item.name} logo={item.logo} variant="small" />
          ))}
        </ul>
      </Container>
    </ContainerCompanyHighlights>
  );
};
