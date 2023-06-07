import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { Input, Select } from 'components/Form';
import { InputVariantProps } from 'common/interface/InputVariantProps';
import { Search, Location } from 'common/icons';
import { theme } from 'common/styles/theme';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { useCities } from 'common/hooks/useCities';
import { SearchServiceFormProps } from 'common/interface/Form/SearchServiceFormProps';
import { useHome } from 'common/hooks/useHome';
import { ContainerFormSearch, ContainerFormInputs } from './styles';

export const FormSearch: React.FC = () => {
  const methods = useForm<SearchServiceFormProps>();
  const { cities } = useCities();
  const { onLoadServicePerServiceAndCity } = useHome();
  const { formatMessage } = useIntl();

  const onSubmit = (data: SearchServiceFormProps) => {
    onLoadServicePerServiceAndCity(data);
  };

  return (
    <ContainerFormSearch onSubmit={methods.handleSubmit(onSubmit)}>
      <FormProvider {...methods}>
        <ContainerFormInputs>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={formatMessage({
              id: 'FORM_SEARCH_INPUT_ONE_PLACEHOLDER',
            })}
            variant={InputVariantProps.OUTLINE}
            icon={{
              icon: <Search width={24} height={25} stroke={2} color={theme.colors.BLACK[500]} />,
              direction: 'left',
            }}
            rules={{
              required: {
                message: formatMessage({
                  id: 'REQUIRED',
                }),
                value: true,
              },
            }}
            error={methods.formState.errors.name?.message}
          />
        </ContainerFormInputs>
        <ContainerFormInputs>
          <Select
            name="city"
            id="city"
            icon={{
              icon: <Location width={24} height={24} color={theme.colors.BLACK[500]} />,
              direction: 'left',
            }}
            variant={InputVariantProps.OUTLINE}
            options={cities.map((item) => ({
              innerText: item.cidade,
              value: item.cidade,
            }))}
            widthOption={231}
            left={19}
            placeholder={formatMessage({
              id: 'CITY',
            })}
          />
        </ContainerFormInputs>
        <Button.Normal
          type="submit"
          text={formatMessage({
            id: 'FORM_SEARCH_BUTTON',
          })}
          variant={ButtonVariantProps.PRIMARY}
          className="btn_submit"
        />
      </FormProvider>
    </ContainerFormSearch>
  );
};
