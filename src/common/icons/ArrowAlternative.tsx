import React from 'react';

import { IIcon } from './interface';

export const ArrowAlternative: React.FC<IIcon> = ({
  width, height, color, stroke = 1.5,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 6L15 12L9 18" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
