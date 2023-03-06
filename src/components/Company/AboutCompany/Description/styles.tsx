import styled from 'styled-components';

export const ContainerDescription = styled.div`
    div.description {
        h4 {
            color: ${({ theme }) => theme.colors.BLUE[200]};
            font-family: ${({ theme }) => theme.fonts.family.TITLE};
        }
        p {
            color: ${({ theme }) => theme.colors.BLUE[200]};
            font-weight: 400;
            margin-top: ${({ theme }) => theme.spacing(2)};
        }
    }
    div.photos {
        margin-top: ${({ theme }) => theme.spacing(5)};
        display: flex;
        height: 606px;
        width: 100%;
        gap: ${({ theme }) => theme.spacing(1.5)};
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            height: 400px;
        }
        div.photos_internal {
            width: 40%;
            height: 606px;
            display: flex;
            flex-direction: column;
            gap: ${({ theme }) => theme.spacing(1.5)};
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                display: none;
            }
        }
    }
`;

export const ContainerDescriptionPhotos = styled.div<{
    imageUrl: string;
}>`
    background: url(${({ imageUrl }) => `"${imageUrl}"`}) no-repeat center;
    width: 60%;
    height: 100%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
    }

    &.photos_internals {
        height: calc(100% / 3);
        width: 100%;
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            display: none
        }
    }
`;
