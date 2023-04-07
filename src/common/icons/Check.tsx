import React from 'react';

import { IIcon } from './interface';

export const Check: React.FC<IIcon> = ({
  width, height, color,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.0003 9.33337L12.0003 25.3334L4.66699 18L6.54699 16.12L12.0003 21.56L26.1203 7.45337L28.0003 9.33337Z" fill={color} />
    </svg>
  );
};
