import React from 'react';
import { format } from 'date-fns';
import { useFormContext } from 'react-hook-form';

import { Calendar, Hour, Trash } from 'common/icons';
import { theme } from 'common/styles/theme';
import { Input, Radio } from 'components/Form';
import { IconButton } from 'components/IconButton';
import { HoursProps } from './interface';
import { ContainerHours } from './styles';

export const Hours: React.FC<HoursProps> = ({
  index, nameInputDate, nameInputHour, nameRadioHour, dateSelect, onRemove,
}) => {
  const { watch, formState: { errors } } = useFormContext();
  const isInputRadio = watch(`date.${nameRadioHour}`);

  return (
    <ContainerHours className={`inputs ${index > 0 ? 'list' : ''}`}>
      <Input
        name={`date.${nameInputDate}`}
        id={`date.${nameInputDate}`}
        type="tel"
        label="Data"
        mask="99/99/9999"
        placeholder="dd/mm/yyyy"
        defaultValue={index === 0 ? format(dateSelect ?? new Date(), 'dd/MM/yyy') : undefined}
        rules={{
          required: {
            value: true,
            message: 'Campo obrigátorio! Verique.',
          },
        }}
        icon={{
          direction: 'right',
          icon: <Calendar width={24} height={24} color={theme.colors.GREY[850]} />,
        }}
        error={errors && (errors as any).date && (errors as any).date[nameInputDate] ? ((errors as any).date[nameInputDate]?.message as string) ?? undefined : undefined}
      />
      <div className="hour">
        <Input
          name={`date.${nameInputHour}`}
          id={`date.${nameInputHour}`}
          type="tel"
          label="Horário"
          mask="99:99"
          placeholder="hh:mm"
          rules={{
            required: {
              value: !isInputRadio,
              message: ' ',
            },
          }}
          icon={{
            direction: 'right',
            icon: <Hour width={24} height={24} color={theme.colors.GREY[850]} />,
          }}
          disabled={isInputRadio}
          error={!isInputRadio && errors && (errors as any).date && (errors as any).date[nameInputHour] ? ((errors as any).date[nameInputHour]?.message as string) ?? undefined : undefined}
        />
        <Radio
          name={`date.${nameRadioHour}`}
          id={`date.${nameRadioHour}`}
          defaultChecked
          label={{
            direction: 'right',
            text: 'Qualquer horário',
          }}
        />
      </div>
      <div className="btn">
        <IconButton onClick={onRemove}>
          <Trash width={24} height={24} color={theme.colors.GREY[700]} />
        </IconButton>
      </div>
    </ContainerHours>
  );
};
