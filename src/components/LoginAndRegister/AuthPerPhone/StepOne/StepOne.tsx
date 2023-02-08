import React from 'react';

import { InputPhone } from 'components/Form';
import { useAuth } from 'common/hooks/useAuth';
import { ContainerStepOne } from './styles';

export const StepOne: React.FC = () => {
  const { optionsCountry, countrys } = useAuth();

  return (
    <ContainerStepOne>
      <InputPhone options={optionsCountry} countrys={countrys} />
      <p className="normal color_grey_950">
        Informe seu telefone para enviarmos o
        {' '}
        <strong>código de verificação.</strong>
      </p>
    </ContainerStepOne>
  );
};
