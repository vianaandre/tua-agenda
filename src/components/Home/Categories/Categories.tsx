import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';

import { Title } from 'components/Home/Title';
import { Container } from 'common/styles/container';
import { Arrow } from 'common/icons';
import { theme } from 'common/styles/theme';
import { CategoriesProps } from 'common/interface/CategoriesProps';
import { useCategories } from 'common/hooks/useCategories';
import { carouselCategories } from 'utils/carousel';
import { ContainerCategories, ContainerCategoriesCards } from './styles';
import { CardCategory } from './CardCategory';
import 'react-multi-carousel/lib/styles.css';

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
          <ul className="desktop">
            {categories.map((item) => (
              <CardCategory
                key={item.description}
                title={item.description}
                category={item.type}
                countProfessionals={item.countProfessionals}
              />
            ))}
          </ul>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass="carousel_categories"
            draggable
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={100}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={carouselCategories}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={0}
            swipeable
          >
            {categories.map((item) => (
              <CardCategory
                key={item.description}
                title={item.description}
                category={item.type}
                countProfessionals={item.countProfessionals}
              />
            ))}
          </Carousel>
        </ContainerCategoriesCards>
      </Container>
    </ContainerCategories>
  );
};
