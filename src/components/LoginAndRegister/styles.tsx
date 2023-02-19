import styled from 'styled-components';

export const ContainerLoginAndRegister = styled.div`
    height: fit-content;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
`;

export const ContainerLoginAndRegisterContent = styled.div`
    width: 50%;
    height: 100%;
    padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(3)};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 936px;
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        min-height: fit-content;
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(3)};
    }
    div.content_auth {
        height: 100%;
        width: 100%;
        max-width: 420px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        a, button {
            padding-right: 0px;
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
           a, button {
                font-size: ${({ theme }) => theme.fonts.sizes[14]} !important;
                gap: ${({ theme }) => theme.spacing(1)};
           }
        }
    }
    div.or {
        margin-top: ${({ theme }) => theme.spacing(4)};
        margin-bottom: ${({ theme }) => theme.spacing(3)};
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(4)};
        p {
            font-weight: 500;
        }
        div {
            flex: 1;
            height: 2px;
            background-color: #E5EAF4;
        }
    }
    div.forgot_password {
        margin-top: ${({ theme }) => theme.spacing(10.25)};
        padding: ${({ theme }) => theme.spacing(3)} 0px;
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(2)};
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            margin-top: ${({ theme }) => theme.spacing(7)};
        }
        p {
            font-weight: 500;
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
            strong {
                font-weight: 500;
                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                color: ${({ theme }) => theme.colors.PRIMARY[800]};
                text-decoration: underline;
            }
        }
    }
`;
