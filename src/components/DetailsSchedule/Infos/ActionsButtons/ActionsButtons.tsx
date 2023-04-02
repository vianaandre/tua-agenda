import React from 'react';

import { useDetailsSchedule } from 'common/hooks/useDetailsSchedule';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { Calendar, GoogleAlternative, Delete } from 'common/icons';
import { theme } from 'common/styles/theme';
import { ContainerActionsButtons } from './styles';

export const ActionsButtons: React.FC = () => {
  const { schedule } = useDetailsSchedule();

  return (
    <ContainerActionsButtons>
      <Button.Link
        href="#"
        text="Preenchear Formulário"
        variant={ButtonVariantProps.PRIMARY}
      />
      <Button.Normal
        type="button"
        text="Agendar Novamente"
        variant={ButtonVariantProps.TERTIARY}
        icon={{
          direction: 'left',
          icon: <Calendar width={24} height={24} color={theme.colors.GREY[900]} />,
        }}
      />
      <Button.Normal
        type="button"
        text="Adicionar na Agenda"
        variant={ButtonVariantProps.TERTIARY}
        icon={{
          direction: 'left',
          icon: <GoogleAlternative width={24} height={24} color={theme.colors.GREY[900]} />,
        }}
      />
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
