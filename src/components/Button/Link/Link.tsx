import React from 'react';
import LinkNext from 'next/link';

import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { ContainerLink } from '../styles';
import { ILink } from './interface';

export const Link: React.FC<ILink> = ({
  text, variant = ButtonVariantProps.PRIMARY, icon, href, target, ...rest
}) => {
  return (
    <LinkNext href={href} legacyBehavior passHref {...rest}>
      <ContainerLink variant={variant} target={target}>
        {icon && icon.direction === 'left' && (
          icon.icon
        )}
        {text}
        {icon && icon.direction === 'right' && (
          icon.icon
        )}
      </ContainerLink>
    </LinkNext>
  );
};
