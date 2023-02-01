import React from 'react';

import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { Button } from 'components/Button';
import { theme } from 'common/styles/theme';
import { ArrowLeft } from 'common/icons';
import { ContainerEmpty } from './styles';
import { EmptyProps } from './interface';

export const Empty: React.FC<EmptyProps> = ({ text, buttonBack }) => {
  return (
    <ContainerEmpty>
      <h3 className="title color_grey_700">{text}</h3>
      {buttonBack && (
        <Button.Normal
          type="button"
          text="Voltar"
          variant={ButtonVariantProps.OUTLINE_TEXT}
          icon={{
            direction: 'left',
            icon: <ArrowLeft color={theme.colors.PRIMARY[500]} width={18} height={18} />,
          }}
          onClick={buttonBack.onClick}
        />
      )}
    </ContainerEmpty>
  );
};
