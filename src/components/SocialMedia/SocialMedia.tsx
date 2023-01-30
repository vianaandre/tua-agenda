import React, { useCallback } from 'react';

import { TypeIcon } from 'common/interface/SocialMediaProps';
import { Facebook, Instagram, Linkedin } from 'common/icons/SocialMedia';
import { theme } from 'common/styles/theme';
import { ContainerSocialMedia } from './styles';
import { SocialMediaProps } from './interface';

export const SocialMedia: React.FC<SocialMediaProps> = ({ color, items }) => {
  const isIcon = useCallback((type: TypeIcon): React.ReactNode => {
    switch (type) {
      case 'facebook':
        return <Facebook width={18} height={18} color={color === 'primary' ? theme.colors.PRIMARY[500] : theme.colors.WHITE} />;
      case 'instagram':
        return <Instagram width={18} height={18} color={color === 'primary' ? theme.colors.PRIMARY[500] : theme.colors.WHITE} />;
      case 'linkedin':
        return <Linkedin width={18} height={18} color={color === 'primary' ? theme.colors.PRIMARY[500] : theme.colors.WHITE} />;
      default:
        return null;
    }
  }, [color]);

  return (
    <ContainerSocialMedia color={color}>
      <ul>
        {items.map((item) => (
          <li key={item.type}>
            <a href={item.link} target="_black">
              {isIcon(item.type)}
            </a>
          </li>
        ))}
      </ul>
    </ContainerSocialMedia>
  );
};
