import styled from 'styled-components';

export const ContainerLoading = styled.div`
    opacity: 1;
    position: fixed;
    z-index: 1 !important;
    display: flex;

    &.disabled {
        transition: 400ms;
        opacity: 0;
        z-index: -1 !important;
    }

    background-color: ${({ theme }) => theme.colors.PRIMARY[250]};
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    min-width: 200px;
    min-height: 500px;
    top: 0;
    z-index: ${({ theme }) => theme.zIndex.OVERLAY};
`;
