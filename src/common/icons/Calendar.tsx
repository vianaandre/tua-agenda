import React from 'react';

import { IIcon } from './interface';

export const Calendar: React.FC<IIcon> = ({
  width, height, color, stroke = 2,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 4V2M15 4V6M15 4H10.5M3 10V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H7M7 2V6M21 10V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H18.5M3 10V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V10H3Z" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
