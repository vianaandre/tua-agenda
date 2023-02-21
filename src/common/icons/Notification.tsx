import React from 'react';

import { IIcon } from './interface';

export const Notification: React.FC<IIcon> = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.73 21C13.5544 21.3033 13.3021 21.5552 12.9985 21.7302C12.6948 21.9053 12.3505 21.9974 12 21.9974C11.6495 21.9974 11.3052 21.9053 11.0015 21.7302C10.6979 21.5552 10.4456 21.3033 10.27 21M18 8.4C18 6.703 17.368 5.075 16.243 3.875C15.117 2.675 13.59 2 12 2C10.409 2 8.883 2.674 7.757 3.875C6.632 5.075 6 6.703 6 8.4C6 15.867 3 18 3 18H21C21 18 18 15.867 18 8.4Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
