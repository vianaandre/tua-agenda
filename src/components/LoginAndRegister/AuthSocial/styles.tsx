import styled from 'styled-components';

export const ContainerAuthSocial = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1.5)};
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing(10.25)};
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-top: ${({ theme }) => theme.spacing(7)};
    }
    button {
        width: 100%;
        padding: ${({ theme }) => theme.spacing(2.25)};
        background-color: #F5F5F5;
        font-size: ${({ theme }) => theme.fonts.sizes[16]};
        font-weight: 700;
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        color: ${({ theme }) => theme.colors.PRIMARY[800]};
        border-radius: 8px;
        transition: 400ms;
        &:not(:disabled):hover {
            transition: 400ms;
            filter: brightness(0.9);
        }
        &:not(:disabled):active {
            filter: brightness(0.7);
        }
        &:disabled {
            opacity: 1;
        }
        min-height: 57px;
    }
`;

export const ContainerAuthSocialIcon = styled.div`
    position: absolute;
`;
