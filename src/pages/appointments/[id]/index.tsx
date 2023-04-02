import React from 'react';
import type { NextPage } from 'next';
import { DetailsSchedule } from 'components/DetailsSchedule';
import { DetailsScheduleProvider } from 'common/context/DetailsSCheduleContext';

const DetailsSchedulePage: NextPage = () => {
  return (
    <DetailsScheduleProvider>
      <DetailsSchedule />
    </DetailsScheduleProvider>
  );
};

export default DetailsSchedulePage;
