import React from 'react';

import { Title } from 'components/Home/Title';
import { Container } from 'common/styles/container';
import { Arrow } from 'common/icons/Arrow';
import { theme } from 'common/styles/theme';
import { ContainerCompanyHighlights } from './styles';

export const CompanyHighlights: React.FC = () => {
  return (
    <ContainerCompanyHighlights>
      <Container>
        <header>
          <Title title="Estabelecimentos em" emphasis="destaque" />
          <button type="button">
            <p className="normal color_normal">Ver mais</p>
            <Arrow width={24} height={24} color={theme.colors.PRIMARY[500]} />
          </button>
        </header>
      </Container>
    </ContainerCompanyHighlights>
  );
};
