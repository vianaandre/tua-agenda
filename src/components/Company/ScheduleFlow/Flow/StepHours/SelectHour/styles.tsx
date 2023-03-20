import styled from 'styled-components';

export const ContainerSelectHour = styled.button`
    width: 100%;
    padding: ${({ theme }) => theme.spacing(1.5)};
    border: 1px solid ${({ theme }) => theme.colors.GREY[700]};
    border-radius: ${({ theme }) => theme.spacing(1)};
    display: flex;
    justify-content: space-between;
    p.small {
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        font-weight: 500;
    }
    div.checkbox {
        width: ${({ theme }) => theme.spacing(3)};
        height: ${({ theme }) => theme.spacing(3)};
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.colors.GREY[700]};
        transition: 400ms;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    transition: 400ms;
    &:hover, &.active {
        transition: 400ms;
        border-color: ${({ theme }) => theme.colors.PRIMARY[500]};
        background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
        div.checkbox {
            transition: 400ms;
            border-color: ${({ theme }) => theme.colors.WHITE};
            > div {
                width: ${({ theme }) => theme.spacing(2)};
                height: ${({ theme }) => theme.spacing(2)};
                border-radius: 50%;
                background-color: ${({ theme }) => theme.colors.WHITE};
            }
        }
        p.small {
            color: ${({ theme }) => theme.colors.WHITE};
        }
    }
    &:disabled {
        border-color: ${({ theme }) => theme.colors.GREY[700]};
        background-color: transparent;
        div.checkbox {
            transition: 400ms;
            border-color: ${({ theme }) => theme.colors.GREY[700]};
            > div {
                width: 0px;
                height: 0px;
            }
        }
        p.small {
            color: ${({ theme }) => theme.colors.PRIMARY[800]};
        }
    }
`;
