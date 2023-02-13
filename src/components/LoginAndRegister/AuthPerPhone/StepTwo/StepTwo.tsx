import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { format } from 'date-fns';

import { InputCode } from 'components/Form/InputCode';
import { AuthPerPhoneProps } from 'common/interface/AuthPerPhoneProps';
import { useAuth } from 'common/hooks/useAuth';
import { ContainerStepTwo } from './styles';

export const StepTwo: React.FC = () => {
  const {
    formState, clearErrors, watch, setError,
  } = useFormContext<AuthPerPhoneProps>();
  const { expirationMessageSMS } = useAuth();
  const code = watch('code');
  const phone = watch('phone');
  const country = watch('country');

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
        <strong>
          +
          {country}
          {' '}
          {phone}
        </strong>
      </p>
      {expirationMessageSMS && (
      <p className="normal color_grey_950">
        Código irá expirar ás
        {' '}
        <strong>
          {format(new Date(expirationMessageSMS), 'HH:mm:ss')}
        </strong>
      </p>
      )}
    </ContainerStepTwo>
  );
};
