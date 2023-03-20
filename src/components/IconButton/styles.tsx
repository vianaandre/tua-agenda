import styled from 'styled-components';

export const ContainerIconButton = styled.button`
    transition: 400ms;
    height: fit-content;
    padding: ${({ theme }) => theme.spacing(1)};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &:hover {
        transition: 400ms;
        background-color: ${({ theme }) => theme.colors.ICON_BUTTON};
    }
`;
