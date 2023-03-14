import { StepProps } from 'common/interface/StepProps';
import React, { useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';

interface ScheduleContextProps {
    step: StepProps;
    onChangeStep: (step: StepProps) => void;
}

export const ScheduleContext = createContext({} as ScheduleContextProps);

export function ScheduleProvider({ children }: { children: React.ReactNode }) {
  const [isStep, setIsStep] = useState<StepProps>({
    description: 'Escolha um profissional',
    step: 1,
    title: 'Profissionais',
  });

  const handleChangeStep = useCallback((step: StepProps) => {
    setIsStep(step);
  }, []);

  return (
    <ScheduleContext.Provider value={{ step: isStep, onChangeStep: handleChangeStep }}>
      {children}
    </ScheduleContext.Provider>
  );
}
