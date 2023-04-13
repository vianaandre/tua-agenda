import React from 'react';

import { IIcon } from './interface';

export const Remove: React.FC<IIcon> = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.879 14.121L12 12M14.121 9.879L12 12M12 12L9.879 9.879M12 12L14.121 14.121M21 3.6V20.4C21 20.5591 20.9368 20.7117 20.8243 20.8243C20.7117 20.9368 20.5591 21 20.4 21H3.6C3.44087 21 3.28826 20.9368 3.17574 20.8243C3.06321 20.7117 3 20.5591 3 20.4V3.6C3 3.44087 3.06321 3.28826 3.17574 3.17574C3.28826 3.06321 3.44087 3 3.6 3H20.4C20.5591 3 20.7117 3.06321 20.8243 3.17574C20.9368 3.28826 21 3.44087 21 3.6V3.6Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
