import React from 'react';

import { useDetailsSchedule } from 'common/hooks/useDetailsSchedule';
import { Loading } from 'components/Loading';
import { HeaderSection } from 'components/HeaderSection';
import { ScheduleFlow } from 'components/Company/ScheduleFlow';
import { ContainerDetailsSchedule } from './styles';
import { Status } from './Status';
import { Infos } from './Infos';

export const DetailsSchedule: React.FC = () => {
  const { loading, schedule } = useDetailsSchedule();

  console.log('schedule', schedule);

  return (
    <ContainerDetailsSchedule>
      <Loading open={loading} />
      <ScheduleFlow />
      {schedule && (
        <HeaderSection subtitle={`Criado em ${schedule.dtHrAgendamentoFmt}`} title="Detalhes do agendamento" back="/appointments" children={<Status status={schedule.situacaoFmt} />} />
      )}
      <Infos />
    </ContainerDetailsSchedule>
  );
};
