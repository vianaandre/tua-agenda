import styled from 'styled-components';

export const ContainerScheduleFlow = styled.div`
    height: 0px;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.WHITE};
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 10000;
    transition: 400ms;
    &.active {
        transition: 400ms;
        width: 100vw;
        height: calc(100vh - 80px);
    }
`;
