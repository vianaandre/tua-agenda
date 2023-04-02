import React, { useMemo, useState } from 'react';
import Link from 'next/link';

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
import { LoginAndRegisterProps } from './interface';

export const LoginAndRegister: React.FC<LoginAndRegisterProps> = ({ type, variant = 'flow-auth' }) => {
  const {
    stepperTypeAuthPerPhone, onBackStepperFlowAuthPerPhone, forgotPassword, onForgotPassword, sendForgotPassword, authPerScheduleFlow, onAuthPerScheduleFlow,
  } = useAuth();
  const [isType, setIsType] = useState<'login' | 'register'>(type);

  const isTextButton = useMemo(() => {
    switch (isType) {
      case 'login':
        return forgotPassword ? 'Voltar' : 'Criar conta';
      case 'register':
        return 'Acessar conta';
      default:
        return forgotPassword ? 'Voltar' : 'Acessar conta';
    }
  }, [isType, forgotPassword]);

  const handleChangeType = (isTypeChange: 'login' | 'register') => setIsType(isTypeChange);

  return (
    <ContainerLoginAndRegister className={authPerScheduleFlow ? '' : 'not_auth_flow_schedule'}>
      <ContainerLoginAndRegisterContent>
        <div className="content_auth">
          <header>
            {variant === 'flow-schedule' ? (
              <Button.Normal
                text="Voltar"
                variant={ButtonVariantProps.OUTLINE_TEXT}
                onClick={() => onAuthPerScheduleFlow(false)}
                type="button"
                className="back_schedulo_flow"
                icon={{
                  direction: 'left',
                  icon: <ArrowLeft color={theme.colors.PRIMARY[500]} height={20} width={20} />,
                }}
              />
            ) : (
              <Link href="/" passHref>
                <a>
                  <Logo width={159} height={19} color={theme.colors.PRIMARY[500]} />
                </a>
              </Link>
            )}
            {!stepperTypeAuthPerPhone && (
            <React.Fragment>
              {!forgotPassword && (
                variant === 'flow-schedule' ? (
                  <Button.Normal
                    text={isTextButton}
                    variant={ButtonVariantProps.OUTLINE_TEXT}
                    onClick={() => handleChangeType(isType === 'login' ? 'register' : 'login')}
                    type="button"
                    icon={{
                      direction: 'right',
                      icon: <ArrowRight color={theme.colors.PRIMARY[500]} height={20} width={20} />,
                    }}
                  />
                ) : (
                  <Button.Link
                    text={isTextButton}
                    variant={ButtonVariantProps.OUTLINE_TEXT}
                    href={isType === 'login' ? '/register' : '/login'}
                    icon={{
                      direction: 'right',
                      icon: <ArrowRight color={theme.colors.PRIMARY[500]} height={20} width={20} />,
                    }}
                  />
                ))}
              {forgotPassword && (
                <Button.Normal
                  type="button"
                  text={isTextButton}
                  variant={ButtonVariantProps.OUTLINE_TEXT}
                  icon={{
                    direction: 'left',
                    icon: <ArrowLeft color={theme.colors.PRIMARY[500]} height={20} width={20} />,
                  }}
                  onClick={() => {
                    onForgotPassword(!forgotPassword);
                  }}
                />
              )}
            </React.Fragment>
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
            {!forgotPassword && (
            <AuthSocial />
            )}
            {!forgotPassword && (
            <div className="or">
              <div />
              <p className="normal color_dark">Ou entre com seu email</p>
              <div />
            </div>
            )}
            {forgotPassword && (
            <div className="forgot_password">
                {!sendForgotPassword ? (
                  <p className="normal color_grey_950">
                    Insira seu
                    {' '}
                    <strong>e-mail</strong>
                    {' '}
                    para podermos enviar um link seguro de redefinição de senha.
                  </p>
                )
                  : (
                    <React.Fragment>
                      <p className="normal color_grey_950">
                        O e-email de redefinição de senha foi enviado para
                        {' '}
                        <strong>
                          {sendForgotPassword}
                          .
                        </strong>
                      </p>
                      <p className="normal color_grey_950">
                        Verifique sua caixa de entrada para redefinir sua senha.
                      </p>
                    </React.Fragment>
                  )}
            </div>
            )}
            <Form type={isType} />
          </React.Fragment>
          )}
          {stepperTypeAuthPerPhone && (
          <AuthPerPhone />
          )}
        </div>
      </ContainerLoginAndRegisterContent>
      <Phrase />
    </ContainerLoginAndRegister>
  );
};
