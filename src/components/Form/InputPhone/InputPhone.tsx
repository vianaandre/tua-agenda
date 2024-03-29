import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { Select, Input } from 'components/Form';
import { InputVariantProps } from 'common/interface/InputVariantProps';
import { ContainerInputPhone } from './styles';
import { InputPhoneProps } from './interface';

export const InputPhone: React.FC<InputPhoneProps> = ({ options, countrys, prefix }) => {
  const { watch, formState } = useFormContext<any>();
  const country = watch(prefix ? `${prefix}.country` : 'country');

  const isErrorsPhone = useMemo(() => {
    if (prefix && formState.errors && formState.errors[prefix]) {
      return (formState.errors[prefix] as any).phone?.message;
    }
    if (formState.errors && formState.errors.phone) {
      return formState.errors && formState.errors.phone.message;
    }
    return undefined;
  }, [formState, prefix]);

  return (
    <ContainerInputPhone>
      <label htmlFor="phone">
        Número do Whatsapp/Celular
        {' '}
        <b>*</b>
      </label>
      <div className="content">
        <Select
          id={prefix ? `${prefix}.country` : 'country'}
          name={prefix ? `${prefix}.country` : 'country'}
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
          id={prefix ? `${prefix}.phone` : 'phone'}
          name={prefix ? `${prefix}.phone` : 'phone'}
          type="tel"
          placeholder={options.length > 0 ? countrys.find((i) => i.countryCode === country)?.phoneMask ?? '(00) 00000-0000' : '(00) 00000-0000'}
          rules={{
            required: {
              value: true,
              message: 'Telefone é obrigatório! Verifique.',
            },
            validate: () => {
            //   if (value) {
            //     console.log('value', value);
            //     const isNumberPhone = value.replaceAll('_', '') as string;

              //     console.log(isNumberPhone.length);
              //     console.log('value', countrys.find((i) => i.countryCode === country)?.phoneMask.length);
              //     if (options.length > 0 && countrys.find((i) => i.countryCode === country) && isNumberPhone.length === countrys.find((i) => i.countryCode === country)?.phoneMask.length) {
              //       return true;
              //     }
              //     return 'Número de telefone é inválido! Verifique.';
              //   }

              return true;
            },
          }}
          disabled={!country}
          error={isErrorsPhone}
          mask={options.length > 0 ? countrys.find((i) => i.countryCode === country)?.phoneMask.replaceAll('0', '9') : '(99) 99999-9999'}
        />
      </div>
    </ContainerInputPhone>
  );
};
