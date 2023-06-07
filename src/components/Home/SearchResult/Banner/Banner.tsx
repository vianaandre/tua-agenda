import React from 'react';
import { useIntl } from 'react-intl';

import CategoriesBannerEffect from 'common/assets/home/categories-banner-effect.png';
import CategoriesBannerEffectTwo from 'common/assets/home/categories-banner-effect-two.png';
import { Container } from 'common/styles/container';
import { FormSearch } from 'components/Home/FormSearch';
import { ContainerBanner, ContainerBannerImageBgOne, ContainerBannerImageBgTwo } from './styles';

export const Banner: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <ContainerBanner>
      <ContainerBannerImageBgOne src={CategoriesBannerEffect.src} alt="imagem de fundo do Banner" />
      <ContainerBannerImageBgTwo src={CategoriesBannerEffectTwo.src} alt="imagem de fundo do Banner" />
      <Container>
        <div className="categories_banner_content">
          <h1 className="title">
            {formatMessage({
              id: 'FIND_PROFESSIONALS',
            })}
          </h1>
          <p className="great color_light">
            {formatMessage({
              id: 'FIND_BEST_DESCRIPTION',
            })}
          </p>
          <FormSearch />
        </div>
      </Container>
    </ContainerBanner>
  );
};
