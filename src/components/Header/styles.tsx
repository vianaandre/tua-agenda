import styled from 'styled-components';

export const ContainerHeader = styled.header`
    width: 100vw;
    padding: ${({ theme }) => theme.spacing(1.75)} 0px;
    display: flex;
    align-items: center;
    min-height: 80px;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.WHITE_LIGHT};
        div.container {
            padding-right: ${({ theme }) => theme.spacing(2.5)};
        }
    }

    &.user_active {
        background-color: ${({ theme }) => theme.colors.PRIMARY[800]};
    }
`;
