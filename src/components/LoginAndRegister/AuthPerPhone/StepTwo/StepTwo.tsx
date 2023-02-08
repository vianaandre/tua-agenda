import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { InputCode } from 'components/Form/InputCode';
import { AuthPerPhoneProps } from 'common/interface/AuthPerPhoneProps';
import { ContainerStepTwo } from './styles';

const COUNT_INITIAL_TIME_IN_SECONDS = 20 * 60; // 15 MINUTOS

export const StepTwo: React.FC = () => {
  const {
    formState, clearErrors, watch, setError,
  } = useFormContext<AuthPerPhoneProps>();
  const code = watch('code');

  const [isSecondsAmount, setIsSecondsAmount] = useState<number>(COUNT_INITIAL_TIME_IN_SECONDS);

  useEffect(() => {
    if (isSecondsAmount <= 0) {
      setIsSecondsAmount(0);
      return;
    }
    const timeout = setTimeout(() => {
      setIsSecondsAmount((state) => state - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isSecondsAmount]);

  const minutes = Math.floor(isSecondsAmount / 60);
  const seconds = isSecondsAmount % 60;

  useEffect(() => {
    return () => clearErrors();
  }, [code, clearErrors, setError]);

  return (
    <ContainerStepTwo>
      <InputCode
        inputMode="tel"
        name="code"
        label="Código de verificação"
        type="tel"
        rules={{
          required: {
            value: true,
            message: 'Campo de código obrigatório! Verifique.',
          },
          validate: (value: string) => {
            if (value.length < 6) {
              return 'Código inválido! Verifique.';
            }
            return true;
          },
        }}
        error={formState.errors.code?.message}
      />
      <p className="normal color_grey_950">
        Foi enviado um SMS para o número
        {' '}
        <strong>+55 (45) 98837-8294.</strong>
      </p>
      <p className="normal color_grey_950">
        Código irá expirar em
        {' '}
        <strong>
          {String(minutes).padStart(2, '0')}
          :
          {String(seconds).padStart(2, '0')}
        </strong>
      </p>
    </ContainerStepTwo>
  );
};
