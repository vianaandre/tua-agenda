import React, { useMemo } from 'react';

import { Alert } from 'components/Alert';
import { StatusProps } from 'common/interface/StatusProps';
import { Container } from 'common/styles/container';
import { ContainerInfos } from './styles';
import { ActionsButtons } from './ActionsButtons';

export const Infos: React.FC = () => {
  const isMessages = useMemo(() => {
    return (
      <p>
        Seu agendamento está
        {' '}
        <strong>Pendente de pagamento</strong>
        {' '}
        <br />
        Faça o pagamento abaixo para garantir sua reserva
      </p>
    );
  }, []);

  return (
    <ContainerInfos>
      <Container>
        <Alert
          status={StatusProps.PENDENTE}
          message={isMessages}
        />
        <ActionsButtons />
      </Container>
    </ContainerInfos>
  );
};
