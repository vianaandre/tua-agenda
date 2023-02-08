import styled from 'styled-components';

export const ContainerAuthSocial = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1.5)};
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing(10.25)};
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
        &:hover {
            transition: 400ms;
            filter: brightness(0.9)
        }
        &:active {
            filter: brightness(0.7);
        }
    }
`;

export const ContainerAuthSocialIcon = styled.div`
    position: absolute;
`;
