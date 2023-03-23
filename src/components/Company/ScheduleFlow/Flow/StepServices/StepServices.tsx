import React, { useEffect } from 'react';
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
import { Empty } from 'components/Empty';
import { ContainerStepServices } from './styles';

export const StepServices: React.FC = () => {
  const methods = useForm<{
    search: string;
  }>();
  const {
    servicesPerEmployees, onSelectStepper, stepper, onLoadHoursPerEmployee,
  } = useScheduleFlow();
  const {
    onSelectService, servicesSelect, onSearchServices, servicesSearch,
  } = useCompany();
  const isSearch = methods.watch('search');

  useEffect(() => {
    onSearchServices(isSearch);
  }, [isSearch, onSearchServices]);

  return (
    <ContainerStepServices>
      <Container>
        <div className="header">
          <form onSubmit={methods.handleSubmit(({ search }) => onSearchServices(search))}>
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
          {!servicesSearch && (
            servicesPerEmployees.length > 0 ? (
              <ul>
                {servicesPerEmployees.map((servicePerEmployee) => (
                  <CardService key={servicePerEmployee.id} service={servicePerEmployee} active={!!servicesSelect?.find((serviceSelect) => serviceSelect === servicePerEmployee.id)} onSelect={() => onSelectService(servicePerEmployee.id)} />
                ))}
              </ul>
            ) : (
              <Empty text="Nada encontrado" />
            )
          )}
          {servicesSearch && (
            servicesSearch.length > 0 ? (
              <ul>
                { servicesSearch.map((serviceSearch) => (
                  <CardService key={serviceSearch.id} service={serviceSearch} active={!!servicesSelect?.find((serviceSelect) => serviceSelect === serviceSearch.id)} onSelect={() => onSelectService(serviceSearch.id)} />
                ))}
              </ul>
            ) : (
              <Empty text="Nada encontrado" />
            )
          )}
        </div>
        <Button.Normal
          text="Próxima etapa"
          variant={ButtonVariantProps.FULL}
          type="button"
          className="next"
          disabled={!servicesSelect?.length}
          onClick={() => {
            onSelectStepper(stepperScheduleFlow[stepper.length + 1]);
            onLoadHoursPerEmployee();
          }}
          icon={{
            icon: <ArrowAlternative width={24} height={24} color={theme.colors.WHITE} />,
            direction: 'right',
          }}
        />
      </Container>
    </ContainerStepServices>
  );
};
