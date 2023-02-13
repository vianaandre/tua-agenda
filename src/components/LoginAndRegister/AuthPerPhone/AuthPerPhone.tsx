import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useAuth } from 'common/hooks/useAuth';
import { AuthPerPhoneProps } from 'common/interface/AuthPerPhoneProps';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { ContainerAuthPerPhone } from './styles';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';

export const AuthPerPhone: React.FC = () => {
  const methods = useForm<AuthPerPhoneProps>();
  const {
    onLoadCountry, onNextAuthPerPhone, stepperTypeAuthPerPhone, countrys, loadingAuthPerPhone, optionsCountry,
  } = useAuth();

  useEffect(() => {
    if (countrys.length <= 0) {
      onLoadCountry();
    }
  }, [onLoadCountry, countrys]);

  useEffect(() => {
    if (optionsCountry && optionsCountry.length > 0) {
      methods.setValue('country', optionsCountry[4].value);
    }
  }, [optionsCountry, methods]);

  return (
    <ContainerAuthPerPhone onSubmit={methods.handleSubmit(onNextAuthPerPhone)}>
      <FormProvider {...methods}>
        {stepperTypeAuthPerPhone && stepperTypeAuthPerPhone.stepper === 0 && (
        <StepOne />
        )}
        {stepperTypeAuthPerPhone && stepperTypeAuthPerPhone.stepper === 1 && (
        <StepTwo />
        )}
        <div className="btn_submit">
          <Button.Normal text="Enviar" variant={ButtonVariantProps.PRIMARY} type="submit" disabled={Object.entries(methods.formState.errors).length > 0 || loadingAuthPerPhone} loading={loadingAuthPerPhone} />
        </div>
      </FormProvider>
    </ContainerAuthPerPhone>
  );
};
