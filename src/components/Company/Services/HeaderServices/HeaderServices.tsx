import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Input } from 'components/Form';
import { Search } from 'common/icons';
import { theme } from 'common/styles/theme';
import { useCompany } from 'common/hooks/useCompany';
import { ContainerHeaderServices } from './styles';

export const HeaderServices: React.FC = () => {
  const { onSearchServices } = useCompany();
  const methods = useForm<{
        search: string
      }>();
  const isSearch = methods.watch('search');

  const onSubmit = (data: { search: string }) => onSearchServices(data.search);

  useEffect(() => {
    onSearchServices(isSearch);
  }, [isSearch, onSearchServices]);

  return (
    <ContainerHeaderServices>
      <div className="part_one">
        <h4 className="title">Serviços</h4>
        <p className="normal color_blue_200">Muitas opções disponíveis para você</p>
      </div>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <Input
            id="search"
            name="search"
            type="text"
            placeholder="Pesquisar"
            icon={{
              direction: 'left',
              icon: <Search width={24} height={24} color={theme.colors.GREY[700]} />,
            }}
          />
        </FormProvider>
      </form>
    </ContainerHeaderServices>
  );
};
