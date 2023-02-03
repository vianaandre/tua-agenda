import styled from 'styled-components';

export const ContainerDesktop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }
`;

export const ContainerHeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(4)};

    button {
        display: flex;
        gap: ${({ theme }) => theme.spacing(1)};
        p.small {
            color: ${({ theme }) => theme.colors.GREY[950]};
            font-weight: 500;
        }
    }
`;

export const ContainerHeaderRight = styled.nav`
    ul {
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
    }
`;
