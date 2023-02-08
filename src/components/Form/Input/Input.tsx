import React, { useState } from 'react';

import { Controller, useFormContext } from 'react-hook-form';
import { InputVariantProps } from 'common/interface/InputVariantProps';
import ReactInputMask from 'react-input-mask';
import {
  ContainerInput, ContainerInputIcon, ContainerInputInput, ContainerInputInputInput,
} from './styles';
import { IInput } from './interface';

export const Input: React.FC<IInput> = ({
  id, name, type, label, variant = InputVariantProps.PRIMARY, rules, icon, error, mask, ...rest
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
          <ContainerInputInput variant={variant} className={`${isFocus ? 'focus' : ''} ${error ? 'error' : ''}`}>
            {icon && icon.direction === 'left' && (
            <ContainerInputIcon className={`${variant !== InputVariantProps.OUTLINE ? 'padding_left' : 'padding_right'} icon_input`}>
              {icon.icon}
            </ContainerInputIcon>
            )}
            <ContainerInputInputInput variant={variant}>
              {mask ? (
                <ReactInputMask mask={mask} maskChar={null} alwaysShowMask={false} value={value} onChange={onChange} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} disabled={rest.disabled} type={type} name={name} id={id}>
                  <input {...rest} />
                </ReactInputMask>
              ) : (
                <input type={type} name={name} value={value} onChange={onChange} id={id} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} {...rest} />
              )}
              {error && (
              <p className="error">{error}</p>
              )}
            </ContainerInputInputInput>
          </ContainerInputInput>
        </ContainerInput>
      )}
    />
  );
};
