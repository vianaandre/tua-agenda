import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { theme } from 'common/styles/theme';
import { Notification as NotificationIcon } from 'common/icons';
import { IconButton } from 'components/IconButton';
import { useAuth } from 'common/hooks/useAuth';
import { Empty } from 'components/Empty';
import { ContainerNotification } from './styles';

export const Notification: React.FC = () => {
  const { notifications } = useAuth();

  return (
    <ContainerNotification>
      <Popover.Root>
        <Popover.Trigger asChild>
          <div className={`btn ${notifications && notifications.length > 0 ? 'active_notifications' : ''}`}>
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
            {notifications && notifications.length > 0 ? (
              <React.Fragment>
                {notifications.map((item) => (
                  <div className="dropdown_notification_content_item">
                    <button type="button">
                      <p className="small">
                        {format(new Date(item.dtInclusao), "dd/MM/yy 'ás' h:mm", {
                          locale: ptBR,
                        })}
                      </p>
                      <p className="small color_dark">{item.titulo}</p>
                    </button>
                  </div>
                ))}
              </React.Fragment>
            ) : (
              <div className="empty">
                <Empty text="Sem notificação" />
              </div>
            )}
            <Popover.Arrow className="popover_notification_content_arrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </ContainerNotification>
  );
};
