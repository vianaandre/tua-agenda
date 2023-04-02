import React from 'react';

import { Container } from 'common/styles/container';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { ArrowLeft } from 'common/icons';
import { theme } from 'common/styles/theme';
import { HeaderSectionProps } from './interface';
import { ContainerHeaderSection } from './styles';

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  children, subtitle, title, back,
}) => {
  return (
    <ContainerHeaderSection>
      <Container>
        <div className="content_header">
          <div className="title">
            {back && (
            <Button.Link
              href={back}
              variant={ButtonVariantProps.OUTLINE_TEXT}
              icon={{
                direction: 'left',
                icon: <ArrowLeft width={20} height={20} color={theme.colors.WHITE} />,
              }}
              text="Voltar"
            />
            )}
            <h4 className="title ">{title}</h4>
            <p className="small color_white">
              {subtitle}
            </p>
          </div>
          {children && children}
        </div>
      </Container>
    </ContainerHeaderSection>
  );
};
