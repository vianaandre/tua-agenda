import React from 'react';

import { HeaderSection } from 'components/HeaderSection';
import { ContainerNotifications } from './styles';
import { TableNotifications } from './TableNotifications';

export const Notifications: React.FC = () => {
  return (
    <ContainerNotifications>
      <HeaderSection
        title="Notificações"
        subtitle="Você consegue enviar notificação para as empresas"
      />
      <TableNotifications />
    </ContainerNotifications>
  );
};
