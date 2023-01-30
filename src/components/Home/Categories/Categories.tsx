import React, { useEffect } from 'react';

import { Title } from 'components/Home/Title';
import { Container } from 'common/styles/container';
import { Arrow } from 'common/icons';
import { theme } from 'common/styles/theme';
import { CategoriesProps } from 'common/interface/CategoriesProps';
import { useCategories } from 'common/hooks/useCategories';
import { ContainerCategories, ContainerCategoriesCards } from './styles';
import { CardCategory } from './CardCategory';

export const Categories: React.FC<{ categories: CategoriesProps[] }> = ({ categories }) => {
  const { category, onUpdateStateCategories, onLoadServicesPerCategory } = useCategories();

  useEffect(() => {
    onUpdateStateCategories(categories);
  }, [categories, onUpdateStateCategories]);

  return (
    <ContainerCategories>
      <Container>
        <header>
          <Title title="Principais" emphasis="categorias" />
          {category && (
            <button type="button" onClick={onLoadServicesPerCategory}>
              <p className="normal color_normal">Buscar</p>
              <Arrow width={24} height={24} color={theme.colors.PRIMARY[500]} />
            </button>
          )}
        </header>
        <ContainerCategoriesCards>
          <ul>
            {categories.map((item) => (
              <CardCategory
                title={item.description}
                category={item.type}
                countProfessionals={item.countProfessionals}
              />
            ))}
          </ul>
        </ContainerCategoriesCards>
      </Container>
    </ContainerCategories>
  );
};
