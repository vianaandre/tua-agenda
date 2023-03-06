import React from 'react';

import { Container } from 'common/styles/container';
import { useCompany } from 'common/hooks/useCompany';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { Empty } from 'components/Empty';
import { ContainerServices } from './styles';
import { HeaderServices } from './HeaderServices';
import { CardService } from './CardService';

export const Services: React.FC = () => {
  const {
    services, onSelectService, servicesSelect, servicesSearch,
  } = useCompany();

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
              <Button.Normal text="Realizar Agendamento" variant={ButtonVariantProps.FULL} type="button" className="btn" />
            </React.Fragment>
          ) : (
            <div className="empty">
              <Empty text="Sem serviços disponiveis" />
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
              <Button.Normal text="Realizar Agendamento" variant={ButtonVariantProps.FULL} type="button" className="btn" />
            </React.Fragment>
          ) : (
            <div className="empty">
              <Empty text="Nada encontrado" />
            </div>
          )
        )}
      </Container>
    </ContainerServices>
  );
};
