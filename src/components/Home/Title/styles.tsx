import styled from 'styled-components';

export const ContainerTitle = styled.h2`
    strong {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.PRIMARY[500]};
    }
`;
