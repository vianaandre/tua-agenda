import React from 'react';

import { IIcon } from '../interface';

export const Linkedin: React.FC<IIcon> = ({
  width, height, color,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.1394 10H8.14082V6.50049C8.14082 5.54049 7.71762 5.00488 6.95866 5.00488C6.13274 5.00488 5.64259 5.56299 5.64259 6.50049V10H3.64401V3.5H5.64259V4.23096C5.64259 4.23096 6.26964 3.12988 7.68264 3.12988C9.09614 3.12988 10.1394 3.99305 10.1394 5.77905V10ZM1.36662 2.46045C0.692598 2.46045 0.146484 1.90948 0.146484 1.22998C0.146484 0.55098 0.692598 0 1.36662 0C2.04014 0 2.58625 0.55098 2.58625 1.22998C2.58675 1.90948 2.04014 2.46045 1.36662 2.46045ZM0.146484 10H2.64471V3.5H0.146484V10Z" fill={color} />
    </svg>
  );
};
