import React from 'react';

import { Badge } from 'components/Badge';
import { ContainerInfos, ContainerInfosBanner } from './styles';
import { InfosProps } from './interface';

export const Infos: React.FC<InfosProps> = ({ countProfissional, linkImage }) => {
  return (
    <ContainerInfos>
      {linkImage && (
        <ContainerInfosBanner imageUrl={linkImage} />
      )}
      <div className="infos">
        <div className="infos_header">
          <h3 className="title">Isabella</h3>
          <Badge text={`${countProfissional > 1 ? `${countProfissional} profissionais` : `${countProfissional} profissional`}`} variant="primary" />
        </div>
      </div>
    </ContainerInfos>
  );
};
