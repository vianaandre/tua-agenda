import styled from 'styled-components';

export const ContainerSearchResult = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing(9)};
    @media(max-width: 524px) {
        margin-bottom: 0px;
    }
`;
