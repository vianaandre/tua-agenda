import styled from 'styled-components';

export const ContainerModalSelectDate = styled.div`
    width: 90%;
    height: fit-content;
    max-width: fit-content;
    background-color: ${({ theme }) => theme.colors.WHITE};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: ${({ theme }) => theme.spacing(1)};
    animation: animationContentShow 200ms linear forwards;
    div.header {
        width: 100%;
        padding: ${({ theme }) => theme.spacing(3)};
        display: flex;
        justify-content: center;
        border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
    }
    div.body {
        padding: ${({ theme }) => theme.spacing(3)};
    }
    div.footer {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: ${({ theme }) => theme.spacing(2)};
        padding: ${({ theme }) => theme.spacing(3)};
        padding-top: 0px;
    }
`;
