import React from 'react';

import { useDetailsSchedule } from 'common/hooks/useDetailsSchedule';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { Calendar, GoogleAlternative, Delete } from 'common/icons';
import { theme } from 'common/styles/theme';
import { createLinkGoogleCalendar } from 'utils/createLinkGoogleCalendar';
import { format } from 'date-fns';
import { useCompany } from 'common/hooks/useCompany';
import { ContainerActionsButtons } from './styles';

export const ActionsButtons: React.FC = () => {
  const { schedule } = useDetailsSchedule();
  const { config, onOpenFlowSchedule } = useCompany();

  return (
    <ContainerActionsButtons>
      {schedule && schedule?.stAnamnese && (
        <Button.Link
          href="#"
          text="Preenchear Formulário"
          variant={ButtonVariantProps.PRIMARY}
        />
      )}
      <Button.Normal
        type="button"
        text="Agendar Novamente"
        variant={ButtonVariantProps.TERTIARY}
        icon={{
          direction: 'left',
          icon: <Calendar width={24} height={24} color={theme.colors.GREY[900]} />,
        }}
        onClick={onOpenFlowSchedule}
      />
      {schedule && schedule.inicio && (
        <Button.Link
          href={createLinkGoogleCalendar({
            dates: `${format(new Date(schedule.inicio), 'yyyyMMdd')}/${format(new Date(schedule.inicio), 'yyyyMMdd')}`,
            details: schedule?.itens?.map((item) => item.nome).join(', '),
            location: `${config?.enderecoCompleto}`,
            text: schedule?.itens?.map((item) => item.nome).join(', '),
          })}
          target="_black"
          text="Adicionar na Agenda"
          variant={ButtonVariantProps.TERTIARY}
          icon={{
            direction: 'left',
            icon: <GoogleAlternative width={24} height={24} color={theme.colors.GREY[900]} />,
          }}
        />
      )}
      {schedule?.enabledCancelamento && (
        <Button.Normal
          type="button"
          text="Cancelar"
          className="cancel"
          variant={ButtonVariantProps.PRIMARY}
          icon={{
            direction: 'left',
            icon: <Delete width={24} height={24} color={theme.colors.WHITE} />,
          }}
        />
      )}
    </ContainerActionsButtons>
  );
};
