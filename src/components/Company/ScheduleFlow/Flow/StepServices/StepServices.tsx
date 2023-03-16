import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Container } from 'common/styles/container';
import { Input } from 'components/Form';
import { InputVariantProps } from 'common/interface/InputVariantProps';
import { ArrowAlternative, Search } from 'common/icons';
import { theme } from 'common/styles/theme';
import { CardService } from 'components/Company/CardService';
import { useScheduleFlow } from 'common/hooks/useScheduleFlow';
import { useCompany } from 'common/hooks/useCompany';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { stepperScheduleFlow } from 'utils/stepper';
import { ContainerStepServices } from './styles';

export const StepServices: React.FC = () => {
  const methods = useForm();
  const { servicesPerEmployees, onSelectStepper, stepper } = useScheduleFlow();
  const { onSelectService, servicesSelect } = useCompany();

  console.log('servicesSelect', servicesSelect);

  return (
    <ContainerStepServices>
      <Container>
        <div className="header">
          <form>
            <FormProvider {...methods}>
              <Input
                id="search"
                name="search"
                type="text"
                placeholder="Pesquisar"
                variant={InputVariantProps.PRIMARY}
                icon={{
                  icon: <Search width={24} height={24} color={theme.colors.GREY[500]} />,
                  direction: 'left',
                }}
              />
            </FormProvider>
          </form>
        </div>
        <div className="list">
          <ul>
            {servicesPerEmployees.map((servicePerEmployee) => (
              <CardService key={servicePerEmployee.id} service={servicePerEmployee} active={!!servicesSelect?.find((serviceSelect) => serviceSelect === servicePerEmployee.id)} onSelect={() => onSelectService(servicePerEmployee.id)} />
            ))}
          </ul>
        </div>
        <Button.Normal
          text="Próxima etapa"
          variant={ButtonVariantProps.FULL}
          type="button"
          className="next"
          disabled={!servicesSelect?.length}
          onClick={() => onSelectStepper(stepperScheduleFlow[stepper.length + 1])}
          icon={{
            icon: <ArrowAlternative width={24} height={24} color={theme.colors.WHITE} />,
            direction: 'right',
          }}
        />
      </Container>
    </ContainerStepServices>
  );
};
