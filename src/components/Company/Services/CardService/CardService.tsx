import React from 'react';

import { Avatar } from 'components/Avatar';
import { Clock } from 'common/icons';
import { theme } from 'common/styles/theme';
import { ContainerCardService } from './styles';
import { CardServiceProps } from './interface';

export const CardService: React.FC<CardServiceProps> = ({
  service: {
    nome, linkImagem, minutos, preco,
  },
  onSelect,
  active,
}) => {
  return (
    <ContainerCardService>
      <button type="button" onClick={onSelect} className={`${active ? 'selected' : ''}`}>
        <div className="title">
          <Avatar username={nome} image={linkImagem} />
          <div className="part_two">
            <p className="small">{nome}</p>
          </div>
        </div>
        <div className="time">
          <Clock width={24} height={24} color={theme.colors.PRIMARY[500]} />
          <p className="normal">
            {minutos}
            min
          </p>
        </div>
        <div className="price">
          <p className="great">
            {preco.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}

          </p>
        </div>
        <div className="container_checkbox">
          <div className="checkbox">
            <div />
          </div>
        </div>
      </button>
    </ContainerCardService>
  );
};
