import React from 'react';

import { formatMoney } from 'utils/format';
import { Trash } from 'common/icons';
import { IconButton } from 'components/IconButton';
import { theme } from 'common/styles/theme';
import { CardServiceProps } from './interface';
import { ContainerCardService } from './styles';

export const CardService: React.FC<CardServiceProps> = ({
  category, description, duration, name, remove, tag, value, disabledRemove,
}) => {
  return (
    <ContainerCardService className="list_data">
      <div className="tag">
        <p className="small color_black_500">{tag}</p>
      </div>
      <div className="name">
        <p className="small color_black_500">{name}</p>
      </div>
      <div className="description">
        <p className="small color_black_500">{description !== '' ? description : '-'}</p>
      </div>
      <div className="duration">
        <p className="small color_black_500">
          {duration}
          min
        </p>
      </div>
      <div className="value">
        <p className="small color_black_500">
          {formatMoney(value, 'pt-br', 'BRL')}
        </p>
      </div>
      <div className="category">
        <p className="small color_black_500">
          {category}
        </p>
      </div>
      <div className="remove">
        <IconButton onClick={remove} disabled={disabledRemove}>
          <Trash width={24} height={24} color={theme.colors.DANGER} />
        </IconButton>
      </div>
    </ContainerCardService>
  );
};
