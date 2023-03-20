import React, { useEffect } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { Controller, useFormContext } from 'react-hook-form';

import { ContainerRadio } from './styles';
import { RadioProps } from './interface';

export const Radio: React.FC<RadioProps> = ({
  id, label, name, rules, defaultChecked, ...rest
}) => {
  const { control } = useFormContext();

  useEffect(() => {
    if (defaultChecked) {
      (document.getElementById(name) as HTMLButtonElement).click();
    }
  }, [name, defaultChecked]);

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
          <Switch.Root name={name} onCheckedChange={onChange} className={`${value ? 'active' : ''}`} id={id} value={value} {...rest}>
            <Switch.Thumb className="radio" id={id} />
          </Switch.Root>
          {label && label.direction === 'right' && (
            <label htmlFor={name}>{label.text}</label>
          )}
        </ContainerRadio>
      )}
    />
  );
};
