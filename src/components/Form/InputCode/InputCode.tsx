import React from 'react';
import dynamic from 'next/dynamic';

import { Controller, useFormContext } from 'react-hook-form';
import { ContainerInputCode } from './styles';
import { InputCodeProps } from './interface';

const ReactCodeInput = dynamic(import('react-code-input'));

export const InputCode: React.FC<InputCodeProps> = ({
  name, rules, label, error, ...rest
}) => {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value } }) => (
        <ContainerInputCode className={error ? 'error_code' : ''}>
          {label && (
          <label htmlFor={name}>{label}</label>
          )}
          <ReactCodeInput
            fields={6}
            value={value}
            onChange={(event) => {
              setValue(name, event);
            }}
            name={name}
            {...rest}
          />
          {error && (
          <p className="error">{error}</p>
          )}
        </ContainerInputCode>
      )}
    />
  );
};
