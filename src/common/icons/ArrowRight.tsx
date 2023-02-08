import React from 'react';

import { IIcon } from './interface';

export const ArrowRight: React.FC<IIcon> = ({
  width, height, color, stroke = 2,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.4583 9.77157H3.95833" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M11.4168 4.75116L16.4585 9.77116L11.4168 14.792" stroke={color} stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
