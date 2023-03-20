import React, { useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { Close, Calendar } from 'common/icons';
import { IconButton } from 'components/IconButton';
import { theme } from 'common/styles/theme';
import { Input, InputPhone } from 'components/Form';
import { useAuth } from 'common/hooks/useAuth';
import { cpf, email } from 'utils/regex';
import { useScheduleFlow } from 'common/hooks/useScheduleFlow';
import { FormWaitingListProps } from 'common/interface/FormWaitingListProps';
import { ContainerModal } from './styles';
import { Hours } from './Hours';

export const Modal: React.FC = () => {
  const methods = useForm<FormWaitingListProps>();
  const { countrys, optionsCountry, user } = useAuth();
  const {
    fieldsDate, dateSelect, onAddFieldDateInWaitingList, onRemovedFieldDateInWaitingList, onSubmitSaveWaitingList,
  } = useScheduleFlow();

  useEffect(() => {
    methods.setValue('user.country', user?.codPais || optionsCountry[4].value);
    methods.setValue('user.phone', user?.telefone || optionsCountry[4].value);
  }, [methods, user, optionsCountry]);

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
                <form onSubmit={methods.handleSubmit(onSubmitSaveWaitingList)}>
                  <FormProvider {...methods}>
                    <div className="hours">
                      <div className="header_form">
                        <label htmlFor="date_one" className="normal color_black_500">Informe as datas</label>
                        <button type="button" onClick={onAddFieldDateInWaitingList}>
                          Adicionar data
                        </button>
                      </div>
                      {fieldsDate.map((fieldDate, index) => (
                        <Hours index={index} nameInputDate={`${fieldDate}_${index}`} nameInputHour={`hour_${fieldDate}_${index}`} nameRadioHour={`any_time_${fieldDate}_${index}`} dateSelect={dateSelect} onRemove={() => onRemovedFieldDateInWaitingList(index)} />
                      ))}
                    </div>
                    <div className="my_data">
                      <div className="header_form">
                        <h6 className="title">Meus dados</h6>
                      </div>
                      <div className="form_my_data">
                        <Input
                          name="user.name"
                          id="user.name"
                          type="text"
                          label="Nome"
                          placeholder="Nome completo"
                          rules={{
                            required: {
                              value: true,
                              message: 'Campo obrigátorio! Verifique.',
                            },
                          }}
                          error={(methods.formState.errors as any).user && (methods.formState.errors as any).user.name ? (methods.formState.errors as any).user.name?.message : undefined}
                          defaultValue={user?.nome}
                        />
                        <InputPhone
                          countrys={countrys}
                          options={optionsCountry}
                          prefix="user"
                        />
                        <Input
                          name="user.email"
                          id="user.email"
                          type="text"
                          label="E-mail"
                          placeholder="seuemail@email.com"
                          rules={{
                            pattern: {
                              value: email,
                              message: 'E-mail é inválido! Verifique.',
                            },
                          }}
                          defaultValue={user?.email}
                          error={(methods.formState.errors as any) && (methods.formState.errors as any).user ? (methods.formState.errors as any).user.email?.message : undefined}
                        />
                        <div className="cpf_date">
                          <Input
                            name="user.cpf"
                            id="user.cpf"
                            type="tel"
                            label="CPF"
                            placeholder="000.000.000-00"
                            mask="999.999.999-99"
                            rules={{
                              pattern: {
                                value: cpf,
                                message: 'CPF é inválido! Verifique.',
                              },
                            }}
                            defaultValue={user?.cpf}
                            error={(methods.formState.errors as any) && (methods.formState.errors as any).user ? (methods.formState.errors as any).user.cpf?.message : undefined}
                          />
                          <Input
                            name="user.date_birth"
                            id="user.date_birth"
                            type="tel"
                            label="Data de nascimento"
                            mask="99/99/9999"
                            placeholder="dd/mm/yyyy"
                            icon={{
                              direction: 'right',
                              icon: <Calendar width={24} height={24} color={theme.colors.GREY[850]} />,
                            }}
                            defaultValue={user?.dtNascimento}
                          />
                        </div>
                        <Input
                          name="observation"
                          id="observation"
                          type="text"
                          label="Observação"
                          placeholder="Adicione algum detalhe específico que você deseje"
                        />
                      </div>
                    </div>
                    <div className="btns">
                      <Dialog.Close asChild>
                        <Button.Normal
                          text="Cancelar"
                          variant={ButtonVariantProps.SECONDARY}
                          type="button"
                        />
                      </Dialog.Close>
                      <Button.Normal
                        text="Entrar na lista"
                        variant={ButtonVariantProps.PRIMARY}
                        type="submit"
                      />
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
