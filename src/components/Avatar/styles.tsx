import styled from 'styled-components';
import { variant } from './interface';

export const ContainerAvatar = styled.div<{
    variant: variant;
}>`
    width: ${({ theme, variant }) => {
    switch (variant) {
      case 'small':
        return theme.spacing(6);
      case 'medium':
        return theme.spacing(12);
      case 'large':
        return theme.spacing(14);
      default:
        return theme.spacing(6);
    }
  }};
    height: ${({ theme, variant }) => {
    switch (variant) {
      case 'small':
        return theme.spacing(6);
      case 'medium':
        return theme.spacing(12);
      case 'large':
        return theme.spacing(14);
      default:
        return theme.spacing(6);
    }
  }};
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
    p {
        color: ${({ theme }) => theme.colors.WHITE};
        font-family: ${({ theme }) => theme.fonts.family.ALTERNATIVE};
        font-weight: 600;
        font-style: normal;
        font-size: ${({ theme, variant }) => {
    switch (variant) {
      case 'small':
        return theme.fonts.sizes[16];
      case 'medium':
        return theme.fonts.sizes[24];
      case 'large':
        return theme.fonts.sizes[40];
      default:
        return theme.fonts.sizes[16];
    }
  }};
    }
    img {
        width: 100%;
        object-fit: cover;
    }
`;
