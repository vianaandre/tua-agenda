import React, { useMemo, useState } from 'react';
import { format, isAfter } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import * as Popover from '@radix-ui/react-popover';

import { Clock, ArrowAlternative } from 'common/icons';
import { theme } from 'common/styles/theme';
import { ContainerHours } from './styles';
import { HoursProps } from './interface';

export const Hours: React.FC<HoursProps> = ({ days }) => {
  const [isIndex, setIsIndex] = useState<number>();
  const [isActiveOpen, setIsActiveOpen] = useState<boolean>(false);

  const isDayCurrentIsOpen = useMemo(() => {
    let isText = 'Fechado agora';

    days.forEach((item, index) => {
      const isDayCurrent = format(new Date(), 'EEEE', {
        locale: ptBR,
      });

      if (isDayCurrent && item.day.toLowerCase().includes(isDayCurrent.split('-')[0])) {
        const [startHour, endHour] = item.hour.split(' - ');
        const startHourPerHour = startHour.split(':')[0];
        const startHourPerMinute = startHour.split(':')[1];
        const endHourPerHour = endHour.split(':')[0];
        const endHourPerMinute = endHour.split(':')[1];
        const isStart = new Date().setHours(Number(startHourPerHour), Number(startHourPerMinute));
        const isEnd = new Date().setHours(Number(endHourPerHour), Number(endHourPerMinute));
        if (isAfter(new Date(), isStart) && !isAfter(new Date(), isEnd)) {
          isText = `Aberto agora ${item.hour}`;
        }
        setIsIndex(index);
      }
    });

    return isText;
  }, [days]);

  return (
    <ContainerHours>
      <Popover.Root onOpenChange={() => setIsActiveOpen(!isActiveOpen)}>
        <Popover.Trigger asChild>
          <button type="button" className="trigger">
            <Clock width={24} height={24} color={theme.colors.PRIMARY[500]} />
            <p className="small color_normal">
              {isDayCurrentIsOpen}
            </p>
            <div className={`icon_arrow ${isActiveOpen ? 'active_open' : ''}`}>
              <ArrowAlternative width={24} height={24} color={theme.colors.PRIMARY[500]} />
            </div>
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="popover_hours_content">
            <ul>
              {days.map((item, index) => (
                <li key={item.day} className={`item ${index === isIndex ? 'active' : ''}`}>
                  <p className="small">{item.day}</p>
                  <p className="small">{item.hour}</p>
                </li>
              ))}
            </ul>
            <Popover.Arrow className="tooltip_days_content_arrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </ContainerHours>
  );
};
