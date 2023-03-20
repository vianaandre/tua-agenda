import React from 'react';

import { IIcon } from './interface';

export const Hour: React.FC<IIcon> = ({
  width, height, color,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6.62872V12.6287H18" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 22.6287C17.523 22.6287 22 18.1517 22 12.6287C22 7.10572 17.523 2.62872 12 2.62872C6.477 2.62872 2 7.10572 2 12.6287C2 18.1517 6.477 22.6287 12 22.6287Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
