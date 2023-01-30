import React from 'react';
import Link from 'next/link';

import { Container } from 'common/styles/container';
import {
  Logo, Location,
} from 'common/icons';
import { theme } from 'common/styles/theme';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { Translation } from 'components/Translation';
import { ContainerHeader, ContainerHeaderLeft, ContainerHeaderRight } from './styles';

export const Header: React.FC = () => {
  return (
    <ContainerHeader>
      <Container>
        <ContainerHeaderLeft>
          <Link href="/" legacyBehavior passHref>
            <a>
              <Logo width={159} height={19} color={theme.colors.PRIMARY[500]} />
            </a>
          </Link>
          <button type="button">
            <Location width={22} height={22} color={theme.colors.GREY[950]} />
            <p className="small">Permitir localização</p>
          </button>
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
      </Container>
    </ContainerHeader>
  );
};
