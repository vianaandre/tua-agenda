import React, { useEffect, useMemo, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ptBR from 'date-fns/locale/pt-BR';
import { format, addDays } from 'date-fns';

import { ArrowAlternative, ArrowLeft } from 'common/icons';
import { Container } from 'common/styles/container';
import { theme } from 'common/styles/theme';
import { useScheduleFlow } from 'common/hooks/useScheduleFlow';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { stepperScheduleFlow } from 'utils/stepper';
import { ContainerStepHours } from './styles';
import { SelectHour } from './SelectHour';
import { WaitingList } from './WaitingList';
import { Loading } from './Loading';

export const StepHours: React.FC = () => {
  const {
    dateAvailable, dateSelect, onSelectDate, hoursAvailablePerDate, onSelectHour, hourSelect, loadingHours, onSelectStepper,
  } = useScheduleFlow();
  const [isSelectHour, setIsSelectHour] = useState<boolean>(false);

  const IconArrow = useMemo((): JSX.Element => {
    return <ArrowAlternative width={24} height={24} color={theme.colors.PRIMARY[500]} />;
  }, []);

  useEffect(() => {
    if (dateAvailable && dateAvailable.length > 0 && !dateSelect) {
      onSelectDate(new Date(dateAvailable[0]));
    }
  }, [dateAvailable, onSelectDate, dateSelect]);

  useEffect(() => {
    setIsSelectHour(true);
  }, [dateSelect]);

  return (
    <ContainerStepHours>
      <Container>
        {!loadingHours ? (
          <div className="content">
            <div className={`calendar ${isSelectHour ? 'select_hour' : 'select_date'}`}>
              <button type="button" className="btn_select_type" onClick={() => setIsSelectHour(true)}>
                <ArrowLeft width={18} height={18} color={theme.colors.BLACK[500]} />
                <h6 className="title_two title_date">Selecionar horário</h6>
              </button>
              <h6 className="title_two title_date">Selecione a data</h6>
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
            </div>
            <div className={`select_hours ${isSelectHour ? 'select_hour' : 'select_date'}`}>
              <button type="button" className="btn_select_type" onClick={() => setIsSelectHour(false)}>
                <ArrowLeft width={18} height={18} color={theme.colors.BLACK[500]} />
                <h6 className="title_two title_date">Selecionar data </h6>
              </button>
              {dateSelect && (
                <h6 className="title_two">
                  Selecione o horário para o dia
                  {' '}
                  {format(new Date(dateSelect), 'dd/MM', {
                    locale: ptBR,
                  })}
                </h6>
              )}
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
          onClick={() => onSelectStepper(stepperScheduleFlow[3])}
        />
      </Container>
    </ContainerStepHours>
  );
};
