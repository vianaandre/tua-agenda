import React from 'react';

import { Google, Phone } from 'common/icons';
import { theme } from 'common/styles/theme';
import { useAuth } from 'common/hooks/useAuth';
import { LoadingButton } from 'components/LoadingButton';
import { ContainerAuthSocial, ContainerAuthSocialIcon } from './styles';

export const AuthSocial: React.FC = () => {
  const {
    onFlowAuthPerPhone, onLoginGoogle, loadingAuthGoogle,
  } = useAuth();

  return (
    <ContainerAuthSocial>
      <button type="button" onClick={onLoginGoogle} disabled={loadingAuthGoogle}>
        {loadingAuthGoogle && (
          <LoadingButton bgColor="#F5F5F5" />
        )}
        <ContainerAuthSocialIcon>
          <Google />
        </ContainerAuthSocialIcon>
        Continuar com o Google
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
