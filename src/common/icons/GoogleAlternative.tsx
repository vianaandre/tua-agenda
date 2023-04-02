import React from 'react';

import { IIcon } from './interface';

export const GoogleAlternative: React.FC<IIcon> = ({
  width, height, color,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.3503 11.1H12.1803V13.83H18.6903C18.3603 17.64 15.1903 19.27 12.1903 19.27C8.36027 19.27 5.00027 16.25 5.00027 12C5.00027 7.9 8.20027 4.73 12.2003 4.73C15.2903 4.73 17.1003 6.7 17.1003 6.7L19.0003 4.72C19.0003 4.72 16.5603 2 12.1003 2C6.42027 2 2.03027 6.8 2.03027 12C2.03027 17.05 6.16027 22 12.2503 22C17.6003 22 21.5003 18.33 21.5003 12.91C21.5003 11.76 21.3503 11.1 21.3503 11.1Z" fill={color} />
    </svg>
  );
};
