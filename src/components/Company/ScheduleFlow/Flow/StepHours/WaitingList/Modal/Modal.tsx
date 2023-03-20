import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { Close, Calendar, Hour } from 'common/icons';
import { IconButton } from 'components/IconButton';
import { theme } from 'common/styles/theme';
import { Input, Radio } from 'components/Form';
import { ContainerModal } from './styles';

export const Modal: React.FC = () => {
  const methods = useForm();

  return (
    <ContainerModal>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button.Normal text="Entrar na lista de espera" type="button" variant={ButtonVariantProps.PRIMARY} />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog_overlay" />
          <Dialog.Content className="dialog_content dialog_content_waiting_list">
            <div className="content_modal">
              <div className="header">
                <h5 className="title">Lista de espera</h5>
                <Dialog.Close asChild>
                  <IconButton>
                    <Close width={24} height={24} color={theme.colors.BLACK[500]} />
                  </IconButton>
                </Dialog.Close>
              </div>
              <div className="content">
                <form action="">
                  <FormProvider {...methods}>
                    <div className="hours">
                      <div className="header_hours">
                        <label htmlFor="date_one" className="normal color_black_500">Informe as datas</label>
                        <button type="button">
                          Adicionar data
                        </button>
                      </div>
                      <div className="inputs">
                        <Input
                          name="date"
                          id="date"
                          type="tel"
                          label="Data"
                          mask="99/99/9999"
                          placeholder="dd/mm/yyyy"
                          rules={{
                            required: {
                              value: true,
                              message: 'Campo obrigátorio! Verique.',
                            },
                          }}
                          icon={{
                            direction: 'right',
                            icon: <Calendar width={24} height={24} color={theme.colors.GREY[850]} />,
                          }}
                        />
                        <div className="hour">
                          <Input
                            name="hour"
                            id="hour"
                            type="tel"
                            label="Horário"
                            mask="99:99"
                            placeholder="hh:mm"
                            rules={{
                              required: {
                                value: true,
                                message: 'Campo obrigátorio! Verique.',
                              },
                            }}
                            icon={{
                              direction: 'right',
                              icon: <Hour width={24} height={24} color={theme.colors.GREY[850]} />,
                            }}
                          />
                          <Radio
                            name="any_time_1"
                            id="any_time_1"
                            defaultChecked={false}
                            label={{
                              direction: 'right',
                              text: 'Qualquer horário',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </FormProvider>
                </form>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </ContainerModal>
  );
};
