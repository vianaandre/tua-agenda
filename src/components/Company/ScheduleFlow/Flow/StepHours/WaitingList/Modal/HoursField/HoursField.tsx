import React from 'react';
import { format, isAfter } from 'date-fns';
import { useFormContext } from 'react-hook-form';

import { Calendar, Hour, Trash } from 'common/icons';
import { theme } from 'common/styles/theme';
import { Input, Radio } from 'components/Form';
import { IconButton } from 'components/IconButton';
import { ContainerHoursFields } from './styles';
import { HoursProps } from './interface';

export const HoursField: React.FC<HoursProps> = ({ fields, onRemove }) => {
  const { formState: { errors }, watch } = useFormContext();

  return (
    <React.Fragment>
      {fields.map((field, index) => {
        const isRadio = watch(`date[${index}].anyTime`);

        return (
          <ContainerHoursFields className={`inputs ${fields.length > 1 ? 'list' : ''}`}>
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
                validate: (date: string) => {
                  if (date && date.length >= 10) {
                    const [day, month, year] = date.split('/');
                    const isDate = new Date(Number(year), Number(month) - 1, Number(day));
                    const isCurrentDate = new Date();

                    if (isAfter(isDate, isCurrentDate) || (isCurrentDate.getDate() === isDate.getDate() && isCurrentDate.getFullYear() === isDate.getFullYear() && isCurrentDate.getMonth() === isDate.getMonth())) {
                      return true;
                    }

                    return 'Data inválida! Verique.';
                  }

                  return 'Data inválida! Verique.';
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
                    value: !isRadio,
                    message: ' ',
                  },
                  validate: (hour: string) => {
                    if (!isRadio) {
                      if (hour && hour.length >= 5 && /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(hour)) {
                        return true;
                      }

                      return ' ';
                    }

                    return true;
                  },
                }}
                icon={{
                  direction: 'right',
                  icon: <Hour width={24} height={24} color={theme.colors.GREY[850]} />,
                }}
                disabled={isRadio}
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
        );
      })}
    </React.Fragment>
  );
};
