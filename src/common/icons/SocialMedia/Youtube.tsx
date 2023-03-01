import React from 'react';

import { IIcon } from './interface';

export const Youtube: React.FC<IIcon> = ({
  width, height, color,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.3745 15.6305L15.5645 12.6305L10.3745 9.63049V15.6305ZM21.9345 7.80049C22.0645 8.27049 22.1545 8.90049 22.2145 9.70049C22.2845 10.5005 22.3145 11.1905 22.3145 11.7905L22.3745 12.6305C22.3745 14.8205 22.2145 16.4305 21.9345 17.4605C21.6845 18.3605 21.1045 18.9405 20.2045 19.1905C19.7345 19.3205 18.8745 19.4105 17.5545 19.4705C16.2545 19.5405 15.0645 19.5705 13.9645 19.5705L12.3745 19.6305C8.18451 19.6305 5.57451 19.4705 4.54451 19.1905C3.64451 18.9405 3.06451 18.3605 2.81451 17.4605C2.68451 16.9905 2.59451 16.3605 2.53451 15.5605C2.46451 14.7605 2.43451 14.0705 2.43451 13.4705L2.37451 12.6305C2.37451 10.4405 2.53451 8.83049 2.81451 7.80049C3.06451 6.90049 3.64451 6.32049 4.54451 6.07049C5.01451 5.94049 5.87451 5.85049 7.19451 5.79049C8.49451 5.72049 9.68451 5.69049 10.7845 5.69049L12.3745 5.63049C16.5645 5.63049 19.1745 5.79049 20.2045 6.07049C21.1045 6.32049 21.6845 6.90049 21.9345 7.80049Z" fill={color} />
    </svg>
  );
};
