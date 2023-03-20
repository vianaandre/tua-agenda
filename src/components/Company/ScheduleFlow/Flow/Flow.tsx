import React from 'react';

import { useScheduleFlow } from 'common/hooks/useScheduleFlow';
import { ContainerFlow } from './styles';
import { StepEmployees } from './StepEmployees';
import { StepServices } from './StepServices';
import { StepHours } from './StepHours';

export const Flow: React.FC = () => {
  const { stepper } = useScheduleFlow();

  return (
    <ContainerFlow>
      {stepper.length <= 0 && (
        <StepEmployees />
      )}
      {stepper.length >= 1 && stepper.length < 2 && (
        <StepServices />
      )}
      {stepper.length >= 2 && stepper.length < 3 && (
        <StepHours />
      )}
    </ContainerFlow>
  );
};
