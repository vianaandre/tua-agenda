import React from 'react';

import { Container } from 'common/styles/container';
import ActionAppMobile from 'common/assets/home/action-app-mobile.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { AppStore, PlayStore } from 'common/icons';
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
