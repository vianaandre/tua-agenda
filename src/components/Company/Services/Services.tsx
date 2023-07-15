import React from 'react';
import { useIntl } from 'react-intl';

import { Container } from 'common/styles/container';
import { useCompany } from 'common/hooks/useCompany';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { Empty } from 'components/Empty';
import { CardService } from 'components/Company/CardService';
import { ContainerServices } from './styles';
import { HeaderServices } from './HeaderServices';

export const Services: React.FC = () => {
  const {
    services, onSelectService, servicesSelect, servicesSearch,
  } = useCompany();
  const { formatMessage } = useIntl();

  return (
    <ContainerServices>
      <Container>
        <HeaderServices />
        {!servicesSearch && (
          services && services.length > 0 ? (
            <React.Fragment>
              <ul>
                {services.map((item) => (
                  <CardService key={item.id} service={item} onSelect={() => onSelectService(item.id)} active={!!servicesSelect?.includes(item.id)} />
                ))}
              </ul>
              <Button.Normal
                text={formatMessage({
                  id: 'SCHEDULE',
                })}
                variant={ButtonVariantProps.FULL}
                type="button"
                className="btn"
              />
            </React.Fragment>
          ) : (
            <div className="empty">
              <Empty text={formatMessage({
                id: 'EMPTY_SERVICES',
              })}
              />
            </div>
          ))}
        {servicesSearch && (
          servicesSearch.length > 0 ? (
            <React.Fragment>
              <ul>
                {servicesSearch.map((item) => (
                  <CardService key={item.id} service={item} onSelect={() => onSelectService(item.id)} active={!!servicesSelect?.includes(item.id)} />
                ))}
              </ul>
              <Button.Normal
                text={formatMessage({
                  id: 'SCHEDULE',
                })}
                variant={ButtonVariantProps.FULL}
                type="button"
                className="btn"
              />
            </React.Fragment>
          ) : (
            <div className="empty">
              <Empty text={formatMessage({
                id: 'NOTHING_FOUND',
              })}
              />
            </div>
          )
        )}
      </Container>
    </ContainerServices>
  );
};
