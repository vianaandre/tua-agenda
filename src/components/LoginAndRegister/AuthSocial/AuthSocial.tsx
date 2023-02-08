import React from 'react';

import { Google, Facebook, Phone } from 'common/icons';
import { theme } from 'common/styles/theme';
import { useAuth } from 'common/hooks/useAuth';
import { ContainerAuthSocial, ContainerAuthSocialIcon } from './styles';

export const AuthSocial: React.FC = () => {
  const { onFlowAuthPerPhone, onLoginGoogle } = useAuth();

  return (
    <ContainerAuthSocial>
      <button type="button" onClick={onLoginGoogle}>
        <ContainerAuthSocialIcon>
          <Google />
        </ContainerAuthSocialIcon>
        Continuar com o Google
      </button>
      <button type="button">
        <ContainerAuthSocialIcon>
          <Facebook />
        </ContainerAuthSocialIcon>
        Continuar com o Facebook
      </button>
      <button type="button" onClick={onFlowAuthPerPhone}>
        <ContainerAuthSocialIcon>
          <Phone width={20} height={20} color={theme.colors.PRIMARY[800]} />
        </ContainerAuthSocialIcon>
        Continuar com o Telefone
      </button>
    </ContainerAuthSocial>
  );
};
