import React from 'react';
import * as Popover from '@radix-ui/react-popover';

import { theme } from 'common/styles/theme';
import { Notification as NotificationIcon } from 'common/icons';
import { IconButton } from 'components/IconButton';
import { ContainerNotification } from './styles';

export const Notification: React.FC = () => {
  return (
    <ContainerNotification>
      <Popover.Root>
        <Popover.Trigger asChild>
          <div className="btn active_notifications">
            <IconButton>
              <NotificationIcon width={24} height={24} color={theme.colors.WHITE} />
            </IconButton>
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content sideOffset={5} className="dropdown_notification_content">
            <header>
              <h6 className="title">Notificações</h6>
            </header>
            <div className="dropdown_notification_content_item">
              <button type="button">
                <p className="small">08/10/22 ás 9:00</p>
                <p className="small color_dark">Agendamento Cancelado!</p>
              </button>
            </div>
            <div className="dropdown_notification_content_item">
              <button type="button">
                <p className="small">08/10/22 ás 9:00</p>
                <p className="small color_dark">Agendamento Cancelado!</p>
              </button>
            </div>
            <div className="dropdown_notification_content_item">
              <button type="button">
                <p className="small">08/10/22 ás 9:00</p>
                <p className="small color_dark">Agendamento Cancelado!</p>
              </button>
            </div>
            <Popover.Arrow className="popover_notification_content_arrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </ContainerNotification>
  );
};
