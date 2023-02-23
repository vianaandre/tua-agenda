import styled from 'styled-components';

export const ContainerInfos = styled.div`
    display: flex;
    div.infos {
        div.infos_header {
            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.spacing(1.5)};
        }
    }
`;

export const ContainerInfosBanner = styled.div<{
    imageUrl: string;
}>`
    background: url(${({ imageUrl }) => `"${imageUrl}"`}) no-repeat center;
    object-fit: cover;
    height: 240px;
    width: 240px;
    border-radius: 8px;
`;
