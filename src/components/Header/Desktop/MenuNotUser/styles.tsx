import styled from 'styled-components';

export const ContainerMenuNotUser = styled.ul`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
    li {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(1)};

        p.small {
            color: ${({ theme }) => theme.colors.GREY[950]};
            font-weight: 500;
            text-transform: uppercase;
        }
        &.separator {
            padding-right: ${({ theme }) => theme.spacing(2)};
            height: 100%;
            border-right: 1px solid ${({ theme }) => theme.colors.PRIMARY[250]};
        }
    }
`;
