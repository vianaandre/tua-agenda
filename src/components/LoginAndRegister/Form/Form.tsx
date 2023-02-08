import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Input, Checkbox } from 'components/Form';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { UserProps } from 'common/interface/UserProps';
import { email } from 'utils/regex';
import { useAuth } from 'common/hooks/useAuth';
import { ContainerForm } from './styles';

export const Form: React.FC = () => {
  const methods = useForm<UserProps>();
  const { onLoginUser } = useAuth();

  return (
    <ContainerForm onSubmit={methods.handleSubmit(onLoginUser)}>
      <FormProvider {...methods}>
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
        <Input
          id="senha"
          name="senha"
          type="senha"
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
        />
        <div className="checkbox">
          <Checkbox
            id="keep-connected"
            name="keep-connected"
            label="Manter conectado"
          />
          <Button.Link variant={ButtonVariantProps.OUTLINE_TEXT} text="Esqueceu a senha?" href="#" />
        </div>
        <div className="btn_submit">
          <Button.Normal type="submit" variant={ButtonVariantProps.PRIMARY} text="Entrar" />
          <p className="small color_grey_950">
            Ao continuar você aceita os
            {' '}
            <a href="#" target="_black">termos de uso</a>
          </p>
        </div>
      </FormProvider>
    </ContainerForm>
  );
};
