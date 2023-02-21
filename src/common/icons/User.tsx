import React from 'react';

import { IIcon } from './interface';

export const User: React.FC<IIcon> = ({
  width, height, color,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0421 4.8877C13.103 4.8877 14.1204 5.30912 14.8705 6.05927C15.6207 6.80941 16.0421 7.82683 16.0421 8.8877C16.0421 9.94856 15.6207 10.966 14.8705 11.7161C14.1204 12.4663 13.103 12.8877 12.0421 12.8877C10.9812 12.8877 9.96383 12.4663 9.21369 11.7161C8.46354 10.966 8.04211 9.94856 8.04211 8.8877C8.04211 7.82683 8.46354 6.80941 9.21369 6.05927C9.96383 5.30912 10.9812 4.8877 12.0421 4.8877ZM12.0421 6.8877C11.5117 6.8877 11.003 7.09841 10.6279 7.47348C10.2528 7.84855 10.0421 8.35726 10.0421 8.8877C10.0421 9.41813 10.2528 9.92684 10.6279 10.3019C11.003 10.677 11.5117 10.8877 12.0421 10.8877C12.5725 10.8877 13.0813 10.677 13.4563 10.3019C13.8314 9.92684 14.0421 9.41813 14.0421 8.8877C14.0421 8.35726 13.8314 7.84855 13.4563 7.47348C13.0813 7.09841 12.5725 6.8877 12.0421 6.8877ZM12.0421 13.8877C14.7121 13.8877 20.0421 15.2177 20.0421 17.8877V20.8877H4.04211V17.8877C4.04211 15.2177 9.37211 13.8877 12.0421 13.8877ZM12.0421 15.7877C9.07211 15.7877 5.94211 17.2477 5.94211 17.8877V18.9877H18.1421V17.8877C18.1421 17.2477 15.0121 15.7877 12.0421 15.7877Z" fill={color} />
    </svg>
  );
};