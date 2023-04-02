import styled from 'styled-components';

export const ContainerFlow = styled.div`
    flex: 1;
    max-height: calc(100vh - 190px - 72px);
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-height: calc(100vh - 108px - 57px);
    }
`;
