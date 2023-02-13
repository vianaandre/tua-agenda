import styled from 'styled-components';

export const ContainerCheckbox = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1.25)};
    label {
        font-size: ${({ theme }) => theme.fonts.sizes[14]};
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        font-weight: 500;
        color: ${({ theme }) => theme.colors.GREY[950]};
    }
    button.root {
        width: ${({ theme }) => theme.spacing(2)};
        height: ${({ theme }) => theme.spacing(2)};
        border-radius: 4px;
        border: 2px solid ${({ theme }) => theme.colors.GREY[850]};
        &:hover {
            border-color: ${({ theme }) => theme.colors.PRIMARY[500]};
        }
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 400ms;
        padding-top: 1px;
        &.active {
            border-color: ${({ theme }) => theme.colors.PRIMARY[500]};
        }
    }
    span.indicator {
        transition: 400ms;
        display: flex;
        width: 90%;
        height: 90%;
        border-radius: 2px;
        background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
    }
`;
