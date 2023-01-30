import React from 'react';

import { Translation } from 'components/Translation';
import { ContainerCopyRightFooter } from './styles';

export const CopyRightFooter: React.FC = () => {
  return (
    <ContainerCopyRightFooter>
      <Translation variant="secondary" />
      <p className="small color_grey_700 font_weight_500">
        2022 @ Tuaagenda.
      </p>
    </ContainerCopyRightFooter>
  );
};
