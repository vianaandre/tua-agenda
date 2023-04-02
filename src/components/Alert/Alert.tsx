import React, { useMemo } from 'react';

import { Alert as AlertIcon } from 'common/icons';
import { StatusProps } from 'common/interface/StatusProps';
import { theme } from 'common/styles/theme';
import { AlertProps } from './interface';
import { ContainerAlert } from './styles';

export const Alert: React.FC<AlertProps> = ({ status, message }) => {
  const isIcon = useMemo(() => {
    switch (status) {
      case StatusProps.PENDENTE:
        return <AlertIcon width={32} height={32} color={theme.colors.WARNING} />;
      default:
        return <AlertIcon width={32} height={32} color={theme.colors.WARNING} />;
    }
  }, [status]);

  return (
    <ContainerAlert status={status}>
      {isIcon}
      {message}
    </ContainerAlert>
  );
};
