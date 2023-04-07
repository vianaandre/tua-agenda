import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

import { useDetailsSchedule } from 'common/hooks/useDetailsSchedule';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import {
  Calendar, GoogleAlternative, Delete, CloseCircle,
} from 'common/icons';
import { theme } from 'common/styles/theme';
import { createLinkGoogleCalendar } from 'utils/createLinkGoogleCalendar';
import { format } from 'date-fns';
import { useCompany } from 'common/hooks/useCompany';
import { ContainerActionsButtons } from './styles';

export const ActionsButtons: React.FC = () => {
  const { schedule, onCancelSchedule, loadingCancelSchedule } = useDetailsSchedule();
  const { config, onOpenFlowSchedule } = useCompany();

  return (
    <ContainerActionsButtons className={`${schedule && schedule?.stAnamnese ? 'stAnamnese' : ''}`}>
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
      {schedule?.enabledCancelamento && schedule.situacao === 'AGENDADO' && (
        <React.Fragment>
          <Button.Normal
            type="button"
            text="Cancelar"
            className="cancel"
            variant={ButtonVariantProps.PRIMARY}
            icon={{
              direction: 'left',
              icon: <Delete width={24} height={24} color={theme.colors.WHITE} />,
            }}
            onClick={onCancelSchedule}
            loading={loadingCancelSchedule}
            disabled={loadingCancelSchedule}
          />
          <Tooltip.Provider>
            <Tooltip.Root delayDuration={100}>
              <Tooltip.Trigger asChild>
                <div className="cancel_mobile">
                  <Button.Normal
                    type="button"
                    text=""
                    icon={{
                      direction: 'left',
                      icon: <CloseCircle width={24} height={24} color={theme.colors.WHITE} />,
                    }}
                    className="cancel mobile"
                    variant={ButtonVariantProps.PRIMARY}
                    onClick={onCancelSchedule}
                    loading={loadingCancelSchedule}
                    disabled={loadingCancelSchedule}
                  />
                </div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content sideOffset={5} className="tooltip_social_content" side="bottom">
                  <p className="small color_white">
                    Solicitar cancelamento
                  </p>
                  <Tooltip.Arrow className="tooltip_social_content_arrow" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </React.Fragment>
      )}
    </ContainerActionsButtons>
  );
};
