import React from 'react';

import { useCompany } from 'common/hooks/useCompany';
import { ScheduleFlowProvider } from 'common/context/ScheduleFlowContext';
import { Header } from 'components/Header';
import { ContainerScheduleFlow } from './styles';
import { Stepper } from './Stepper';
import { Flow } from './Flow';

export const ScheduleFlow: React.FC = () => {
  const { openFlowSchedule } = useCompany();

  return (
    <ScheduleFlowProvider>
      <ContainerScheduleFlow className={`${openFlowSchedule ? 'active' : ''}`}>
        <Header />
        <Stepper />
        <Flow />
      </ContainerScheduleFlow>
    </ScheduleFlowProvider>
  );
};
