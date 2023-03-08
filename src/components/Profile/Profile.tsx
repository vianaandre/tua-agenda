import React from 'react';

import { useAuth } from 'common/hooks/useAuth';
import { Page404 } from 'components/Page404';
import { HeaderProfile } from './HeaderProfile';
import { ContainerProfile } from './styles';
import { Form } from './Form';

export const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <Page404 />
    );
  }

  return (
    <ContainerProfile>
      <HeaderProfile />
      <Form />
    </ContainerProfile>
  );
};
