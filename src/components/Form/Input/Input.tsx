import React, { useState } from 'react';

import { Controller, useFormContext } from 'react-hook-form';
import { InputVariantProps } from 'common/interface/InputVariantProps';
import { ContainerInput, ContainerInputIcon, ContainerInputInput } from './styles';
import { IInput } from './interface';

export const Input: React.FC<IInput> = ({
  id, name, type, label, variant = InputVariantProps.PRIMARY, rules, icon, ...rest
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const { control } = useFormContext();

  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field: { name, value, onChange } }) => (
        <ContainerInput variant={variant}>
          {label && variant === InputVariantProps.PRIMARY && (
          <label htmlFor={name}>
            {label}
            {' '}
            {rules && rules.required && (
            <b>*</b>
            )}
          </label>
          )}
          <ContainerInputInput variant={variant} className={`${isFocus ? 'focus' : ''}`}>
            {icon && icon.direction === 'left' && (
            <ContainerInputIcon className={`${variant !== InputVariantProps.OUTLINE ? 'padding_left' : 'padding_right'}`}>
              {icon.icon}
            </ContainerInputIcon>
            )}
            <input type={type} name={name} value={value} onChange={onChange} id={id} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} {...rest} />
          </ContainerInputInput>
        </ContainerInput>
      )}
    />
  );
};