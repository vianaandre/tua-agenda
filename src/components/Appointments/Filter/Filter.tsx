import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as Popover from '@radix-ui/react-popover';
import * as Dialog from '@radix-ui/react-dialog';

import { Container } from 'common/styles/container';
import { Input } from 'components/Form';
import { Search, ArrowAlternative, Calendar } from 'common/icons';
import { theme } from 'common/styles/theme';
import { statusAppointments } from 'utils/statusAppointments';
import { ContainerFilter } from './styles';
import { useFilter } from './useFilter';
import { ModalSelectDate } from './ModalSelectDate';

export const Filter: React.FC = () => {
  const methods = useForm<{ search: string }>();
  const {
    onOpenFilterStatus, openFilterStatus, onSelectFilterStatus, filters, onSelectFilterPrice, onSelectDateFilter, dateFilter,
  } = useFilter();

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
              <button type="button" className={`filter_price filter arrow ${filters?.price === 'ceil' ? 'floor' : 'ceil'}`} onClick={() => onSelectFilterPrice(filters?.price === 'ceil' ? 'floor' : 'ceil')}>
                <p className="normal color_dark">
                  Filtrar por Preço mais
                  {' '}
                  {filters?.price === 'ceil' ? 'baixo' : 'alto'}
                </p>
                <ArrowAlternative width={24} height={24} color={theme.colors.PRIMARY[800]} />
              </button>
              <Popover.Root open={openFilterStatus} onOpenChange={onOpenFilterStatus}>
                <Popover.Trigger asChild>
                  <button type="button" className="filter_price filter arrow filter_status">
                    <p className="normal color_dark">Filtrar por Status</p>
                    <ArrowAlternative width={24} height={24} color={theme.colors.PRIMARY[800]} />
                  </button>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content className="dropdown_profile_content popover_status_content">
                    <div className="status">
                      <ul>
                        {statusAppointments.map((status) => (
                          <li>
                            <button
                              type="button"
                              className={filters?.status === status.status ? 'active' : ''}
                              onClick={() => onSelectFilterStatus(status.status)}
                            >
                              <p className="small">{status.text}</p>
                              <div className="checkbox">
                                <div />
                              </div>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button type="button" className="filter filter_date">
                    <p className="normal color_dark">
                      Filtrar por data
                    </p>
                    <Calendar width={24} height={24} color={theme.colors.PRIMARY[800]} />
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="dialog_overlay" />
                  <Dialog.Content className="dialog_content">
                    <ModalSelectDate
                      onSelectDateFilter={onSelectDateFilter}
                      dateFilter={dateFilter}
                    />
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </FormProvider>
        </form>
      </Container>
    </ContainerFilter>
  );
};
