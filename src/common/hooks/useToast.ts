import { useContextSelector } from 'use-context-selector';
import { ToastContext, ToastContextProps } from 'common/context/ToastContext';

export function useToast(): ToastContextProps {
  const onToast = useContextSelector(ToastContext, (toast) => toast.onToast);

  return {
    onToast,
  };
}
