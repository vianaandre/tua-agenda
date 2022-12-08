import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Input } from 'components/Form/Input';
import { InputVariantProps } from 'common/interface/InputVariantProps';
import { Search } from 'common/icons';
import { theme } from 'common/styles/theme';
import { ContainerFormSearch } from './styles';

export const FormSearch: React.FC = () => {
  const methods = useForm();

  return (
    <ContainerFormSearch>
      <FormProvider {...methods}>
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
      </FormProvider>
    </ContainerFormSearch>
  );
};
