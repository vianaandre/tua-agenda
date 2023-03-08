import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { UserProps } from 'common/interface/UserProps';
import { Input, InputPhone } from 'components/Form';
import { useAuth } from 'common/hooks/useAuth';
import { Container } from 'common/styles/container';
import { cpf, email } from 'utils/regex';
import { validateCPF } from 'utils/validateCPF';
import { validateDate } from 'utils/validateDate';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { Loading } from 'common/icons';
import { theme } from 'common/styles/theme';
import { formatDate } from 'utils/format';
import { ContainerForm } from './styles';

export const Form: React.FC = () => {
  const {
    countrys, optionsCountry, onLoadAddress, VIACEP, onUpdateUser, loadingUpdatedUser, user,
  } = useAuth();
  const methods = useForm<UserProps>();
  const isCep = methods.watch('cep');

  useEffect(() => {
    if (optionsCountry && optionsCountry.length > 0) {
      methods.setValue('country', user?.codPais || optionsCountry[4].value);
      methods.setValue('phone', user?.telefone || optionsCountry[4].value);
    }
  }, [optionsCountry, methods, user]);

  useEffect(() => {
    const isCepFormatted = isCep?.replaceAll('_', '').replaceAll('-', '');
    if (isCepFormatted && String(isCepFormatted).length === 8) {
      onLoadAddress(isCepFormatted, methods.setValue);
    }
  }, [isCep, onLoadAddress, methods.setValue]);

  return (
    <Container onSubmit={methods.handleSubmit(onUpdateUser)}>
      {user && (
        <ContainerForm>
          <FormProvider {...methods}>
            <div className="personal">
              <div className="container_input">
                <Input
                  name="nome"
                  id="nome"
                  label="Nome Completo"
                  type="text"
                  rules={{
                    required: {
                      value: true,
                      message: 'Nome é obrigátório! Verifique.',
                    },
                  }}
                  error={methods.formState.errors.nome?.message}
                  placeholder="Digite seu nome completo"
                  defaultValue={user?.nome}
                />
              </div>
              <div className="container_input">
                <InputPhone
                  countrys={countrys}
                  options={optionsCountry}
                />
              </div>
              <div className="container_input">
                <Input
                  defaultValue={user?.email}
                  name="email"
                  id="email"
                  label="Email"
                  type="email"
                  rules={{
                    required: {
                      message: 'Email é obrigátório! Verifique.',
                      value: true,
                    },
                    pattern: {
                      value: email,
                      message: 'E-mail é inválido! Verifique.',
                    },
                  }}
                  error={methods.formState.errors.email?.message}
                  placeholder="Digite seu e-mail"
                />
              </div>
              <div className="container_input">
                <Input
                  defaultValue={user?.cpf}
                  name="cpf"
                  id="cpf"
                  label="CPF"
                  type="tel"
                  mask="999.999.999-99"
                  rules={{
                    pattern: {
                      value: cpf,
                      message: 'CPF é inválido! Verifique.',
                    },
                    validate: (cpf: string) => {
                      if (cpf) {
                        return validateCPF(cpf) ? true : 'CPF inválido! Verifique.';
                      }
                      return true;
                    },
                  }}
                  error={methods.formState.errors.cpf?.message}
                  placeholder="Digite seu CPF"
                />
              </div>
              <div className="container_input">
                <Input
                  defaultValue={user?.dtNascimento ? formatDate(user.dtNascimento) : undefined}
                  name="dtNascimento"
                  id="dtNascimento"
                  label="Data de Nascimento"
                  type="tel"
                  mask="99/99/9999"
                  rules={{
                    validate: (date: string) => {
                      if (date) {
                        return validateDate(date) ? true : 'Data de Nascimento é inválido! Verifique.';
                      }

                      return true;
                    },
                  }}
                  error={methods.formState.errors.dtNascimento?.message}
                  placeholder="01/01/1998"
                />
              </div>
            </div>
            <div className="address">
              <div className="address_title">
                <h6 className="title">Endereço</h6>
              </div>
              <div className="address_form">
                <div className="container_input">
                  <Input
                    defaultValue={user?.cep}
                    name="cep"
                    id="cep"
                    label="CEP"
                    mask="99999-999"
                    type="tel"
                    error={methods.formState.errors.cep?.message}
                    placeholder="Digite seu CEP"
                    icon={VIACEP.loading ? {
                      direction: 'right',
                      icon: <Loading width={28} height={28} color={theme.colors.PRIMARY[500]} />,
                    } : undefined}
                  />
                </div>
                <div className="container_input">
                  <Input
                    defaultValue={user?.rua}
                    name="rua"
                    id="rua"
                    label="Rua/Av"
                    type="text"
                    error={methods.formState.errors.rua?.message}
                    placeholder="Rua/Av"
                    disabled={user?.cep ? false : !VIACEP.sucess}
                  />
                </div>
                <div className="container_input">
                  <Input
                    defaultValue={user?.numero}
                    name="numero"
                    id="numero"
                    label="Número"
                    type="number"
                    error={methods.formState.errors.numero?.message}
                    placeholder="Número"
                    disabled={user?.cep ? false : !VIACEP.sucess}
                  />
                </div>
                <div className="container_input">
                  <Input
                    defaultValue={user?.complemento}
                    name="complemento"
                    id="complemento"
                    label="Complemento"
                    type="text"
                    error={methods.formState.errors.complemento?.message}
                    placeholder="Complemento"
                    disabled={user?.cep ? false : !VIACEP.sucess}
                  />
                </div>
                <div className="container_input">
                  <Input
                    defaultValue={user?.estado}
                    name="estado"
                    id="estado"
                    label="Estado"
                    type="text"
                    error={methods.formState.errors.estado?.message}
                    placeholder="Estado"
                    disabled={user?.cep ? false : !VIACEP.sucess}
                  />
                </div>
                <div className="container_input">
                  <Input
                    defaultValue={user?.cidade}
                    name="cidade"
                    id="cidade"
                    label="Cidade"
                    type="text"
                    error={methods.formState.errors.cidade?.message}
                    placeholder="Cidade"
                    disabled={user?.cep ? false : !VIACEP.sucess}
                  />
                </div>
              </div>
            </div>
            <div className="btn_submit">
              <Button.Normal type="submit" text="Atualizar perfil" variant={ButtonVariantProps.PRIMARY} disabled={loadingUpdatedUser} loading={loadingUpdatedUser} />
            </div>
          </FormProvider>
        </ContainerForm>
      )}
    </Container>
  );
};
