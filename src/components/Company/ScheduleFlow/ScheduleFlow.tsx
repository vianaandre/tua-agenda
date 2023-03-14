import React from 'react';

import { useCompany } from 'common/hooks/useCompany';
import { ContainerScheduleFlow } from './styles';
import { Stepper } from './Stepper';

export const ScheduleFlow: React.FC = () => {
  const { openFlowSchedule } = useCompany();

  return (
    <ContainerScheduleFlow className={`${openFlowSchedule ? 'active' : ''}`}>
      <Stepper />
    </ContainerScheduleFlow>
  );
};
