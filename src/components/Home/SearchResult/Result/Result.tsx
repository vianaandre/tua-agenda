import React from 'react';
import { useIntl } from 'react-intl';

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
  const { formatMessage } = useIntl();

  return (
    <ContainerResult>
      <Container>
        {searchServices && searchServices.length > 0 ? (
          <React.Fragment>
            <div className="reasult_header">
              <div>
                <h2 className="title">
                  {formatMessage({
                    id: 'SEARCH_RESULT',
                  })}
                  {' '}
                  <strong>
                    {searchServices.length > 1 ? `${searchServices.length} ${
                      formatMessage({
                        id: 'RESULTS',
                      })
                    }` : `${searchServices.length} ${formatMessage({
                      id: 'RESULT',
                    })}`}
                  </strong>
                </h2>
                <p className="normal color_light">
                  Based on your profile, company preferences, and recent activity
                </p>
              </div>
              <Button.Normal
                type="button"
                text={formatMessage({
                  id: 'BACK',
                })}
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
                <CardCompany address={item.enderecoCompleto} image={item.linkImagem} name={item.nome} logo={item.linkImagem} key={`${item.id}`} variant="large" usuario={item.usuario} />
              ))}
              {searchServices.map((item) => (
                <CardCompany address={item.enderecoCompleto} image={item.linkImagem} name={item.nome} logo={item.linkImagem} key={`${item.id}`} variant="large" usuario={item.usuario} />
              ))}
              {searchServices.map((item) => (
                <CardCompany address={item.enderecoCompleto} image={item.linkImagem} name={item.nome} logo={item.linkImagem} key={`${item.id}`} variant="large" usuario={item.usuario} />
              ))}
            </ul>
          </React.Fragment>
        ) : (
          <Empty
            text={formatMessage({
              id: 'EMTPY',
            })}
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
