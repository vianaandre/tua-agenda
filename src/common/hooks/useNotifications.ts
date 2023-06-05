import { useContextSelector } from 'use-context-selector';
import { NotificationsContext } from 'common/context/NotificationsContext';

export function useNotifications() {
  const notifications = useContextSelector(NotificationsContext, (notification) => notification.notifications);
  const loading = useContextSelector(NotificationsContext, (notification) => notification.loading);

  return {
    notifications,
    loading,
  };
}
