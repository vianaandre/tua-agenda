import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Input, Select } from 'components/Form';
import { InputVariantProps } from 'common/interface/InputVariantProps';
import { Search, Location } from 'common/icons';
import { theme } from 'common/styles/theme';
import { cities } from 'utils/cities';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { ContainerFormSearch, ContainerFormInputs } from './styles';

export const FormSearch: React.FC = () => {
  const methods = useForm();

  return (
    <ContainerFormSearch>
      <FormProvider {...methods}>
        <ContainerFormInputs>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Selecione o serviço"
            variant={InputVariantProps.OUTLINE}
            icon={{
              icon: <Search width={24} height={25} stroke={2} color={theme.colors.BLACK[500]} />,
              direction: 'left',
            }}
          />
        </ContainerFormInputs>
        <ContainerFormInputs>
          <Select
            name="city"
            id="city"
            icon={{
              icon: <Location width={24} height={24} color={theme.colors.BLACK[500]} />,
              direction: 'left',
            }}
            variant={InputVariantProps.OUTLINE}
            options={cities}
            widthOption={231}
            left={19}
          />
        </ContainerFormInputs>
        <Button.Normal type="submit" text="Buscar" variant={ButtonVariantProps.PRIMARY} />
      </FormProvider>
    </ContainerFormSearch>
  );
};
