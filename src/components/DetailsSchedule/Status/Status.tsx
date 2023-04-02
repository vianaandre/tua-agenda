import React from 'react';

import { Calendar } from 'common/icons';
import { theme } from 'common/styles/theme';
import { ContainerStatus } from './styles';
import { StatusProps } from './interface';

export const Status: React.FC<StatusProps> = ({ status }) => {
  return (
    <ContainerStatus status={status}>
      <div className="status">
        <div />
        <p className="normal">{status}</p>
      </div>
      <Calendar width={82} height={82} color={theme.colors.WHITE} stroke={1} />
    </ContainerStatus>
  );
};
