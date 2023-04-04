import styled from 'styled-components';

export const ContainerScheduleFlow = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.WHITE};
    position: fixed;
    top: 0px;
    left: 0px;
    transition: 400ms;
    transform: translateY(100vh);
    display: flex;
    flex-direction: column;
    z-index: ${({ theme }) => theme.zIndex.BASE};
    &.auth_flow {
        height: 100vh !important;
        overflow: auto;
    }
    &.active {
        transform: translateY(0px);
        transition: 400ms;
        width: 100vw;
        height: 100vh
    }
`;
