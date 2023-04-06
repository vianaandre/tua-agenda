import React from 'react';

import { IIcon } from './interface';

export const Cursor: React.FC<IIcon> = ({
  width, height, color,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3335 13.5867L19.1735 13.76L24.7335 16.5334C25.6668 16.84 26.2801 17.76 26.2001 18.7467V18.92V19.0934L25.0001 27.2534C24.9201 27.8267 24.6668 28.36 24.2001 28.7334C23.7868 29.1334 23.2401 29.3334 22.6668 29.3334H13.4935C12.8401 29.3334 12.2401 29.0934 11.8001 28.6267L3.81348 20.6667L5.01348 19.3334C5.33348 19 5.84014 18.8134 6.32014 18.84H6.70681L12.0001 20V6.00004C12.0001 5.2928 12.2811 4.61452 12.7812 4.11442C13.2813 3.61433 13.9596 3.33337 14.6668 3.33337C15.3741 3.33337 16.0523 3.61433 16.5524 4.11442C17.0525 4.61452 17.3335 5.2928 17.3335 6.00004V13.5867H18.3335Z" fill={color} />
    </svg>
  );
};
