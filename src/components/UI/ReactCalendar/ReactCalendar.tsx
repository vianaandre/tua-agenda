import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useMemo } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { ArrowAlternative } from 'common/icons';
import { theme } from 'common/styles/theme';
import { ContainerReactCalendar } from './styles';
import { ReactCalendarTypes } from './types';

export const ReactCalendar: React.FC<ReactCalendarTypes> = ({ ...rest }) => {
  const IconArrow = useMemo((): JSX.Element => {
    return <ArrowAlternative width={24} height={24} color={theme.colors.PRIMARY[500]} />;
  }, []);

  return (
    <ContainerReactCalendar>
      <Calendar
        defaultView="month"
        view="month"
        showDoubleView={false}
        prev2Label={null}
        next2Label={null}
        nextLabel={IconArrow}
        prevLabel={IconArrow}
        formatMonthYear={(locale: string, date: Date) => format(date, 'MMMM', {
          locale: ptBR,
        })}
        tileClassName="custom_calendar"
        {...rest}
      />
    </ContainerReactCalendar>
  );
};
