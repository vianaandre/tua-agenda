import React from 'react';

import { ContainerSelectHour } from './styles';
import { SelectHourProps } from './interface';

export const SelectHour: React.FC<SelectHourProps> = ({ active, hour, onSelect }) => {
  return (
    <ContainerSelectHour type="button" onClick={onSelect} className={`${active ? 'active' : ''}`} disabled={!hour.disponivel}>
      <div className="checkbox">
        <div />
      </div>
      <p className="small color_dark">
        {hour.hora}
        {' '}
        AM
      </p>
    </ContainerSelectHour>
  );
};
