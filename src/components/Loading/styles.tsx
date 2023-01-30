import styled from 'styled-components';

export const ContainerLoading = styled.div`
    display: none;

    &.active {
        display: flex;
    }

    background-color: ${({ theme }) => theme.colors.PRIMARY[250]};
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    min-width: 200px;
    min-height: 500px;
    position: fixed;
    top: 0;
    z-index: ${({ theme }) => theme.zIndex.OVERLAY};
`;
