import React from 'react';
import type { NextPage } from 'next';
import { DetailsSchedule } from 'components/DetailsSchedule';
import { DetailsScheduleProvider } from 'common/context/DetailsSCheduleContext';
import { SEO } from 'components/SEO';
import { CompanyProvider } from 'common/context/CompanyContext';

const DetailsSchedulePage: NextPage = () => {
  return (
    <CompanyProvider>
      <DetailsScheduleProvider>
        <SEO
          nome={`${process.env.WEBSITE_NAME} - Portal de Agendamentos`}
          description="Sistema de agendamento para demonstrar como será o sistema do cliente. Tua Agenda - Sua agenda sempre em mãos"
          pathname="/"
        />
        <DetailsSchedule />
      </DetailsScheduleProvider>
    </CompanyProvider>
  );
};

export default DetailsSchedulePage;
