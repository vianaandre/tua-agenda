import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { ContainerLoading } from './styles';

export const Loading: React.FC = () => {
  return (
    <ContainerLoading>
      <div className="loading_calendar">
        <p className="header">
          <Skeleton count={1} style={{ height: '100%' }} />
        </p>
        <div className="calendar">
          <Skeleton count={1} style={{ height: '100%' }} />
        </div>
      </div>
      <div className="loading_list_hours">
        <p className="title">
          <Skeleton count={1} style={{ height: '100%' }} />
        </p>
        <div className="hours">
          <div>
            <Skeleton count={1} style={{ height: '100%' }} />
          </div>
          <div>
            <Skeleton count={1} style={{ height: '100%' }} />
          </div>
          <div>
            <Skeleton count={1} style={{ height: '100%' }} />
          </div>
          <div>
            <Skeleton count={1} style={{ height: '100%' }} />
          </div>
          <div>
            <Skeleton count={1} style={{ height: '100%' }} />
          </div>
          <div>
            <Skeleton count={1} style={{ height: '100%' }} />
          </div>
          <div>
            <Skeleton count={1} style={{ height: '100%' }} />
          </div>
        </div>
      </div>
    </ContainerLoading>
  );
};
