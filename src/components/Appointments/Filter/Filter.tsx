import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as Popover from '@radix-ui/react-popover';

import { Container } from 'common/styles/container';
import { Input } from 'components/Form';
import { Search, ArrowAlternative } from 'common/icons';
import { theme } from 'common/styles/theme';
import { useAppointments } from 'common/hooks/useAppointments';
import { ContainerFilter } from './styles';

export const Filter: React.FC = () => {
  const methods = useForm<{ search: string }>();
  const { filters, onChangeFilter } = useAppointments();

  return (
    <ContainerFilter>
      <Container>
        <form>
          <FormProvider {...methods}>
            <div className="search">
              <Input
                name="search"
                id="search"
                type="text"
                placeholder="Corte de cabelo..."
                icon={{
                  direction: 'left',
                  icon: <Search color={theme.colors.GREY[600]} width={24} height={24} />,
                }}
              />
            </div>
            <div className="filters">
              <button type="button" className={`filter_price filter arrow ${filters && filters.price === 'floor' ? 'floor' : 'ceil'}`} onClick={() => onChangeFilter({ ...filters, price: filters?.price === 'ceil' ? 'floor' : 'ceil' })}>
                <p className="normal color_dark">
                  Filtrar por Preço mais
                  {' '}
                  {filters?.price === 'ceil' ? 'baixo' : 'alto'}
                </p>
                <ArrowAlternative width={24} height={24} color={theme.colors.PRIMARY[800]} />
              </button>
              <Popover.Root>
                <Popover.Trigger asChild>
                  <button type="button" className="filter_price filter arrow">
                    <p className="normal color_dark">Filtrar por Preço mais Alto </p>
                    <ArrowAlternative width={24} height={24} color={theme.colors.PRIMARY[800]} />
                  </button>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content className="popover_hours_content">
                    <Popover.Arrow className="tooltip_days_content_arrow" />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            </div>
          </FormProvider>
        </form>
      </Container>
    </ContainerFilter>
  );
};
