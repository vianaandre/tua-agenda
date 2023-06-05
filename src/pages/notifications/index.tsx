import React from 'react';

import { Notifications } from 'components/Notifications';
import { NotificationsProvider } from 'common/context/NotificationsContext';
import { SEO } from 'components/SEO';

const NotificationsPage: React.FC = () => {
  return (
    <NotificationsProvider>
      <SEO
        nome={`${process.env.WEBSITE_NAME} - Notificações`}
        description="Sistema de agendamento para demonstrar como será o sistema do cliente. Tua Agenda - Sua agenda sempre em mãos"
        pathname="/notifications"
      />
      <Notifications />
    </NotificationsProvider>
  );
};

export default NotificationsPage;
