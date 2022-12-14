import styled from 'styled-components';

export const ContainerAvatar = styled.div`
    width: ${({ theme }) => theme.spacing(6)};
    height: ${({ theme }) => theme.spacing(6)};
    border-radius: 50%;
    overflow: hidden;
    img {
        width: 100%;
        object-fit: cover;
    }
`;
