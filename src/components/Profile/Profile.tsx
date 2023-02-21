import React from 'react';

import { HeaderProfile } from './HeaderProfile';
import { ContainerProfile } from './styles';

export const Profile: React.FC = () => {
  return (
    <ContainerProfile>
      <HeaderProfile />
    </ContainerProfile>
  );
};
