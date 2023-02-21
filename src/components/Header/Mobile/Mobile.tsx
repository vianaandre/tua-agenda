/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link';
import React, { useEffect } from 'react';

import { Logo, Close, Location } from 'common/icons';
import { theme } from 'common/styles/theme';
import { useAnimation } from 'common/hooks/useAnimation';
import { useLocation } from 'common/hooks/useLocation';
import { Translation } from 'components/Translation';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { useAuth } from 'common/hooks/useAuth';
import { ContainerProfileAvatar } from 'components/Header/Desktop/MenuUser/Profile/styles';
import { Avatar } from 'components/Avatar';
import { ContainerMobile, ContainerMobileMenu } from './styles';

export const Mobile: React.FC = () => {
  const { onShowMenu, showMenu, onCloseMenu } = useAnimation();
  const { locationPerCityAndState, onGetLocationBrowser } = useLocation();
  const { user, onLogoutUser } = useAuth();

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [showMenu, onCloseMenu]);

  return (
    <ContainerMobile className={user ? 'auth_user' : ''}>
      <Link href="/" legacyBehavior passHref>
        <a>
          {user && <Logo width={159} height={19} color={theme.colors.WHITE} />}
          {!user && <Logo width={159} height={19} color={theme.colors.PRIMARY[500]} />}
        </a>
      </Link>
      <button type="button" onClick={onShowMenu} className={`${user ? 'auth_user' : ''}`}>
        <p className="normal color_normal">Menu</p>
        <div>
          <div />
          <div />
          <div />
        </div>
      </button>
      <ContainerMobileMenu showMenu={showMenu}>
        <div className="header">
          <button type="button" onClick={onCloseMenu} className="close_button">
            <Close width={24} height={24} color={theme.colors.PRIMARY[500]} stroke={3} />
            <p className="normal color_normal">Fechar</p>
          </button>
          {!locationPerCityAndState ? (
            <button type="button" onClick={onGetLocationBrowser} className="button_location">
              <Location width={22} height={22} color={theme.colors.GREY[950]} />
              <p className="small">Permitir localização</p>
            </button>
          ) : (
            <div className="button_location">
              <Location width={22} height={22} color={theme.colors.GREY[950]} />
              <p className="small">
                {locationPerCityAndState.city}
                ,
                {' '}
                {locationPerCityAndState.state}
              </p>
            </div>
          )}
        </div>
        <div className="content">
          <ul className={`${user ? 'auth_user' : ''}`}>
            {user && (
            <li className="photo_user">
              <div className="photo">
                {user.imageUrl && (
                  <ContainerProfileAvatar imageUrl={user.imageUrl} />
                )}
                {!user.imageUrl && user.nome && (
                  <Avatar username={user.nome} />
                )}
              </div>
              <div className="infos">
                <p className="normal color_dark">{user.nome}</p>
                <p className="small color_grey_800">Cliente</p>
              </div>
            </li>
            )}
            <li className="translation">
              <Translation variant="primary" />
            </li>
            {!user && (
            <li>
              <Button.Link
                variant={ButtonVariantProps.SECONDARY}
                text="Para Empresa"
                href="/"
              />
            </li>
            )}
            {!user && (
            <li className="separator">
              <Button.Link
                variant={ButtonVariantProps.OUTLINE}
                text="Entrar"
                href="/login"
              />
            </li>
            )}
            {!user && (
            <li>
              <Button.Link
                variant={ButtonVariantProps.PRIMARY}
                text="Cadastrar"
                href="/register"
              />
            </li>
            )}
            {user && (
            <li className="link_auth">
              <Link href="/schedules">
                <a>
                  <p>
                    Agendamentos
                  </p>
                </a>
              </Link>
            </li>
            )}
            {user && (
            <li className="link_auth">
              <Link href="/anamneses">
                <a>
                  <p>
                    Anamneses
                  </p>
                </a>
              </Link>
            </li>
            )}
            {user && (
            <li className="link_auth">
              <Link href="/notifications">
                <a>
                  <p>
                    Notificações
                  </p>
                </a>
              </Link>
            </li>
            )}
            {user && (
            <li className="link_auth">
              <Link href="/profile">
                <a onClick={onCloseMenu}>
                  <p>
                    Meu Perfil
                  </p>
                </a>
              </Link>
            </li>
            )}
            {user && (
            <li className="link_auth">
              <button type="button" className="logout" onClick={onLogoutUser}>
                <p>
                  Sair
                </p>
              </button>
            </li>
            )}
          </ul>
        </div>
      </ContainerMobileMenu>
    </ContainerMobile>
  );
};
