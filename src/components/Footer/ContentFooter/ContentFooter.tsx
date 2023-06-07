import React from 'react';
import Link from 'next/link';
import { useIntl } from 'react-intl';

import { Logo } from 'common/icons/Logo';
import { theme } from 'common/styles/theme';
import { SocialMedia } from 'components/SocialMedia';
import { dataStatic } from 'utils/socialMedia';
import { ContainerContentFooter, ContainerContentFooterCardLeft, ContainerContentFooterCardRight } from './styles';

export const ContentFooter: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <ContainerContentFooter>
      <ContainerContentFooterCardLeft>
        <Logo color={theme.colors.WHITE} width={159} height={19} />
        <p className="normal color_grey_600">
          {formatMessage({
            id: 'APRESENTATION_SUBTITLE',
          })}
        </p>
        <SocialMedia items={dataStatic} color="transparent" />
      </ContainerContentFooterCardLeft>
      <ContainerContentFooterCardRight>
        <div className="menu_about">
          <h6 className="title color_white">
            {formatMessage({
              id: 'ABOUT',
            })}
          </h6>
          <ul>
            <li>
              <Link href="#" passHref>
                <a>
                  <p className="normal color_grey_600">
                    {formatMessage({
                      id: 'ABOUT',
                    })}
                  </p>
                </a>
              </Link>
            </li>
            <li>
              <a href="google.com.br" target="_black">
                <p className="normal color_grey_600">
                  {formatMessage({
                    id: 'DOWNLOAD',
                  })}
                  {' '}
                  Play Store
                </p>
              </a>
            </li>
            <li>
              <a href="google.com.br" target="_black">
                <p className="normal color_grey_600">
                  {formatMessage({
                    id: 'DOWNLOAD',
                  })}
                  {' '}
                  App Store
                </p>
              </a>
            </li>
            <li>
              <Link href="#" passHref>
                <a>
                  <p className="normal color_grey_600">
                    {formatMessage({
                      id: 'CONTACT',
                    })}
                  </p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu_legal">
          <h6 className="title color_white">
            {formatMessage({
              id: 'LEGAL',
            })}
          </h6>
          <ul>
            <li>
              <Link href="#" passHref>
                <a>
                  <p className="normal color_grey_600">
                    {formatMessage({
                      id: 'PRIVACY',
                    })}
                  </p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a>
                  <p className="normal color_grey_600">
                    {formatMessage({
                      id: 'TERMS',
                    })}
                  </p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a>
                  <p className="normal color_grey_600">
                    {formatMessage({
                      id: 'TERMS_SERVICE',
                    })}
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
