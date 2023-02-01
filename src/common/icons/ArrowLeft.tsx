import React from 'react';

import { IIcon } from './interface';

export const ArrowLeft: React.FC<IIcon> = ({
  width, height, color, stroke = 2,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.1875 9.20581L14.4375 9.20581" stroke={color} stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7.72485 13.724L3.18735 9.20601L7.72485 4.68726" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
