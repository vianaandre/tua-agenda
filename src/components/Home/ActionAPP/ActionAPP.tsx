import React from 'react';
import Image from 'next/image';

import { Container } from 'common/styles/container';
import ActionAppButtonApp from 'common/assets/home/action-app-button-app.png';
import ActionAppButtonPlay from 'common/assets/home/action-app-button-play.png';
import ActionAppMobile from 'common/assets/home/action-app-mobile.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
  ContainerActionAPP, ContainerActionAPPCardLeft, ContainerActionAPPCardRight, CoontainerActionBlockLeft, CoontainerActionBlockRight,
} from './styles';

export const ActionAPP: React.FC = () => {
  return (
    <ContainerActionAPP>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
        <Container>
          <CoontainerActionBlockLeft />
          <ContainerActionAPPCardLeft>
            <h2 className="title">Baixe nosso aplicativo</h2>
            <p className="normal">
              Não é necessário informar cartão de crédito ou qualquer forma de pagamento durante o período de testes.
            </p>
            <div className="action_buttons">
              <a href="#" target="_black">
                <Image src={ActionAppButtonApp.src} width={ActionAppButtonApp.width} height={ActionAppButtonApp.height} alt="App Store" />
              </a>
              <a href="#" target="_black">
                <Image src={ActionAppButtonPlay.src} width={ActionAppButtonPlay.width} height={ActionAppButtonPlay.height} alt="Play Store" />
              </a>
            </div>
          </ContainerActionAPPCardLeft>
          <ContainerActionAPPCardRight>
            <Image src={ActionAppMobile.src} width={ActionAppMobile.width} height={ActionAppMobile.height} alt="Aplicativo" />
          </ContainerActionAPPCardRight>
          <CoontainerActionBlockRight />
        </Container>
      </AnimationOnScroll>
    </ContainerActionAPP>
  );
};
