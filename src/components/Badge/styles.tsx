import styled from 'styled-components';
import { VariantProps } from './interface';

export const ContainerBadge = styled.div<{
    variant: VariantProps
}>`
    padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(1.5)};
    display: flex;
    align-items: center;
    width: fit-content;
    height: fit-content;
    border-radius: 4px;
    border: 1px solid ${({ theme, variant }) => {
    switch (variant) {
      case 'primary':
        return theme.colors.PRIMARY[500];
      default:
        return theme.colors.PRIMARY[500];
    }
  }};
    span {
        font-size: ${({ theme }) => theme.fonts.sizes[16]};
        font-family: ${({ theme }) => theme.fonts.family.SECONDARY};
        font-weight: 400;
        font-style: normal;
        color: ${({ theme, variant }) => {
    switch (variant) {
      case 'primary':
        return theme.colors.PRIMARY[500];
      default:
        return theme.colors.PRIMARY[500];
    }
  }};
    }
`;
