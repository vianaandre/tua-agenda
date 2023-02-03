import styled, { css } from 'styled-components';

import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';

const sharedStyles = css<{
    variant: ButtonVariantProps
}>`
    padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) => theme.spacing(3)};
    width: ${({ variant }) => {
    switch (variant) {
      case ButtonVariantProps.FULL:
        return '100%';
      default:
        return 'fit-content';
    }
  }};
    border: ${({ variant, theme }) => {
    switch (variant) {
      case ButtonVariantProps.SECONDARY:
        return `1px solid ${theme.colors.PRIMARY[350]}`;
      default:
        return 'none';
    }
  }};
  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case ButtonVariantProps.PRIMARY:
        return theme.colors.PRIMARY[500];
      case ButtonVariantProps.FULL:
        return theme.colors.PRIMARY[500];
      default:
        return 'transparent';
    }
  }};
    color: ${({ variant, theme }) => {
    switch (variant) {
      case ButtonVariantProps.PRIMARY:
        return theme.colors.WHITE;
      case ButtonVariantProps.FULL:
        return theme.colors.WHITE;
      default:
        return theme.colors.PRIMARY[500];
    }
  }};
    font-size: ${({ theme }) => theme.fonts.sizes[16]};
    font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
    line-height: ${({ theme }) => theme.fonts.height[160]};
    font-weight: bold;
    border-radius: ${({ theme }) => theme.spacing(1)};
    display: flex;
    align-items: center;
    justify-content: ${({ variant }) => {
    switch (variant) {
      case ButtonVariantProps.PRIMARY:
        return 'center';
      case ButtonVariantProps.FULL:
        return 'flex-start';
      default:
        return 'center';
    }
  }};;
    gap: ${({ theme }) => theme.spacing(2)};
    position: relative;
    overflow: hidden;
    transition: 400ms;
    cursor: pointer; 
    &:hover {
        transition: 400ms;
        background-color: ${({ variant, theme }) => {
    switch (variant) {
      case ButtonVariantProps.PRIMARY:
        return theme.colors.PRIMARY[500];
      case ButtonVariantProps.FULL:
        return theme.colors.PRIMARY[500];
      case ButtonVariantProps.OUTLINE_TEXT:
        return 'transparent';
      default:
        return theme.colors.PRIMARY[350];
    }
  }};
        filter: ${({ variant }) => {
    switch (variant) {
      case ButtonVariantProps.PRIMARY:
        return 'brightness(0.9)';
      case ButtonVariantProps.FULL:
        return 'brightness(0.9)';
      case ButtonVariantProps.OUTLINE_TEXT:
        return 'brightness(1.3)';
      default:
        return 'none';
    }
  }};
    };
    position: relative;
    height: fit-content;
`;

export const ContainerButton = styled.button<{
    variant: ButtonVariantProps;
}>`
    ${sharedStyles}
`;

export const ContainerLink = styled.a<{
    variant: ButtonVariantProps;
}>`
    ${sharedStyles}
`;
