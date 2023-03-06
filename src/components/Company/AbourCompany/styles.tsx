import styled from 'styled-components';

export const ContainerAbourCompany = styled.section`
    margin-top: ${({ theme }) => theme.spacing(9)};
    div.container {
        padding-bottom: ${({ theme }) => theme.spacing(9)};
        border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
        display: flex;
        gap: ${({ theme }) => theme.spacing(8)};
    }
`;
