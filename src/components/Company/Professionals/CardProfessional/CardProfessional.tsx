import React from 'react';
import { useIntl } from 'react-intl';

import { Avatar } from 'components/Avatar';
import { ContainerProfessional } from './styles';
import { CardProfessionalProps } from './interface';

export const CardProfessional: React.FC<CardProfessionalProps> = ({
  assessment, name, photoUrl, service,
}) => {
  const { formatMessage } = useIntl();

  return (
    <ContainerProfessional type="button">
      <Avatar
        username={name}
        image={photoUrl}
        variant="small"
      />
      <h6 className="title color_blue_200">{name}</h6>
      <div className="infos">
        <span className="normal color_grey_800">{service}</span>
        <div className="assessment">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5836 8.27578L15.6328 7.41093L12.9727 2.01797C12.9 1.87031 12.7805 1.75078 12.6328 1.67812C12.2625 1.49531 11.8125 1.64765 11.6274 2.01797L8.96722 7.41093L3.01644 8.27578C2.85238 8.29922 2.70238 8.37656 2.58753 8.49375C2.44869 8.63645 2.37218 8.82843 2.37482 9.02752C2.37746 9.2266 2.45902 9.41649 2.60159 9.55547L6.90706 13.7531L5.88988 19.6805C5.86602 19.8183 5.88128 19.9602 5.93392 20.0898C5.98656 20.2195 6.07447 20.3318 6.18769 20.414C6.30091 20.4962 6.43491 20.5451 6.57448 20.555C6.71406 20.565 6.85363 20.5356 6.97738 20.4703L12.3 17.6719L17.6227 20.4703C17.768 20.5477 17.9368 20.5734 18.0985 20.5453C18.5063 20.475 18.7805 20.0883 18.7102 19.6805L17.693 13.7531L21.9985 9.55547C22.1157 9.44062 22.193 9.29062 22.2164 9.12656C22.2797 8.7164 21.9938 8.33672 21.5836 8.27578Z" fill="#FAAD13" />
          </svg>
          <span className="normal color_grey_800">
            {assessment.toFixed(1)}
            /10
            {' '}
            {formatMessage({
              id: 'ASSESSMENTS',
            })}
          </span>
        </div>
      </div>
    </ContainerProfessional>
  );
};
