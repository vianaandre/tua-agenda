import React from 'react';
import Link from 'next/link';

import { Logo } from 'common/icons/Logo';
import { theme } from 'common/styles/theme';
import { SocialMedia } from 'components/SocialMedia';
import { dataStatic } from 'utils/socialMedia';
import { ContainerContentFooter, ContainerContentFooterCardLeft, ContainerContentFooterCardRight } from './styles';

export const ContentFooter: React.FC = () => {
  return (
    <ContainerContentFooter>
      <ContainerContentFooterCardLeft>
        <Logo color={theme.colors.WHITE} width={159} height={19} />
        <p className="normal color_grey_600">
          Usada por pessoas que procuram deixar as coisas mais simples.
        </p>
        <SocialMedia items={dataStatic} color="transparent" />
      </ContainerContentFooterCardLeft>
      <ContainerContentFooterCardRight>
        <div className="menu_about">
          <h6 className="title color_white">Sobre</h6>
          <ul>
            <li>
              <Link href="#" passHref>
                <a>
                  <p className="normal color_grey_600">
                    Sobre
                  </p>
                </a>
              </Link>
            </li>
            <li>
              <a href="google.com.br" target="_black">
                <p className="normal color_grey_600">
                  Baixar Play Store
                </p>
              </a>
            </li>
            <li>
              <a href="google.com.br" target="_black">
                <p className="normal color_grey_600">
                  Baixar App Store
                </p>
              </a>
            </li>
            <li>
              <Link href="#" passHref>
                <a>
                  <p className="normal color_grey_600">
                    Entre em contato
                  </p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu_legal">
          <h6 className="title color_white">Jurídico</h6>
          <ul>
            <li>
              <Link href="#" passHref>
                <a>
                  <p className="normal color_grey_600">
                    Politica Privacidade
                  </p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a>
                  <p className="normal color_grey_600">
                    Termos de Uso
                  </p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a>
                  <p className="normal color_grey_600">
                    Termos de Serviço
                  </p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </ContainerContentFooterCardRight>
    </ContainerContentFooter>
  );
};
