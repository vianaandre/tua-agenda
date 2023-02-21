import React from 'react';

import { HeaderProfile } from './HeaderProfile';
import { ContainerProfile } from './styles';
import { Form } from './Form';

export const Profile: React.FC = () => {
  return (
    <ContainerProfile>
      <HeaderProfile />
      <Form />
    </ContainerProfile>
  );
};
