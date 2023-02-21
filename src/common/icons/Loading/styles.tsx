import styled from 'styled-components';
import { IIcon } from 'common/icons/interface';

export const ContainerLoadingButton = styled.div<IIcon>`
    position: relative;
    div.loader {
        border: 4px solid ${({ theme }) => theme.colors.PRIMARY[250]};
        border-top: 4px solid ${({ color }) => color};
        border-radius: 50%;
        width: ${({ width }) => `${width}px`};
        height: ${({ height }) => `${height}px`};
        animation: animationSpin 1s linear infinite;
        z-index: ${({ theme }) => theme.zIndex.BASE + 1};
    }
`;
