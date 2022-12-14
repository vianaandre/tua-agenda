import React from 'react';

import { Title } from 'components/Home/Title';
import { Container } from 'common/styles/container';
import { Arrow } from 'common/icons';
import { theme } from 'common/styles/theme';
import { CategoryProps } from 'common/interface/CategoryProps';
import { ContainerCategories, ContainerCategoriesCards } from './styles';
import { CardCategory } from './CardCategory';

export const Categories: React.FC = () => {
  return (
    <ContainerCategories>
      <Container>
        <header>
          <Title title="Principais" emphasis="categorias" />
          <button type="button">
            <p className="normal color_normal">Buscar</p>
            <Arrow width={24} height={24} color={theme.colors.PRIMARY[500]} />
          </button>
        </header>
        <ContainerCategoriesCards>
          <ul>
            <CardCategory
              title="Beleza"
              category={CategoryProps.BELEZA}
              countProfessionals={235}
            />
            <CardCategory
              title="Cabeleleiro"
              category={CategoryProps.CABELEIRO}
              countProfessionals={756}
            />
            <CardCategory
              title="Unhas"
              category={CategoryProps.UNHAS}
              countProfessionals={12}
            />
            <CardCategory
              title="Tatuagem"
              category={CategoryProps.TATUAGEM}
              countProfessionals={325}
            />
          </ul>
          <ul>
            <CardCategory
              title="Cílios"
              category={CategoryProps.CILIOS}
              countProfessionals={235}
            />
            <CardCategory
              title="Massagem"
              category={CategoryProps.MASSAGEM}
              countProfessionals={756}
            />
            <CardCategory
              title="Depilação"
              category={CategoryProps.DEPILACAO}
              countProfessionals={12}
            />
            <CardCategory
              title="Spa"
              category={CategoryProps.SPA}
              countProfessionals={325}
            />
          </ul>
        </ContainerCategoriesCards>
      </Container>
    </ContainerCategories>
  );
};
