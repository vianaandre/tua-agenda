import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { Container } from 'common/styles/container';
import { Input } from 'components/Form';
import { Search } from 'common/icons';
import { theme } from 'common/styles/theme';
import { ContainerServices } from './styles';

export const Services: React.FC = () => {
  const methods = useForm<{
    search: string
  }>();

  return (
    <ContainerServices>
      <Container>
        <div className="title">
          <div className="part_one">
            <h4 className="title">Serviços</h4>
            <p className="normal color_blue_200">Muitas opções disponíveis para você</p>
          </div>
          <form>
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
        </div>
      </Container>
    </ContainerServices>
  );
};
