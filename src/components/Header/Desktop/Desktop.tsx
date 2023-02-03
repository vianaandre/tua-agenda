import Link from 'next/link';
import React from 'react';

import { Location, Logo } from 'common/icons';
import { Button } from 'components/Button';
import { Translation } from 'components/Translation';
import { useLocation } from 'common/hooks/useLocation';
import { theme } from 'common/styles/theme';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { ContainerDesktop, ContainerHeaderLeft, ContainerHeaderRight } from './styles';

export const Desktop: React.FC = () => {
  const { onGetLocationBrowser, locationPerCityAndState } = useLocation();

  return (
    <ContainerDesktop>
      <ContainerHeaderLeft>
        <Link href="/" legacyBehavior passHref>
          <a>
            <Logo width={159} height={19} color={theme.colors.PRIMARY[500]} />
          </a>
        </Link>
        {!locationPerCityAndState && (
        <button type="button" onClick={onGetLocationBrowser}>
          <Location width={22} height={22} color={theme.colors.GREY[950]} />
          <p className="small">Permitir localização</p>
        </button>
        )}
      </ContainerHeaderLeft>
      <ContainerHeaderRight>
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
      </ContainerHeaderRight>
    </ContainerDesktop>
  );
};
