import React from 'react';
import type { NextPage } from 'next';

import { Appointments } from 'components/Appointments';
import { AppointmentsProvider } from 'common/context/AppointmentsContext';

const AppointmentsPage: NextPage = () => {
  return (
    <AppointmentsProvider>
      <Appointments />
    </AppointmentsProvider>
  );
};

export default AppointmentsPage;
