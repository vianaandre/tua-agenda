import React, { useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Input, Checkbox } from 'components/Form';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { UserProps } from 'common/interface/UserProps';
import { email } from 'utils/regex';
import { useAuth } from 'common/hooks/useAuth';
import { PasswordNotView, PasswordView } from 'common/icons';
import { theme } from 'common/styles/theme';
import { IconButton } from 'components/IconButton';
import { ContainerForm } from './styles';
import { FormProps } from './interface';

export const Form: React.FC<FormProps> = ({ type }) => {
  const methods = useForm<UserProps>();
  const {
    onLoginUser, onRegisterUser, loadingLoginUser, forgotPassword,
  } = useAuth();
  const [isTypePassword, setIsTypePassword] = useState<'password' | 'text'>('password');

  const isSubmit = useMemo(() => {
    switch (type) {
      case 'login':
        return onLoginUser;
      case 'register':
        return onRegisterUser;
      default:
        return onLoginUser;
    }
  }, [type, onLoginUser, onRegisterUser]);

  return (
    <ContainerForm onSubmit={methods.handleSubmit(isSubmit)}>
      <FormProvider {...methods}>
        {type === 'register' && (
        <Input
          id="nome"
          name="nome"
          type="text"
          label="Nome"
          placeholder="Digite seu nome completo"
          rules={{
            required: {
              message: 'Nome é obrigátório! Verifique.',
              value: true,
            },
          }}
          error={methods.formState.errors.nome?.message}
        />
        )}
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="Digite seu e-mail"
          rules={{
            required: {
              message: 'Email é obrigátório! Verifique.',
              value: true,
            },
            pattern: {
              value: email,
              message: 'Easasmail é inválido! Verifique.',
            },
          }}
          error={methods.formState.errors.email?.message}
        />
        {!forgotPassword && (
        <Input
          id="senha"
          name="senha"
          type={isTypePassword}
          label="Senha"
          placeholder="Digite sua senha"
          rules={{
            required: {
              message: 'Senha é obrigátório! Verifique.',
              value: true,
            },
            min: {
              value: 8,
              message: 'Minímo 8 caracteres',
            },
          }}
          error={methods.formState.errors.senha?.message}
          icon={{
            direction: 'right',
            icon: (
              <IconButton onClick={() => {
                setIsTypePassword(isTypePassword === 'password' ? 'text' : 'password');
              }}
              >
                {isTypePassword === 'password' ? (
                  <PasswordNotView width={24} height={24} color={theme.colors.GREY[850]} />
                ) : (
                  <PasswordView width={24} height={24} color={theme.colors.GREY[850]} />
                )}
              </IconButton>
            ),
          }}
        />
        )}
        {!forgotPassword && (
        <React.Fragment>
          <div className="checkbox">
            <Checkbox
              id="keep-connected"
              name="keep-connected"
              label="Manter conectado"
            />
            {type === 'login' && (
            <Button.Link variant={ButtonVariantProps.OUTLINE_TEXT} text="Esqueceu a senha?" href="#" />
            )}
          </div>
          <div className="btn_submit">
            <Button.Normal type="submit" variant={ButtonVariantProps.PRIMARY} text={type === 'login' ? 'Entrar' : 'Criar conta'} loading={loadingLoginUser} disabled={loadingLoginUser} />
            <p className="small color_grey_950">
              Ao continuar você aceita os
              {' '}
              <a href="#" target="_black">termos de uso</a>
            </p>
          </div>
        </React.Fragment>
        )}
      </FormProvider>
    </ContainerForm>
  );
};
