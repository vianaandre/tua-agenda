import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { ContainerCheckbox } from './styles';
import { CheckboxProps } from './interface';

export const Checkbox: React.FC<CheckboxProps> = ({
  id, name, label, ...rest
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { name, onChange, value } }) => (
        <ContainerCheckbox>
          <CheckboxRadix.Root
            onCheckedChange={onChange}
            id={id}
            name={name}
            className={`root ${value ? 'active' : ''}`}
            {...rest}
          >
            <CheckboxRadix.Indicator
              className="indicator"
            />
          </CheckboxRadix.Root>
          <label htmlFor={id}>{label}</label>
        </ContainerCheckbox>
      )}
    />
  );
};
