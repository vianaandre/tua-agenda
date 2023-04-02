import React from 'react';

import { useCompany } from 'common/hooks/useCompany';
import { ScheduleFlowProvider } from 'common/context/ScheduleFlowContext';
import { useAuth } from 'common/hooks/useAuth';
import { LoginAndRegister } from 'components/LoginAndRegister';
import { ContainerScheduleFlow } from './styles';
import { Stepper } from './Stepper';
import { Flow } from './Flow';
import { Header } from './Header';

export const ScheduleFlow: React.FC = () => {
  const { openFlowSchedule } = useCompany();
  const { user, authPerScheduleFlow } = useAuth();

  return (
    <ScheduleFlowProvider>
      <ContainerScheduleFlow className={`${openFlowSchedule ? 'active' : ''} ${user ? '' : 'not_user'} ${authPerScheduleFlow ? 'auth_flow' : ''}`}>
        {authPerScheduleFlow ? (
          <LoginAndRegister type="login" variant="flow-schedule" />
        ) : (
          <React.Fragment>
            <Header />
            <Stepper />
            <Flow />
          </React.Fragment>
        )}
      </ContainerScheduleFlow>
    </ScheduleFlowProvider>
  );
};
