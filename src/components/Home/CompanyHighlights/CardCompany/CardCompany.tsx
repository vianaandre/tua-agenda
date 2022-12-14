import React from 'react';
import Link from 'next/link';

import { Avatar } from 'components/Avatar';
import { ContainerCardCompany, ContainerCardCompanyImage, ContainerCardCompanyInfos } from './styles';
import { ICardCompany } from './interface';

export const CardCompany: React.FC<ICardCompany> = ({
  address, categories, evaluation, image, logo, name,
}) => {
  return (
    <ContainerCardCompany>
      <ContainerCardCompanyImage image={image} />
      <ContainerCardCompanyInfos>
        <header>
          <Avatar image={logo} username={name} />
          <Link href="#" passHref legacyBehavior>
            <a>Agendar agora</a>
          </Link>
        </header>
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
