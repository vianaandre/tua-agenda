import { StatusProps } from 'common/interface/StatusProps';
import styled from 'styled-components';

export const ContainerAlert = styled.div<{
    status: StatusProps
}>`
    padding: ${({ theme }) => theme.spacing(2)};
    display: flex;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing(2)};
    width: 100%;
    border: 1px solid;
    border-color: ${({ status, theme }) => {
    switch (status) {
      case StatusProps.PENDENTE:
        return theme.colors.WARNING;
      default:
        return theme.colors.WARNING;
    }
  }};
  background-color: ${({ status, theme }) => {
    switch (status) {
      case StatusProps.PENDENTE:
        return theme.colors.WARNING_LIGHT;
      default:
        return theme.colors.WARNING_LIGHT;
    }
  }};
  border-radius: ${({ theme }) => theme.spacing(1)};
    p {
        font-size: ${({ theme }) => theme.fonts.sizes[16]};
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        font-weight: 400;
        font-style: normal;
        color: ${({ theme }) => theme.colors.PRIMARY[800]};
        strong {
            font-weight: 700;
        };
        line-height: ${({ theme }) => theme.fonts.height[160]};
    }
`;
