import styled from 'styled-components';

export const ContainerActionsButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(3)};
    margin-top: ${({ theme }) => theme.spacing(4)};
    margin-bottom: ${({ theme }) => theme.spacing(4)};

    button.cancel {
        background-color: ${({ theme }) => theme.colors.DANGER};
        border-color: ${({ theme }) => theme.colors.DANGER};
        margin-left: auto;
    }
`;
