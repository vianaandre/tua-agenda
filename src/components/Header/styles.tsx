import styled from 'styled-components';

export const ContainerHeader = styled.header`
    width: 100vw;
    padding: ${({ theme }) => theme.spacing(1.75)} 0px;
    display: flex;
    align-items: center;
    min-height: 80px;

    &.user_active {
        background-color: ${({ theme }) => theme.colors.PRIMARY[800]};
    }
`;
