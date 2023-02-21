import styled from 'styled-components';

export const ContainerDesktop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }
    &.auth_user {
        @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
            display: none;
        }
    }
`;

export const ContainerHeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(4)};

    a {
        animation: fadeIn;
        animation-duration: 0.5s;
    }

    button {
        display: flex;
        gap: ${({ theme }) => theme.spacing(1)};
        p.small {
            color: ${({ theme }) => theme.colors.GREY[950]};
            font-weight: 500;
        }
    }
    div.location {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(1)};
        p.small {
            color: ${({ theme }) => theme.colors.GREY[950]};
            font-weight: 500;
        }
    }
    &.user_active {
        button.location, div.location {
            p.small {
                color: ${({ theme }) => theme.colors.WHITE};
                font-weight: 500;
            }
        }
    }
`;

export const ContainerHeaderRight = styled.nav``;
