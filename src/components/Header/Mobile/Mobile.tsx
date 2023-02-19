import Link from 'next/link';
import React, { useEffect } from 'react';

import { Logo, Close, Location } from 'common/icons';
import { theme } from 'common/styles/theme';
import { useAnimation } from 'common/hooks/useAnimation';
import { useLocation } from 'common/hooks/useLocation';
import { Translation } from 'components/Translation';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { ContainerMobile, ContainerMobileMenu } from './styles';

export const Mobile: React.FC = () => {
  const { onShowMenu, showMenu, onCloseMenu } = useAnimation();
  const { locationPerCityAndState, onGetLocationBrowser } = useLocation();

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [showMenu, onCloseMenu]);

  return (
    <ContainerMobile>
      <Link href="/" legacyBehavior passHref>
        <a>
          <Logo width={159} height={19} color={theme.colors.PRIMARY[500]} />
        </a>
      </Link>
      <button type="button" onClick={onShowMenu}>
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
          {!locationPerCityAndState && (
          <button type="button" onClick={onGetLocationBrowser} className="button_location">
            <Location width={22} height={22} color={theme.colors.GREY[950]} />
            <p className="small">Permitir localização</p>
          </button>
          )}
        </div>
        <div className="content">
          <ul>
            <li>
              <Translation variant="primary" />
            </li>
            <li>
              <Button.Link
                variant={ButtonVariantProps.SECONDARY}
                text="Para Empresa"
                href="/"
              />
            </li>
            <li className="separator">
              <Button.Link
                variant={ButtonVariantProps.OUTLINE}
                text="Entrar"
                href="/login"
              />
            </li>
            <li>
              <Button.Link
                variant={ButtonVariantProps.PRIMARY}
                text="Entrar"
                href="/register"
              />
            </li>
          </ul>
        </div>
      </ContainerMobileMenu>
    </ContainerMobile>
  );
};
