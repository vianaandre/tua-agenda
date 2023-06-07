import React, { useEffect } from 'react';
import Image from 'next/image';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useIntl } from 'react-intl';

import { Title } from 'components/Home/Title';
import { Container } from 'common/styles/container';
import CitiesBgEffect from 'common/assets/home/cities-bg-effect.png';
import { useCities } from 'common/hooks/useCities';
import { useHome } from 'common/hooks/useHome';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { CardCity } from './CardCity';
import { ContainerCities, ContainerCitiesBgEffect } from './styles';

export const Cities: React.FC = () => {
  const { onUpdateStateCities, cities, onUpdateIsViewMore } = useCities();
  const { loading } = useHome();
  const { formatMessage } = useIntl();

  useEffect(() => {
    onUpdateStateCities(cities);
  }, [cities, onUpdateStateCities]);

  return (
    <ContainerCities>
      <ContainerCitiesBgEffect>
        <Image src={CitiesBgEffect.src} width={CitiesBgEffect.width} height={CitiesBgEffect.height} alt="Imagem de fundo" />
      </ContainerCitiesBgEffect>
      <Container>
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.5} animateOnce>
          <Title
            title={formatMessage({
              id: 'EXPLORE',
            })}
            emphasis={formatMessage({
              id: 'CITIES',
            })}
          />
        </AnimationOnScroll>
        <ul>
          {cities.map((item) => (
            <CardCity key={item.cidade} city={item.cidade} count={item.count} />
          ))}
        </ul>
        {cities.length <= 4 ? (
          <Button.Normal
            type="button"
            text={formatMessage({
              id: 'VIEW_MORE',
            })}
            variant={ButtonVariantProps.OUTLINE}
            className="view_more"
            onClick={() => onUpdateIsViewMore(true)}
            loading={loading === 'cities'}
            disabled={loading === 'cities'}
          />
        ) : (
          <Button.Normal
            type="button"
            text={formatMessage({
              id: 'VIEW_LESS',
            })}
            variant={ButtonVariantProps.OUTLINE}
            className="view_more"
            onClick={() => onUpdateIsViewMore(false)}
          />
        )}
      </Container>
    </ContainerCities>
  );
};
