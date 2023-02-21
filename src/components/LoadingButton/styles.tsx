import styled from 'styled-components';

export const ContainerLoadingButton = styled.div<{
    bgColor: string;
}>`
    div.bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: ${({ bgColor }) => bgColor};
        opacity: 0.9;
        z-index: ${({ theme }) => theme.zIndex.BASE};
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div.loader {
        border: 4px solid ${({ theme }) => theme.colors.PRIMARY[250]}; /* Light grey */
        border-top: 4px solid ${({ theme }) => theme.colors.PRIMARY[500]}; /* Blue */
        border-radius: 50%;
        width: 28px;
        height: 28px;
        animation: animationSpin 1s linear infinite;
        position: absolute;
        left: calc(50% - 28px / 2);
        top: calc(50% - 28px / 2);
        z-index: ${({ theme }) => theme.zIndex.BASE + 1};
    }
`;
