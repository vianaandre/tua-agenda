import React from 'react';

import { Logo, ArrowRight, ArrowLeft } from 'common/icons';
import { theme } from 'common/styles/theme';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { useAuth } from 'common/hooks/useAuth';
import { ContainerLoginAndRegister, ContainerLoginAndRegisterContent } from './styles';
import { Phrase } from './Phrase';
import { AuthSocial } from './AuthSocial';
import { Form } from './Form';
import { AuthPerPhone } from './AuthPerPhone';

export const LoginAndRegister: React.FC = () => {
  const { stepperTypeAuthPerPhone, onBackStepperFlowAuthPerPhone } = useAuth();

  return (
    <ContainerLoginAndRegister>
      <ContainerLoginAndRegisterContent>
        <header>
          <Logo width={159} height={19} color={theme.colors.PRIMARY[500]} />
          {!stepperTypeAuthPerPhone && (
          <Button.Normal
            text="Criar conta"
            type="button"
            variant={ButtonVariantProps.OUTLINE_TEXT}
            icon={{
              direction: 'right',
              icon: <ArrowRight color={theme.colors.PRIMARY[500]} height={20} width={20} />,
            }}
          />
          )}
          {stepperTypeAuthPerPhone && (
          <Button.Normal
            text="Voltar"
            type="button"
            variant={ButtonVariantProps.OUTLINE_TEXT}
            icon={{
              direction: 'left',
              icon: <ArrowLeft color={theme.colors.PRIMARY[500]} height={20} width={20} />,
            }}
            onClick={onBackStepperFlowAuthPerPhone}
          />
          )}
        </header>
        {!stepperTypeAuthPerPhone && (
        <React.Fragment>
          <AuthSocial />
          <div className="or">
            <div />
            <p className="normal color_dark">Ou entre com seu email</p>
            <div />
          </div>
          <Form />
        </React.Fragment>
        )}
        {stepperTypeAuthPerPhone && (
        <AuthPerPhone />
        )}
      </ContainerLoginAndRegisterContent>
      <Phrase />
    </ContainerLoginAndRegister>
  );
};
