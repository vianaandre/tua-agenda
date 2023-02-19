import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Select, Input } from 'components/Form';
import { InputVariantProps } from 'common/interface/InputVariantProps';
import { AuthPerPhoneProps } from 'common/interface/AuthPerPhoneProps';
import { ContainerInputPhone } from './styles';
import { InputPhoneProps } from './interface';

export const InputPhone: React.FC<InputPhoneProps> = ({ options, countrys }) => {
  const { watch, formState } = useFormContext<AuthPerPhoneProps>();
  const country = watch('country');

  return (
    <ContainerInputPhone>
      <label htmlFor="phone">
        Número do Whatsapp/Celular
        {' '}
        <b>*</b>
      </label>
      <div className="content">
        <Select
          id="country"
          name="country"
          left={0}
          options={options}
          widthOption={0}
          variant={InputVariantProps.PRIMARY}
          placeholder="Código"
          disabled={options.length <= 0}
          rules={{
            required: {
              value: true,
              message: 'Campo de código obrigatório! Verifique.',
            },
          }}
        />
        <Input
          name="phone"
          id="phone"
          type="tel"
          placeholder={options.length > 0 ? countrys.find((i) => i.countryCode === country)?.phoneMask : '(00) 00000-0000'}
          rules={{
            required: {
              value: true,
              message: 'Telefone é obrigatório! Verifique.',
            },
            validate: (value) => {
              if (value) {
                const isNumberPhone = value.replaceAll('_', '') as string;
                if (options.length > 0 && countrys.find((i) => i.countryCode === country) && isNumberPhone.length === countrys.find((i) => i.countryCode === country)?.phoneMask.length) {
                  return true;
                }
                return 'Número de telefone é inválido! Verifique.';
              }

              return true;
            },
          }}
          disabled={!country}
          error={formState.errors.phone?.message}
          mask={options.length > 0 ? countrys.find((i) => i.countryCode === country)?.phoneMask.replaceAll('0', '9') : '(99) 99999-9999'}
        />
      </div>
    </ContainerInputPhone>
  );
};
