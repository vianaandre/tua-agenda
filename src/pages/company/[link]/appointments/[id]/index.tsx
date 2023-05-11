import React from 'react';
import type { NextPage } from 'next';
import { DetailsSchedule } from 'components/DetailsSchedule';
import { DetailsScheduleProvider } from 'common/context/DetailsSCheduleContext';
import { SEO } from 'components/SEO';
import { CompanyProvider } from 'common/context/CompanyContext';
import { useAuth } from 'common/hooks/useAuth';
import { Page404 } from 'components/Page404';

const DetailsSchedulePage: NextPage = () => {
  const { user, loadingUser } = useAuth();

  if (!loadingUser && !user) {
    return <Page404 />;
  }

  return (
    <CompanyProvider>
      <DetailsScheduleProvider>
        <SEO
          nome={`${process.env.WEBSITE_NAME} - Detalhes do Agendamento`}
          description="Sistema de agendamento para demonstrar como será o sistema do cliente. Tua Agenda - Sua agenda sempre em mãos"
          pathname="/"
        />
        <DetailsSchedule />
      </DetailsScheduleProvider>
    </CompanyProvider>
  );
};

export default DetailsSchedulePage;
