import React from 'react';

import { IIcon } from './interface';

export const Search: React.FC<IIcon> = ({
  width, height, color, stroke = 2,
}) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11.7664" cy="12.2666" r="8.98856" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.0181 18.9852L21.5421 22.5001" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
