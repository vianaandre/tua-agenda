import React, { useState } from 'react';
import * as SelectRadix from '@radix-ui/react-select';
import { Controller } from 'react-hook-form';

import { ArrowSelect } from 'common/icons/ArrowSelect';
import { theme } from 'common/styles/theme';
import { InputVariantProps } from 'common/interface/InputVariantProps';
import { ContainerSelect, ContainerSelectIcon, ContainerSelectSelect } from './styles';
import { SelectProps } from './interface';

export const Select: React.FC<SelectProps> = ({
  id, name, defaultValue, rules, variant = InputVariantProps.OUTLINE, label, options, widthOption, icon, left,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field: { name, onChange, value } }) => (
        <ContainerSelect variant={variant}>
          {variant === InputVariantProps.PRIMARY && label && (
            <label htmlFor={id}>{label}</label>
          )}
          <ContainerSelectSelect variant={variant} widthOption={widthOption} className={`${isOpen ? 'focus' : ''}`} left={left}>
            {icon && icon.direction === 'left' && variant === InputVariantProps.OUTLINE && (
            <ContainerSelectIcon className={`${variant === InputVariantProps.OUTLINE ? 'padding_right' : 'padding_left'}`}>
              {icon.icon}
            </ContainerSelectIcon>
            )}
            <SelectRadix.Root name={name} value={value} onValueChange={onChange} defaultValue={defaultValue} open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
              <SelectRadix.Trigger className="trigger">
                <SelectRadix.Value placeholder="Cidade" />
                <SelectRadix.Icon>
                  <ArrowSelect width={16} height={16} color={theme.colors.GREY[850]} />
                </SelectRadix.Icon>
              </SelectRadix.Trigger>
              <SelectRadix.Portal>
                <SelectRadix.Content className="content-select">
                  <SelectRadix.Viewport>
                    <SelectRadix.Group>
                      {options.map((item) => (
                        <SelectRadix.Item value={item.value} className={`item ${item.value === value ? 'item_active' : ''}`} key={item.value}>
                          <SelectRadix.ItemText className="item_text">
                            {item.innerText}
                          </SelectRadix.ItemText>
                        </SelectRadix.Item>
                      ))}
                    </SelectRadix.Group>
                  </SelectRadix.Viewport>
                </SelectRadix.Content>
              </SelectRadix.Portal>
            </SelectRadix.Root>
          </ContainerSelectSelect>
        </ContainerSelect>
      )}
    />
  );
};
