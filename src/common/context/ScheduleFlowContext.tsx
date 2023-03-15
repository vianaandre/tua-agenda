import React, { useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';

import { StepperProps } from 'common/interface/StepperProps';
import { stepperScheduleFlow } from 'utils/stepper';

interface ScheduleFlowContextProps {
    stepper: StepperProps[];
    onSelectStepper: (stepper: StepperProps) => void;
}

export const ScheduleFlowContext = createContext({} as ScheduleFlowContextProps);

export function ScheduleFlowProvider({ children }: { children: React.ReactNode }) {
  const [isStepper, setIsStepper] = useState<StepperProps[]>([]);

  const handleSelectStepper = useCallback((stepper: StepperProps) => {
    const steppers = stepperScheduleFlow.filter((i) => i.stepper < stepper.stepper);
    setIsStepper(steppers);
  }, []);

  return (
    <ScheduleFlowContext.Provider value={{
      stepper: isStepper,
      onSelectStepper: handleSelectStepper,
    }}
    >
      {children}
    </ScheduleFlowContext.Provider>
  );
}
