import React from 'react';
import { createContext } from 'use-context-selector';
import { ToastContainer, toast, TypeOptions } from 'react-toastify';

import { theme } from 'common/styles/theme';
import { Close } from 'common/icons';
import { IconButton } from 'components/IconButton';

interface ToastProps {
    message: string;
    type: TypeOptions;
    timeout?: number;
}

export interface ToastContextProps {
    onToast: ({ message, type }: ToastProps) => void;
}

export const ToastContext = createContext({} as ToastContextProps);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const handleToast = ({ message, type }: ToastProps) => toast(message, {
    type,
  });

  return (
    <ToastContext.Provider value={{ onToast: handleToast }}>
      <ToastContainer
        autoClose={400000000}
        position="top-right"
        className="toast"
        closeButton={() => (
          <IconButton>
            <Close width={16} height={16} color={theme.colors.GREY[950]} />
          </IconButton>
        ) as React.ReactNode}
        style={{
          fontSize: theme.fonts.sizes[14],
          fontWeight: 600,
          fontFamily: theme.fonts.family.ALTERNATIVE,
        }}
      />
      {children}
    </ToastContext.Provider>
  );
};
