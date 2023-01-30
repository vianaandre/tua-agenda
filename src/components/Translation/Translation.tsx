import React from 'react';

import { theme } from 'common/styles/theme';
import { Translation as TranslationIcon } from 'common/icons';
import { ContainerTranslation } from './styles';
import { TranslationProps } from './interface';

export const Translation: React.FC<TranslationProps> = ({ variant }) => {
  return (
    <ContainerTranslation variant={variant}>
      <TranslationIcon width={22} height={22} color={variant === 'primary' ? theme.colors.GREY[950] : theme.colors.GREY[700]} />
      <p className={`small font_weight_500 ${variant === 'primary' ? '' : 'color_grey_700'}`}>PT (Brasil)</p>
    </ContainerTranslation>
  );
};
