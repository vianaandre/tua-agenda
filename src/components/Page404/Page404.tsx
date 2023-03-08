import React from 'react';

import { Button } from 'components/Button';
import { ArrowLeft } from 'common/icons';
import { theme } from 'common/styles/theme';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { Container } from 'common/styles/container';
import { ContainerPage404 } from './styles';

export const Page404: React.FC = () => {
  return (
    <ContainerPage404>
      <Container>
        <h2 className="title">Página não encontrada</h2>
        <p className="normal color_grey_800">Voltar para tela inicial</p>
        <Button.Link
          href="/"
          text="Voltar"
          variant={ButtonVariantProps.OUTLINE_TEXT}
          icon={{
            direction: 'left',
            icon: <ArrowLeft width={18} height={18} color={theme.colors.PRIMARY[500]} />,
          }}
        />
      </Container>
    </ContainerPage404>
  );
};
