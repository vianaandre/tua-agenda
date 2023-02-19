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
    onLoginUser, onRegisterUser, loadingLoginUser, forgotPassword, onForgotPassword, onSendEmailForForgotPassword, loadingSendForgotPassword, sendForgotPassword,
  } = useAuth();
  const [isTypePassword, setIsTypePassword] = useState<'password' | 'text'>('password');

  const isSubmit = useMemo(() => {
    switch (type) {
      case 'login':
        return !forgotPassword ? onLoginUser : onSendEmailForForgotPassword;
      case 'register':
        return onRegisterUser;
      default:
        return onLoginUser;
    }
  }, [type, onLoginUser, onRegisterUser, onSendEmailForForgotPassword, forgotPassword]);

  const isTextButton = useMemo(() => {
    switch (type) {
      case 'login':
        return !forgotPassword ? 'Entrar' : 'Redefinir senha';
      case 'register':
        return 'Criar conta';
      default:
        return !forgotPassword ? 'Entrar' : 'Redefinir senha';
    }
  }, [type, forgotPassword]);

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
        {(!sendForgotPassword || !forgotPassword) && (
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
              message: 'E-mail é inválido! Verifique.',
            },
          }}
          error={methods.formState.errors.email?.message}
        />
        )}
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
        <React.Fragment>
          {!forgotPassword && (
            <div className="checkbox">
              <Checkbox
                id="keep-connected"
                name="keep-connected"
                label="Manter conectado"
              />
              {type === 'login' && (
              <Button.Normal variant={ButtonVariantProps.OUTLINE_TEXT} text="Esqueceu a senha?" type="button" onClick={() => onForgotPassword(!forgotPassword)} />
              )}
            </div>
          )}
          <div className="btn_submit">
            {!sendForgotPassword ? (
              <Button.Normal type="submit" variant={ButtonVariantProps.PRIMARY} text={isTextButton} loading={loadingLoginUser || loadingSendForgotPassword} disabled={loadingLoginUser || loadingSendForgotPassword} />
            ) : (
              <Button.Normal type="button" text="Voltar para página de autenticação" variant={ButtonVariantProps.PRIMARY} onClick={() => onForgotPassword(!forgotPassword)} />
            )}
            {!forgotPassword && (
            <p className="small color_grey_950">
              Ao continuar você aceita os
                {' '}
              <a href="#" target="_black">termos de uso</a>
            </p>
            )}
          </div>
        </React.Fragment>
      </FormProvider>
    </ContainerForm>
  );
};
