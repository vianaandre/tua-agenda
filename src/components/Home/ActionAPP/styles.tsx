import styled from 'styled-components';

export const ContainerActionAPP = styled.section`
    margin-top: ${({ theme }) => theme.spacing(9)};
    div.container {
        background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(2)};
    }
`;

export const ContainerActionAPPCardLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(3)};
    max-width: 364px;
    margin-left: ${({ theme }) => theme.spacing(9)};
    h2 {
        color: ${({ theme }) => theme.colors.WHITE} !important;
    }
    p.normal {
        color: ${({ theme }) => theme.colors.WHITE};
    }
    div.action_buttons {
        display: flex;
        gap: ${({ theme }) => theme.spacing(2)};
    }
`;

export const ContainerActionAPPCardRight = styled.div`
    margin-bottom: -10px;
`;

export const CoontainerActionBlockLeft = styled.div`
    position: absolute;
    width: 600px;
    height: 230px;
    background-color: ${({ theme }) => theme.colors.WHITE};
    top: calc(-283px / 2);
    left: calc(-716px / 2);
    transform: rotate(-30deg);
`;

export const CoontainerActionBlockRight = styled.div`
    position: absolute;
    width: 600px;
    height: 230px;
    background-color: ${({ theme }) => theme.colors.WHITE};
    bottom: calc(-283px / 2);
    right: calc(-716px / 2);
    transform: rotate(-30deg);
`;
