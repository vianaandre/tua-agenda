import React from 'react';

import { IIcon } from './interface';

export const Link: React.FC<IIcon> = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_187_1735)">
        <path d="M18.4423 15.5549C16.6801 13.7928 13.2698 13.6592 11.2715 15.6575L10.0595 16.8695C8.05132 18.8776 8.00536 22.0886 9.95697 24.0402C11.6385 25.7217 14.2548 25.9197 16.2311 24.6575C16.555 24.4505 16.8554 24.2089 17.127 23.937" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.6142 18.3834C17.3756 20.1448 20.786 20.2784 22.7843 18.2801L23.9962 17.0681C26.0044 15.06 26.0511 11.8497 24.0995 9.89808C22.4173 8.21588 19.8003 8.01718 17.8246 9.28007C17.5008 9.48708 17.2004 9.72868 16.9287 10.0006" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_187_1735">
          <rect width="24" height="24" fill="white" transform="translate(0.0585938 16.9706) rotate(-45)" />
        </clipPath>
      </defs>
    </svg>
  );
};
