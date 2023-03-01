import React, { useCallback } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

import { TypeIcon } from 'common/interface/SocialMediaProps';
import {
  Facebook, Instagram, Linkedin, Youtube, Tiktok,
} from 'common/icons/SocialMedia';
import { theme } from 'common/styles/theme';
import { ContainerSocialMedia } from './styles';
import { SocialMediaProps } from './interface';

export const SocialMedia: React.FC<SocialMediaProps> = ({ color, items, help }) => {
  const isIcon = useCallback((type: TypeIcon): React.ReactNode => {
    switch (type) {
      case 'facebook':
        return <Facebook width={18} height={18} color={color === 'primary' ? theme.colors.PRIMARY[500] : theme.colors.WHITE} />;
      case 'instagram':
        return <Instagram width={18} height={18} color={color === 'primary' ? theme.colors.PRIMARY[500] : theme.colors.WHITE} />;
      case 'linkedin':
        return <Linkedin width={18} height={18} color={color === 'primary' ? theme.colors.PRIMARY[500] : theme.colors.WHITE} />;
      case 'youtube':
        return <Youtube width={18} height={18} color={color === 'primary' ? theme.colors.PRIMARY[500] : theme.colors.WHITE} />;
      case 'tiktok':
        return <Tiktok width={18} height={18} color={color === 'primary' ? theme.colors.PRIMARY[500] : theme.colors.WHITE} />;
      default:
        return null;
    }
  }, [color]);

  return (
    <ContainerSocialMedia color={color}>
      <ul>
        {items.map((item) => (
          <li key={item.type}>
            {help ? (
              <Tooltip.Provider>
                <Tooltip.Root delayDuration={200}>
                  <Tooltip.Trigger asChild>
                    <a href={item.link} target="_black">
                      {isIcon(item.type)}
                    </a>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content sideOffset={5} className="tooltip_social_content" side="bottom">
                      <p className="small color_white">
                        {item.type}
                      </p>
                      <Tooltip.Arrow className="tooltip_social_content_arrow" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            ) : (
              <a href={item.link} target="_black">
                {isIcon(item.type)}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ContainerSocialMedia>
  );
};
