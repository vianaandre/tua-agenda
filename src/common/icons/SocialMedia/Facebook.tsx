import React from 'react';

import { IIcon } from '../interface';

export const Facebook: React.FC<IIcon> = ({
  width, height, color,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.35166 12V6.6H5.98996L6.25757 4.2H4.35166V3.03105C4.35166 2.41305 4.36744 1.8 5.23042 1.8H6.10449V0.084082C6.10449 0.058282 5.35369 0 4.59413 0C3.00781 0 2.01455 0.994317 2.01455 2.82012V4.2H0.261719V6.6H2.01455V12H4.35166Z" fill={color} />
    </svg>
  );
};
