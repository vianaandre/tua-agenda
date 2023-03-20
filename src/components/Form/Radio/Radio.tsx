import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import { Controller, useFormContext } from 'react-hook-form';

import { ContainerRadio } from './styles';
import { RadioProps } from './interface';

export const Radio: React.FC<RadioProps> = ({
  id, label, name, rules, defaultChecked, ...rest
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      defaultValue={defaultChecked}
      rules={rules}
      control={control}
      render={({ field: { name, onChange, value } }) => (
        <ContainerRadio>
          {label && label.direction === 'left' && (
            <label htmlFor={name}>{label.text}</label>
          )}
          <Switch.Root name={name} onChange={onChange} className={`${value ? 'active' : ''}`} id={id} {...rest}>
            <Switch.Thumb className="radio" />
          </Switch.Root>
          {label && label.direction === 'right' && (
            <label htmlFor={name}>{label.text}</label>
          )}
        </ContainerRadio>
      )}
    />
  );
};
