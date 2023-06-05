import React from 'react';

import { Notifications } from 'components/Notifications';
import { NotificationsProvider } from 'common/context/NotificationsContext';
import { SEO } from 'components/SEO';
import { useAuth } from 'common/hooks/useAuth';
import { Page404 } from 'components/Page404';

const NotificationsPage: React.FC = () => {
  const { loadingUser, user } = useAuth();

  if (!loadingUser && !user) {
    return <Page404 />;
  }

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
