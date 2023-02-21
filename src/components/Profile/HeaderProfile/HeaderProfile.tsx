import React from 'react';

import { Button } from 'components/Button';
import { ArrowLeft, Photo } from 'common/icons';
import { theme } from 'common/styles/theme';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { Container } from 'common/styles/container';
import { useAuth } from 'common/hooks/useAuth';
import { Avatar } from 'components/Avatar';
import {
  ContainerHeaderProfile, ContainerHeaderProfileLeft, ContainerHeaderProfileRight, ContainerHeaderProfileRightAvatar,
} from './styles';

export const HeaderProfile: React.FC = () => {
  const { user, onUploadPhoto, uploadPhoto } = useAuth();

  const handleBack = () => window.history.back();

  return (
    <ContainerHeaderProfile>
      <Container>
        <div className="content_page">
          <ContainerHeaderProfileLeft>
            <Button.Normal
              onClick={handleBack}
              type="button"
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
          <ContainerHeaderProfileRight>
            <div className="user_photo">
              {user && user.imageUrl && (
                <ContainerHeaderProfileRightAvatar imageUrl={uploadPhoto ? (uploadPhoto as string) : user.imageUrl} />
              )}
              {user && !user.imageUrl && user.nome && (
                <Avatar username={user.nome} variant="medium" />
              )}
              <label htmlFor="uploadPhoto">
                <Photo width={20} height={20} color={theme.colors.PRIMARY[500]} />
              </label>
              <input type="file" hidden id="uploadPhoto" name="uploadPhoto" onChange={onUploadPhoto} accept="image/png, image/jpeg, image/jpg" />
            </div>
          </ContainerHeaderProfileRight>
        </div>
      </Container>
    </ContainerHeaderProfile>
  );
};
