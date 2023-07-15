import React from 'react';
import { useIntl } from 'react-intl';

import { Container } from 'common/styles/container';
import { useCompany } from 'common/hooks/useCompany';
import { carouselProfessionals } from 'utils/carousel';
import Carousel from 'react-multi-carousel';
import { ContainerProfessionals } from './styles';
import { CardProfessional } from './CardProfessional';

export const Professionals: React.FC = () => {
  const { employees } = useCompany();
  const { formatMessage } = useIntl();

  return (
    <ContainerProfessionals>
      <Container>
        <div className="content">
          <h4 className="title">
            {formatMessage({
              id: 'SCHEDULE_PROFESSIONAL',
            })}
          </h4>
          {employees && (
          <div className="professionals">
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              containerClass="carousel_professionals"
              draggable
              focusOnSelect={false}
              infinite
              keyBoardControl
              minimumTouchDrag={100}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={carouselProfessionals}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={0}
              swipeable
            >
              {[...employees, ...employees, ...employees, ...employees, ...employees].map((item) => (
                <li key={item.id}>
                  <CardProfessional name={item.nome} assessment={2} photoUrl={item.linkImagem} service={item.apelido} />
                </li>
              ))}
            </Carousel>
            <div className="desktop">
              <ul>
                {[...employees, ...employees, ...employees, ...employees, ...employees].map((item, index) => (
                  <CardProfessional key={`${item.id}-${index + 1}`} name={item.nome} assessment={2} photoUrl={item.linkImagem} service={item.apelido} />
                ))}
              </ul>
            </div>
          </div>
          )}
        </div>
      </Container>
    </ContainerProfessionals>
  );
};
