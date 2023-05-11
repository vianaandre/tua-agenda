import React from 'react';
import type { NextPage } from 'next';
import { Loading } from 'components/Loading';

import { Appointments } from 'components/Appointments';
import { AppointmentsProvider } from 'common/context/AppointmentsContext';
import { SEO } from 'components/SEO';
import { useAuth } from 'common/hooks/useAuth';
import { Page404 } from 'components/Page404';

const AppointmentsPage: NextPage = () => {
  const { loadingUser, user } = useAuth();

  if (!loadingUser && !user) {
    return <Page404 />;
  }

  return (
    <React.Fragment>
      <SEO description="Listagem dos agendamentos" nome={`${process.env.WEBSITE_NAME} - Agendamentos`} pathname="https://tua-agenda-dev.vercel.app/" />
      <Loading open={loadingUser} />
      {user && (
      <AppointmentsProvider>
        <Appointments />
      </AppointmentsProvider>
      )}
    </React.Fragment>
  );
};

export default AppointmentsPage;
