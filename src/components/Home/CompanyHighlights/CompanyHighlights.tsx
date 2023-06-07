import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useIntl } from 'react-intl';

import { Title } from 'components/Home/Title';
import { Container } from 'common/styles/container';
import { Arrow } from 'common/icons/Arrow';
import { theme } from 'common/styles/theme';
import { CardCompany } from 'components/Home/CardCompany';
import { useServices } from 'common/hooks/useServices';
import { ContainerCompanyHighlights } from './styles';

export const CompanyHighlights: React.FC = () => {
  const { onLoadServicesAll, companies } = useServices();
  const { formatMessage } = useIntl();

  return (
    <ContainerCompanyHighlights>
      <Container>
        <header>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.5} animateOnce>
            <Title
              title={formatMessage({
                id: 'ESTABLISHMENTS_IN',
              })}
              emphasis={formatMessage({
                id: 'EMPHASIS',
              })}
            />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" duration={0.7} animateOnce>
            <button type="button" onClick={onLoadServicesAll}>
              <p className="normal color_normal">
                {formatMessage({
                  id: 'VIEW_MORE',
                })}
              </p>
              <Arrow width={24} height={24} color={theme.colors.PRIMARY[500]} />
            </button>
          </AnimationOnScroll>
        </header>
        <ul>
          {companies.slice(0, 4).map((item) => (
            <CardCompany key={`${item.id}`} address={item.enderecoCompleto} image={item.linkImagem} name={item.nome} logo={item.linkImagem} variant="small" usuario={item.usuario} />
          ))}
        </ul>
      </Container>
    </ContainerCompanyHighlights>
  );
};
