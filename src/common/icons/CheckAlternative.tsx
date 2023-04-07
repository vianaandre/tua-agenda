import React from 'react';

import { IIcon } from './interface';

export const CheckAlternative: React.FC<IIcon> = ({
  width, height, color,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.833 2.09058C7.33301 2.09058 2.83301 6.59058 2.83301 12.0906C2.83301 17.5906 7.33301 22.0906 12.833 22.0906C18.333 22.0906 22.833 17.5906 22.833 12.0906C22.833 6.59058 18.333 2.09058 12.833 2.09058ZM10.833 17.0906L5.83301 12.0906L7.24301 10.6806L10.833 14.2606L18.423 6.67058L19.833 8.09058L10.833 17.0906Z" fill={color} />
    </svg>

  );
};
