import React from 'react';

import { useCompany } from 'common/hooks/useCompany';
import { Container } from 'common/styles/container';
import { Close, ArrowLeft } from 'common/icons';
import { theme } from 'common/styles/theme';
import { IconButton } from 'components/IconButton';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { useScheduleFlow } from 'common/hooks/useScheduleFlow';
import { ContainerHeader } from './styles';

export const Header: React.FC = () => {
  const { config, onCloseFlowSchedule } = useCompany();
  const { onSelectStepper, stepper } = useScheduleFlow();

  return (
    <ContainerHeader>
      <Container>
        <h4 className="title">{config?.nome}</h4>
        <div className="btn_back">
          {stepper.length > 0 ? (
            <Button.Normal
              text="Voltar"
              type="button"
              variant={ButtonVariantProps.OUTLINE_TEXT}
              icon={{
                direction: 'left',
                icon: <ArrowLeft width={20} height={20} color={theme.colors.WHITE} />,
              }}
              onClick={() => onSelectStepper(stepper[stepper.length - 1])}
            />
          ) : (
            <h4 className="title">{config?.nome}</h4>
          )}
        </div>
        <IconButton className="close" onClick={onCloseFlowSchedule}>
          <Close width={24} height={24} color={theme.colors.WHITE} />
        </IconButton>
      </Container>
    </ContainerHeader>
  );
};
