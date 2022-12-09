import { InputVariantProps } from 'common/interface/InputVariantProps';
import styled from 'styled-components';

export const ContainerSelect = styled.div<{
    variant: InputVariantProps;
}>`
    width: 100%;
`;

export const ContainerSelectSelect = styled.div<{
    variant: InputVariantProps;
    widthOption: number;
    left: number;
}>`
    display: flex;
    align-items: center;
    width: 100%;
    border: ${({ theme, variant }) => {
    switch (variant) {
      case InputVariantProps.PRIMARY:
        return `2px solid ${theme.colors.GREY[850]}`;
      case InputVariantProps.OUTLINE:
        return 'none';
      default:
        return `2px solid ${theme.colors.GREY[850]}`;
    }
  }};
            border-radius: ${({ theme, variant }) => {
    switch (variant) {
      case InputVariantProps.PRIMARY:
        return theme.spacing(1);
      case InputVariantProps.OUTLINE:
        return 0;
      default:
        return theme.spacing(1);
    }
  }};
    .trigger {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        outline: none;
        padding: ${({ theme }) => theme.spacing(2.25)} ${({ theme, variant }) => {
  switch (variant) {
    case InputVariantProps.OUTLINE:
      return 0;
    case InputVariantProps.PRIMARY:
      return theme.spacing(2.5);
    default:
      return theme.spacing(2.5);
  }
}};     
        border-bottom: ${({ theme, variant }) => {
    switch (variant) {
      case InputVariantProps.PRIMARY:
        return 'none';
      case InputVariantProps.OUTLINE:
        return `2px solid ${theme.colors.PRIMARY[250]}`;
      default:
        return 'none';
    }
  }};
        span {
            font-size: ${({ theme }) => theme.fonts.sizes[16]};
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
            font-weight: 500;
            display: flex;
        }
    }
    &.focus {
        transition: 400ms;
        border-color: ${({ theme, variant }) => {
    switch (variant) {
      case InputVariantProps.PRIMARY:
        return theme.colors.PRIMARY[800];
      case InputVariantProps.OUTLINE:
        return 'none';
      default:
        return theme.colors.PRIMARY[800];
    }
  }};
        svg {
            path {
                stroke: ${({ theme }) => theme.colors.PRIMARY[500]};
            }
        };
         .trigger {
            border-color: ${({ theme, variant }) => {
    switch (variant) {
      case InputVariantProps.PRIMARY:
        return theme.colors.PRIMARY[800];
      case InputVariantProps.OUTLINE:
        return theme.colors.PRIMARY[500];
      default:
        return theme.colors.PRIMARY[800];
    }
  }};
            svg {
                path {
                    stroke: ${({ theme, variant }) => {
    switch (variant) {
      case InputVariantProps.OUTLINE:
        return theme.colors.PRIMARY[500];
      case InputVariantProps.PRIMARY:
        return theme.colors.PRIMARY[800];
      default:
        return theme.colors.PRIMARY[500];
    }
  }};
                }
            }
         }
    }

    .content {
        width: 100%;
        background-color: ${({ theme }) => theme.colors.WHITE};
        margin-top: ${({ theme }) => theme.spacing(23)};
        margin-left: ${({ variant, left }) => {
    switch (variant) {
      case InputVariantProps.OUTLINE:
        return `${left}%`;
      case InputVariantProps.PRIMARY:
        return '0px';
      default:
        return '0px';
    }
  }};
        overflow: hidden;
        border-radius: 0px 0px 4px 4px;
        .item {
            padding: ${({ theme }) => theme.spacing(1.5)};
            display: flex;
            cursor: pointer;
            width: ${({ widthOption }) => `${widthOption}px`};
            border: none;
            outline: none;
            span {
                font-size: ${({ theme }) => theme.fonts.sizes[14]};
                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                color: ${({ theme }) => theme.colors.PRIMARY[800]};
                font-weight: 500;
            }
            &.item_active {
                background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                span {
                    color: ${({ theme }) => theme.colors.WHITE};
                }
            }
            &:hover {
                background-color: ${({ theme }) => theme.colors.PRIMARY[500]};

                span {
                    color: ${({ theme }) => theme.colors.WHITE};
                }
            }
        }
    }
`;

export const ContainerSelectIcon = styled.div`
    &.padding_left {
        padding-left: ${({ theme }) => theme.spacing(2.5)};
    }
    &.padding_right {
        padding-right: ${({ theme }) => theme.spacing(2.5)};
    }
    display: flex;
`;
