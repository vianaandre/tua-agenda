import React from 'react';

import { Button } from 'components/Button';
import { ArrowLeft } from 'common/icons';
import { theme } from 'common/styles/theme';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { Container } from 'common/styles/container';
import { useAuth } from 'common/hooks/useAuth';
import { ContainerHeaderProfile, ContainerHeaderProfileLeft } from './styles';

export const HeaderProfile: React.FC = () => {
  const { user } = useAuth();

  return (
    <ContainerHeaderProfile>
      <Container>
        <div className="content_page">
          <ContainerHeaderProfileLeft>
            <Button.Link
              href="/"
              text="Voltar"
              icon={{
                direction: 'left',
                icon: <ArrowLeft width={20} height={20} color={theme.colors.WHITE} />,
              }}
              variant={ButtonVariantProps.OUTLINE_TEXT}
            />
            <h4 className="title ">Meu Perfil</h4>
            {user && user.dtInclusaoFmt && (
            <p className="small color_white">
              Criado em
              {' '}
              {user.dtInclusaoFmt.split(' ')[0]}
              {' ás '}
              {user.dtInclusaoFmt.split(' ')[1]}
            </p>
            )}
          </ContainerHeaderProfileLeft>
        </div>
      </Container>
    </ContainerHeaderProfile>
  );
};
