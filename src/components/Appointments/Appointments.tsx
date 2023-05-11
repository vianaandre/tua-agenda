import React from 'react';

import { HeaderSection } from 'components/HeaderSection';
import { Calendar } from 'common/icons';
import { theme } from 'common/styles/theme';
import { Loading } from 'components/Loading';
import { useAppointments } from 'common/hooks/useAppointments';
import { ContainerAppointments } from './styles';
import { Graphics } from './Graphics';
import { Filter } from './Filter';
import { TableAppointments } from './TableAppointments';
import { SelectedFilters } from './SelectedFilters';

export const Appointments: React.FC = () => {
  const { loading, filters } = useAppointments();
  return (
    <ContainerAppointments>
      <Loading open={loading === 'appointments'} />
      <HeaderSection
        subtitle="Resumo de todos os atendimentos."
        title="Agendamentos"
        children={<Calendar color={theme.colors.WHITE} width={82} stroke={1} height={82} />}
      />
      <Graphics />
      <Filter />
      {filters && (
        <SelectedFilters filters={filters} />
      )}
      <TableAppointments />
    </ContainerAppointments>
  );
};
