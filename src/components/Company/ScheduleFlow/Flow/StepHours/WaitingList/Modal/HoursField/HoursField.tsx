import React from 'react';
import { format } from 'date-fns';
import { useFormContext } from 'react-hook-form';

import { Calendar, Hour, Trash } from 'common/icons';
import { theme } from 'common/styles/theme';
import { Input, Radio } from 'components/Form';
import { IconButton } from 'components/IconButton';
import { ContainerHoursFields } from './styles';
import { HoursProps } from './interface';

export const HoursField: React.FC<HoursProps> = ({ fields, onRemove }) => {
  const { formState: { errors }, getValues } = useFormContext();

  return (
    <React.Fragment>
      {fields.map((field, index) => (
        <ContainerHoursFields className={`inputs ${index > 0 ? 'list' : ''}`}>
          <Input
            name={`date[${index}].date`}
            id={`date[${index}].date`}
            type="tel"
            label="Data"
            mask="99/99/9999"
            placeholder="dd/mm/yyyy"
            defaultValue={index === 0 ? format(new Date() ?? new Date(), 'dd/MM/yyy') : undefined}
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
            error={(errors?.date as any)?.[index]?.date?.message}
          />
          <div className="hour">
            <Input
              name={`date[${index}].hour`}
              id={`date[${index}].hour`}
              type="tel"
              label="Horário"
              mask="99:99"
              placeholder="hh:mm"
              rules={{
                required: {
                  value: !getValues(`date[${index}].anyTime`),
                  message: ' ',
                },
              }}
              icon={{
                direction: 'right',
                icon: <Hour width={24} height={24} color={theme.colors.GREY[850]} />,
              }}
              disabled={getValues(`date[${index}].anyTime`)}
              error={(errors?.date as any)?.[index]?.hour?.message}
            />
            <Radio
              name={`date[${index}].anyTime`}
              id={`date[${index}].anyTime`}
              defaultChecked
              label={{
                direction: 'right',
                text: 'Qualquer horário',
              }}
            />
          </div>
          <div className="btn">
            <IconButton onClick={() => onRemove(index)}>
              <Trash width={24} height={24} color={theme.colors.GREY[700]} />
            </IconButton>
          </div>
        </ContainerHoursFields>
      ))}
    </React.Fragment>
  );
};
