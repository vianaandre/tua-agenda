import React from 'react';

import { IIcon } from './interface';

export const Arrow: React.FC<IIcon> = ({
  width, height, color, stroke = 2,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.75 11.7256L4.75 11.7256" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
