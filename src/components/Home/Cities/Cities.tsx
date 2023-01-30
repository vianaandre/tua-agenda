import React, { useEffect } from 'react';
import Image from 'next/image';

import { Title } from 'components/Home/Title';
import { Container } from 'common/styles/container';
import CitiesBgEffect from 'common/assets/home/cities-bg-effect.png';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { CityProps } from 'common/interface/CityProps';
import { useCities } from 'common/hooks/useCities';
import { ContainerCities, ContainerCitiesBgEffect } from './styles';
import { CardCity } from './CardCity';

export const Cities: React.FC<{ cities: CityProps[] }> = ({ cities }) => {
  const { onUpdateStateCities, listCities, onUpdateIsViewMore } = useCities();

  useEffect(() => {
    onUpdateStateCities(cities);
  }, [cities, onUpdateStateCities]);

  return (
    <ContainerCities>
      <ContainerCitiesBgEffect>
        <Image src={CitiesBgEffect.src} width={CitiesBgEffect.width} height={CitiesBgEffect.height} alt="Imagem de fundo" />
      </ContainerCitiesBgEffect>
      <Container>
        <Title title="Explore" emphasis="cidades" />
        <ul>
          {listCities.map((item) => (
            <CardCity key={item.city} city={item.city} />
          ))}
        </ul>
        {listCities.length < cities.length && (
        <Button.Normal type="button" text="Ver mais" variant={ButtonVariantProps.OUTLINE} className="view_more" onClick={() => onUpdateIsViewMore(true)} />
        )}
        {listCities.length === cities.length && (
        <Button.Normal type="button" text="Ver menos" variant={ButtonVariantProps.OUTLINE} className="view_more" onClick={() => onUpdateIsViewMore(false)} />
        )}
      </Container>
    </ContainerCities>
  );
};
