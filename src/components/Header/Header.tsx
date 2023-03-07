import React from 'react';

import { Container } from 'common/styles/container';
import { useAuth } from 'common/hooks/useAuth';
import { Loading } from 'components/Loading';
import { ContainerHeader } from './styles';
import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

export const Header: React.FC = () => {
  const { loadingUser, user } = useAuth();

  return (
    <ContainerHeader className={user ? 'user_active' : ''}>
      <Loading open={loadingUser} />
      <Container>
        <Desktop />
        <Mobile />
      </Container>
    </ContainerHeader>
  );
};
