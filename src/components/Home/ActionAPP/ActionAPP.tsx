import React from 'react';
import { useIntl } from 'react-intl';

import { Container } from 'common/styles/container';
import ActionAppMobile from 'common/assets/home/action-app-mobile.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { AppStore, PlayStore } from 'common/icons';
import {
  ContainerActionAPP, ContainerActionAPPCardLeft, ContainerActionAPPCardRight, CoontainerActionBlockLeft, CoontainerActionBlockRight,
} from './styles';

export const ActionAPP: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <ContainerActionAPP>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
        <Container>
          <CoontainerActionBlockLeft />
          <ContainerActionAPPCardLeft>
            <h2 className="title">
              {formatMessage({
                id: 'APP_DOWNLOAD_TITLE',
              })}
            </h2>
            <p className="normal">
              {formatMessage({
                id: 'APP_DOWNLOAD_SUBTITLE',
              })}
            </p>
            <div className="action_buttons">
              <a href="#" target="_black">
                <PlayStore />
              </a>
              <a href="#" target="_black">
                <AppStore />
              </a>
            </div>
          </ContainerActionAPPCardLeft>
          <ContainerActionAPPCardRight>
            <img src={ActionAppMobile.src} alt="Aplicativo" />
          </ContainerActionAPPCardRight>
          <CoontainerActionBlockRight />
        </Container>
      </AnimationOnScroll>
    </ContainerActionAPP>
  );
};
