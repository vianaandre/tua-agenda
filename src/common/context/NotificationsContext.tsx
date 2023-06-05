import { useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';
import { useToast } from 'common/hooks/useToast';
import { listNotification } from 'services/modules/notification';
import { getCookie } from 'cookies-next';
import { NotificationProps } from 'common/interface/NotificationProps';

type Loading = 'notifications' | undefined;

type NotificationsContextProps = {
    notifications?: NotificationProps[];
    loading: Loading;
}

export const NotificationsContext = createContext({} as NotificationsContextProps);

export function NotificationsProvider({ children }: { children: React.ReactNode }) {
  const { onToast } = useToast();

  const [isLoading, setIsLoading] = useState<Loading>('notifications');
  const [isNotifications, setIsNotifications] = useState<NotificationProps[]>();

  const handleLoadNotifications = useCallback(async () => {
    try {
      setIsLoading('notifications');
      const isToken = getCookie('@Auth:token') as string;
      const isIdUser = getCookie('@Auth:id') as string;

      if (isToken && isIdUser) {
        const notifications = await listNotification(isToken, isIdUser, 0, 50);

        setIsNotifications(notifications);
      }

      setIsLoading(undefined);
    } catch (err: any) {
      setIsLoading('notifications');
      onToast({
        message: err.message ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast]);

  useEffect(() => {
    handleLoadNotifications();
  }, [handleLoadNotifications]);

  return (
    <NotificationsContext.Provider value={{ notifications: isNotifications, loading: isLoading }}>
      {children}
    </NotificationsContext.Provider>
  );
}
