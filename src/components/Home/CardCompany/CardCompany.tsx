import React from 'react';
import Link from 'next/link';
import { useIntl } from 'react-intl';

import { Avatar } from 'components/Avatar';
import { ContainerCardCompany, ContainerCardCompanyImage, ContainerCardCompanyInfos } from './styles';
import { CardCompanyProps } from './interface';

export const CardCompany: React.FC<CardCompanyProps> = ({
  address, image, logo, name, variant, usuario,
}) => {
  const { formatMessage } = useIntl();

  return (
    <ContainerCardCompany variant={variant}>
      <ContainerCardCompanyImage image={image} />
      <ContainerCardCompanyInfos>
        <div className="header">
          <Avatar image={logo} username={name ?? 'Sem nome'} />
          <Link href={`/company/${usuario}`} shallow>
            <a>
              {formatMessage({
                id: 'BUTTON_SCHEDULE_NOW',
              })}
            </a>
          </Link>
        </div>
        <div className="name_address">
          <h6 className="title">{name}</h6>
          <p className="normal color_dark">
            {address}
          </p>
        </div>
        {/* <div className="footer"> */}
        {/* <p className="normal color_light">
            <Evaluation width={24} height={24} color={theme.colors.WARNING} />
            {evaluation.toFixed(1)}
            {' '}
            / 10 avaliações
          </p> */}
        {/* <div className="categories">
            {categories.map((item) => (
              <p className="small">{item}</p>
            ))}
          </div> */}
        {/* </div> */}
      </ContainerCardCompanyInfos>
    </ContainerCardCompany>
  );
};
