import React from 'react';
import 'animate.css/animate.min.css';
import { useIntl } from 'react-intl';

import HomeBannerBg from 'common/assets/home/banner-bg.png';
import HomeBannerPhoto from 'common/assets/home/banner-photo.png';
import { Container } from 'common/styles/container';
import { FormSearch } from 'components/Home/FormSearch';
import { EffectTitle } from 'common/icons';
import { theme } from 'common/styles/theme';
import { ContainerBanner, ContainerBannerImageBg } from './styles';

export const Banner: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <ContainerBanner>
      <ContainerBannerImageBg src={HomeBannerBg.src} alt="imagem de fundo do Banner" />
      <Container>
        <div className="banne_photo">
          <img src={HomeBannerPhoto.src} alt="Retrato de uma Pessoa" />
        </div>
        <div className="banner_content">
          <h1 className="title">
            {formatMessage({
              id: 'APRESENTATION_TITLE',
            })}
          </h1>
          <div className="effect_title">
            <EffectTitle width={411} height={25} color={theme.colors.PRIMARY[500]} />
          </div>
          <p className="great color_light">
            {formatMessage({
              id: 'APRESENTATION_SUBTITLE',
            })}
          </p>
          <div className="form_search">
            <FormSearch />
          </div>
        </div>
      </Container>
    </ContainerBanner>
  );
};
