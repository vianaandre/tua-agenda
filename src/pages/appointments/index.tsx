import React from 'react';
import type { NextPage } from 'next';

import { Appointments } from 'components/Appointments';
import { AppointmentsProvider } from 'common/context/AppointmentsContext';
import { SEO } from 'components/SEO';

const AppointmentsPage: NextPage = () => {
  return (
    <AppointmentsProvider>
      <SEO description="Listagem dos agendamentos" nome="Agendamentos" pathname="https://tua-agenda-dev.vercel.app/" />
      <Appointments />
    </AppointmentsProvider>
  );
};

export default AppointmentsPage;
