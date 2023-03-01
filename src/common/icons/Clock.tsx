import React from 'react';

import { IIcon } from './interface';

export const Clock: React.FC<IIcon> = ({
  width, height, color,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6V12H18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
