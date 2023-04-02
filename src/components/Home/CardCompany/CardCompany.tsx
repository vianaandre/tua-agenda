import React from 'react';
import Link from 'next/link';

import { Avatar } from 'components/Avatar';
import { Evaluation } from 'common/icons';
import { theme } from 'common/styles/theme';
import { ContainerCardCompany, ContainerCardCompanyImage, ContainerCardCompanyInfos } from './styles';
import { CardCompanyProps } from './interface';

export const CardCompany: React.FC<CardCompanyProps> = ({
  address, categories, evaluation, image, logo, name, variant,
}) => {
  return (
    <ContainerCardCompany variant={variant}>
      <ContainerCardCompanyImage image={image} />
      <ContainerCardCompanyInfos>
        <div className="header">
          <Avatar image={logo} username={name} />
          <Link href="/company/tuaAgenda" shallow>
            <a>Agendar agora</a>
          </Link>
        </div>
        <div className="name_address">
          <h6 className="title">{name}</h6>
          <p className="normal color_dark">
            {address.city}
            {' · '}
            {address.state}
          </p>
        </div>
        <div className="footer">
          <p className="normal color_light">
            <Evaluation width={24} height={24} color={theme.colors.WARNING} />
            {evaluation.toFixed(1)}
            {' '}
            / 10 avaliações
          </p>
          <div className="categories">
            {categories.map((item) => (
              <p className="small">{item}</p>
            ))}
          </div>
        </div>
      </ContainerCardCompanyInfos>
    </ContainerCardCompany>
  );
};
