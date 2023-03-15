import React from 'react';

import { useScheduleFlow } from 'common/hooks/useScheduleFlow';
import { ContainerFlow } from './styles';
import { StepEmployees } from './StepEmployees';

export const Flow: React.FC = () => {
  const { stepper } = useScheduleFlow();

  return (
    <ContainerFlow>
      {stepper.length <= 0 && (
        <StepEmployees />
      )}
    </ContainerFlow>
  );
};
