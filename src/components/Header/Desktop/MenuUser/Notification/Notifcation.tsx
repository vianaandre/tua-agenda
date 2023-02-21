import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { theme } from 'common/styles/theme';
import { Notification as NotificationIcon } from 'common/icons';
import { IconButton } from 'components/IconButton';
import { ContainerNotification } from './styles';

export const Notification: React.FC = () => {
  return (
    <ContainerNotification>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <div className="btn active_notifications">
            <IconButton>
              <NotificationIcon width={24} height={24} color={theme.colors.WHITE} />
            </IconButton>
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content sideOffset={5} className="dropdown_notification_content">
            <header>
              <h6 className="title">Notificações</h6>
            </header>
            <DropdownMenu.Item className="dropdown_notification_content_item">
              <button type="button">
                <p className="small">08/10/22 ás 9:00</p>
                <p className="small color_dark">Agendamento Cancelado!</p>
              </button>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="dropdown_notification_content_item">
              <button type="button">
                <p className="small">08/10/22 ás 9:00</p>
                <p className="small color_dark">Agendamento Cancelado!</p>
              </button>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="dropdown_notification_content_item">
              <button type="button">
                <p className="small">08/10/22 ás 9:00</p>
                <p className="small color_dark">Agendamento Cancelado!</p>
              </button>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </ContainerNotification>
  );
};
