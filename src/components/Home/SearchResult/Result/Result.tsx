import React from 'react';

import { CardCompany } from 'components/Home/CardCompany';
import { useHome } from 'common/hooks/useHome';
import { Container } from 'common/styles/container';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { ArrowLeft } from 'common/icons';
import { theme } from 'common/styles/theme';
import { Empty } from 'components/Empty';
import { ContainerResult } from './styles';

export const Result: React.FC = () => {
  const { searchServices, onClearSearchServices } = useHome();

  return (
    <ContainerResult>
      <Container>
        {searchServices && searchServices.length > 0 ? (
          <React.Fragment>
            <div className="reasult_header">
              <div>
                <h2 className="title">
                  Resultado da pesquisa
                  {' '}
                  <strong>
                    {searchServices.length > 1 ? `${searchServices.length} resultados` : `${searchServices.length} resultado`}
                  </strong>
                </h2>
                <p className="normal color_light">
                  Based on your profile, company preferences, and recent activity
                </p>
              </div>
              <Button.Normal
                type="button"
                text="Voltar"
                variant={ButtonVariantProps.OUTLINE_TEXT}
                icon={{
                  direction: 'left',
                  icon: <ArrowLeft color={theme.colors.PRIMARY[500]} width={18} height={18} />,
                }}
                onClick={onClearSearchServices}
              />
            </div>
            <ul>
              {searchServices.map((item) => (
                <CardCompany address={item.address} categories={item.categories} evaluation={item.evaluation} image={item.image} name={item.name} logo={item.logo} key={`${item.name}-${item.id}`} variant="large" />
              ))}
              {searchServices.map((item) => (
                <CardCompany address={item.address} categories={item.categories} evaluation={item.evaluation} image={item.image} name={item.name} logo={item.logo} key={`${item.name}-${item.id}`} variant="large" />
              ))}
              {searchServices.map((item) => (
                <CardCompany address={item.address} categories={item.categories} evaluation={item.evaluation} image={item.image} name={item.name} logo={item.logo} key={`${item.name}-${item.id}`} variant="large" />
              ))}
            </ul>
          </React.Fragment>
        ) : (
          <Empty
            text="Nada encontrado."
            buttonBack={{
              active: true,
              onClick: () => onClearSearchServices(),
            }}
          />
        )}
      </Container>
    </ContainerResult>
  );
};
