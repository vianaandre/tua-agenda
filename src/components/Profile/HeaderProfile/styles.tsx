import styled from 'styled-components';

export const ContainerHeaderProfile = styled.div`
    width: 100%;
    padding-top: ${({ theme }) => theme.spacing(2)};
    background-color: ${({ theme }) => theme.colors.PRIMARY[800]};
    div.container {
        div.content_page {
            width: 100%;
            padding-top: ${({ theme }) => theme.spacing(3)};
            border-top: 1px solid ${({ theme }) => theme.colors.WHITE_LIGHT};
            padding-bottom: ${({ theme }) => theme.spacing(7)};
        }
    }
`;

export const ContainerHeaderProfileLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1.5)};
    a {
        color: ${({ theme }) => theme.colors.WHITE};
        padding-left: 0px;
        &:hover {
            color: ${({ theme }) => theme.colors.WHITE};
            filter: brightness(0.8)
        }
    }
`;
