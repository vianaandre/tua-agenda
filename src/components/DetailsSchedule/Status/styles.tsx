import styled from 'styled-components';

export const ContainerStatus = styled.div<{
    status: string;
}>`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(3)};
    div.status {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(1)};
        div {
            width: ${({ theme }) => theme.spacing(1)};
            height: ${({ theme }) => theme.spacing(1)};
            border-radius: 50%;
            background-color: ${({ status, theme }) => {
    switch (status) {
      case 'Pendente':
        return theme.colors.WARNING;
      case 'Concluído':
        return theme.colors.SUCCESS;
      default:
        return theme.colors.DANGER;
    }
  }};
        }
        p {
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
            font-weight: 500;
            color: ${({ status, theme }) => {
    switch (status) {
      case 'Pendente':
        return theme.colors.WARNING;
      case 'Concluído':
        return theme.colors.SUCCESS;
      default:
        return theme.colors.DANGER;
    }
  }};
        }
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        svg {
            display: none;
        }
        width: 100%;
        margin-top: ${({ theme }) => theme.spacing(2)};
    }
`;
