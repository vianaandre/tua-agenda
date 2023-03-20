import styled from 'styled-components';

import { InputVariantProps } from 'common/interface/InputVariantProps';

export const ContainerInput = styled.div<{
    variant: InputVariantProps;
}>`
    width: 100%;
    margin: ${({ theme }) => theme.spacing(1)} 0;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1.5)};

    label {
        font-size: ${({ theme }) => theme.fonts.sizes[16]};
        font-weight: 500;
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        color: ${({ theme }) => theme.colors.GREY[950]};

        b {
            color: ${({ theme }) => theme.colors.DANGER}
        }
        &.focus {
            color: ${({ theme }) => theme.colors.PRIMARY[800]};
        }
    }
`;

export const ContainerInputInput = styled.div<{
    variant: InputVariantProps;
}>`
    display: flex;
    align-items: center;
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
    transition: 400ms;
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
        /* svg {
            path {
                fill: ${({ theme, variant }) => {
    switch (variant) {
      case InputVariantProps.PRIMARY:
        return theme.colors.PRIMARY[800];
      case InputVariantProps.OUTLINE:
        return theme.colors.PRIMARY[500];
      default:
        return theme.colors.PRIMARY[800];
    }
  }};
                stroke: ${({ theme, variant }) => {
    switch (variant) {
      case InputVariantProps.PRIMARY:
        return theme.colors.PRIMARY[800];
      case InputVariantProps.OUTLINE:
        return theme.colors.PRIMARY[500];
      default:
        return theme.colors.PRIMARY[800];
    }
  }}
            }
            circle {
                stroke: ${({ theme, variant }) => {
    switch (variant) {
      case InputVariantProps.PRIMARY:
        return theme.colors.PRIMARY[800];
      case InputVariantProps.OUTLINE:
        return theme.colors.PRIMARY[500];
      default:
        return theme.colors.PRIMARY[800];
    }
  }}
            }
        } */
    }
    &.error {
        transition: 400ms;
        border-color: ${({ theme, variant }) => {
    switch (variant) {
      case InputVariantProps.PRIMARY:
        return theme.colors.DANGER;
      case InputVariantProps.OUTLINE:
        return 'none';
      default:
        return theme.colors.DANGER;
    }
  }};
        /* svg {
            path {
                fill: ${({ theme, variant }) => {
    switch (variant) {
      case InputVariantProps.PRIMARY:
        return theme.colors.DANGER;
      case InputVariantProps.OUTLINE:
        return theme.colors.DANGER;
      default:
        return theme.colors.DANGER;
    }
  }};
                stroke: ${({ theme, variant }) => {
    switch (variant) {
      case InputVariantProps.PRIMARY:
        return 'transparent';
      case InputVariantProps.OUTLINE:
        return theme.colors.DANGER;
      default:
        return 'transparent';
    }
  }}
            }
            circle {
                stroke: ${({ theme, variant }) => {
    switch (variant) {
      case InputVariantProps.PRIMARY:
        return theme.colors.DANGER;
      case InputVariantProps.OUTLINE:
        return theme.colors.DANGER;
      default:
        return theme.colors.DANGER;
    }
  }}
            }
        } */
        input {
            border-bottom: ${({ theme, variant }) => {
    switch (variant) {
      case InputVariantProps.PRIMARY:
        return 'none';
      case InputVariantProps.OUTLINE:
        return `2px solid ${theme.colors.DANGER} !important`;
      default:
        return 'none';
    }
  }};
        }
    }
`;

export const ContainerInputInputInput = styled.div<{
    variant: InputVariantProps;
}>`
    width: 100%;
    input {
        width: 100%;
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
        border: none;
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
        background-color: transparent;
        font-size: ${({ theme }) => theme.fonts.sizes[16]};
        font-weight: 500;
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        color: ${({ theme }) => theme.colors.PRIMARY[800]};
        &::placeholder {
            color: ${({ theme }) => theme.colors.GREY[700]};
            font-weight: 400
        };
        &:focus {
            outline: none;
            box-shadow: none;
            border-color: ${({ theme, variant }) => {
    switch (variant) {
      case InputVariantProps.PRIMARY:
        return 'none';
      case InputVariantProps.OUTLINE:
        return theme.colors.PRIMARY[500];
      default:
        return 'none';
    }
  }};
        }
    };
    position: relative;
    p.error {
        position: absolute;
        bottom: -18px;
        font-size: ${({ theme }) => theme.fonts.sizes[12]};
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        font-weight: 500;
        color: ${({ theme }) => theme.colors.DANGER};
    }
`;

export const ContainerInputIcon = styled.div`
    &.padding_left {
        padding-left: ${({ theme }) => theme.spacing(2.5)};
    }
    &.padding_right {
        padding-right: ${({ theme }) => theme.spacing(2.5)};
    }
    display: flex;
    &.right {
        padding-right: ${({ theme }) => theme.spacing(2)};
    }
`;
