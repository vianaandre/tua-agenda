import styled from 'styled-components';

import { ColorSocialMediaProps } from './interface';

export const ContainerSocialMedia = styled.div<{
    color: ColorSocialMediaProps;
}>`
    ul {
        display: flex;
        gap: ${({ theme }) => theme.spacing(3)};
        li {
            a {
                padding: ${({ theme }) => theme.spacing(1.75)} ${({ theme }) => theme.spacing(1.75)};
                border-radius: 50%;
                background-color: ${({ color, theme }) => {
    if (color === 'primary') {
      return theme.colors.PRIMARY_LIGHT;
    }
    if (color === 'transparent') {
      return theme.colors.WHITE_LIGHT;
    }
    return theme.colors.WHITE;
  }};
                display: flex;
                align-items: center;
                justify-content: center;
                width: fit-content;
            }
        }
    }
`;
