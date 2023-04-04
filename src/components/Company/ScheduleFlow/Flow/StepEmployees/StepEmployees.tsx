import React, { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Input } from 'components/Form';
import { InputVariantProps } from 'common/interface/InputVariantProps';
import { Search, ArrowAlternative } from 'common/icons';
import { theme } from 'common/styles/theme';
import { Container } from 'common/styles/container';
import { useCompany } from 'common/hooks/useCompany';
import { Avatar } from 'components/Avatar';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { useScheduleFlow } from 'common/hooks/useScheduleFlow';
import { stepperScheduleFlow } from 'utils/stepper';
import { ProfessionalProps } from 'common/interface/ProfesssionalProps';
import { Empty } from 'components/Empty';
import { ContainerStepEmployees } from './styles';

export const StepEmployees: React.FC = () => {
  const methods = useForm();
  const { employees, selectEmployees, onSelectEmployees } = useCompany();
  const {
    onSelectStepper, stepper,
  } = useScheduleFlow();
  const isSearch = methods.watch('search');

  const isServicesSearch = useMemo((): ProfessionalProps[] | undefined => {
    if (isSearch && isSearch !== '') {
      return employees?.filter((employee) => employee.nome.toLowerCase().includes(isSearch));
    }

    return employees;
  }, [isSearch, employees]);

  return (
    <ContainerStepEmployees>
      <Container>
        <div className="header">
          <form action="">
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
          {isServicesSearch && isServicesSearch.length > 0 ? (
            <ul>
              {isServicesSearch.map((employee) => (
                <li key={employee.id}>
                  <button type="button" onClick={() => onSelectEmployees(employee)} className={`${selectEmployees.find((i) => i.id === employee.id) ? 'active' : ''}`}>
                    <Avatar
                      username={employee.nome}
                      image={employee.linkImagem}
                    />
                    <p className="normal color_normal">{employee.nome}</p>
                    <span className="small color_black_500">{employee.telefone}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <Empty text="Nada encontrado" />
          )}
        </div>
        <Button.Normal
          text="Próxima etapa"
          variant={ButtonVariantProps.FULL}
          type="button"
          className="next"
          disabled={!selectEmployees.length}
          onClick={() => onSelectStepper(stepperScheduleFlow[stepper.length + 1])}
          icon={{
            icon: <ArrowAlternative width={24} height={24} color={theme.colors.WHITE} />,
            direction: 'right',
          }}
        />
      </Container>
    </ContainerStepEmployees>
  );
};
