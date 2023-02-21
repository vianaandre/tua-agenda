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
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
`;

export const ContainerHeaderProfileLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1.5)};
    button {
        color: ${({ theme }) => theme.colors.WHITE};
        padding-left: 0px;
        &:hover {
            color: ${({ theme }) => theme.colors.WHITE};
            filter: brightness(0.8)
        }
    }
`;

export const ContainerHeaderProfileRight = styled.div`
    div.user_photo {
        position: relative;
        label {
            width: ${({ theme }) => theme.spacing(5)};
            height: ${({ theme }) => theme.spacing(5)};
            border-radius: 50%;
            background-color: ${({ theme }) => theme.colors.WHITE};
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            bottom: 0px;
            right: 0px;
            cursor: pointer;
        }
    }
`;

export const ContainerHeaderProfileRightAvatar = styled.div<{
    imageUrl: string;
}>`
    background-image: url(${({ imageUrl }) => `"${imageUrl}"`});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    object-fit: cover;
`;
