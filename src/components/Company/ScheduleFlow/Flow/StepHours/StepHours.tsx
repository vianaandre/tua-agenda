import React, { useEffect, useMemo } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ptBR from 'date-fns/locale/pt-BR';
import { format, addDays } from 'date-fns';

import { ArrowAlternative } from 'common/icons';
import { Container } from 'common/styles/container';
import { theme } from 'common/styles/theme';
import { useScheduleFlow } from 'common/hooks/useScheduleFlow';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { ContainerStepHours } from './styles';
import { SelectHour } from './SelectHour';
import { WaitingList } from './WaitingList';
import { Loading } from './Loading';

export const StepHours: React.FC = () => {
  const {
    dateAvailable, dateSelect, onSelectDate, hoursAvailablePerDate, onSelectHour, hourSelect, loadingHours,
  } = useScheduleFlow();

  const IconArrow = useMemo((): JSX.Element => {
    return <ArrowAlternative width={24} height={24} color={theme.colors.PRIMARY[500]} />;
  }, []);

  useEffect(() => {
    if (dateAvailable && dateAvailable.length > 0) {
      onSelectDate(new Date(dateAvailable[0]));
    }
  }, [dateAvailable, onSelectDate]);

  return (
    <ContainerStepHours>
      <Container>
        {!loadingHours ? (
          <div className="content">
            <Calendar
              onChange={(date: Date) => onSelectDate(date)}
              value={dateSelect}
              defaultView="month"
              view="month"
              tileClassName="custom_calendar"
              showDoubleView={false}
              prev2Label={null}
              next2Label={null}
              nextLabel={IconArrow}
              prevLabel={IconArrow}
              formatMonthYear={(locale: string, date: Date) => format(date, 'MMMM', {
                locale: ptBR,
              })}
              maxDate={addDays(new Date(), 60)}
              minDate={new Date()}
              tileDisabled={({ date }) => !dateAvailable.find((dateAv) => new Date(dateAv).getDate() === date.getDate() && new Date(dateAv).getMonth() === date.getMonth())}
            />
            <div className="select_hours">
              <h6 className="title_two">Selecione o horário</h6>
              {hoursAvailablePerDate.length > 0 && dateSelect && (
              <ul>
                {hoursAvailablePerDate.map((hourAvailablePerDate) => (
                  <li key={hourAvailablePerDate.hora}>
                    <SelectHour active={hourSelect?.hora === hourAvailablePerDate.hora && hourSelect?.date === format(dateSelect, 'yyyy/MM/dd')} hour={hourAvailablePerDate} onSelect={() => onSelectHour(hourAvailablePerDate, format(dateSelect, 'yyyy/MM/dd'))} />
                  </li>
                ))}
              </ul>
              )}
              {hoursAvailablePerDate.length <= 0 && (
              <WaitingList />
              )}
            </div>
          </div>
        ) : (
          <Loading />
        )}
        <Button.Normal
          text="Próxima etapa"
          variant={ButtonVariantProps.FULL}
          type="button"
          disabled={!hourSelect}
          icon={{
            direction: 'right',
            icon: <ArrowAlternative width={24} height={24} color={theme.colors.WHITE} />,
          }}
          className="next"
        />
      </Container>
    </ContainerStepHours>
  );
};
