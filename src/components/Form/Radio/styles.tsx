import styled from 'styled-components';

export const ContainerRadio = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
    label {
        font-size: ${({ theme }) => theme.fonts.sizes[14]};
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        font-weight: 500;
        color: ${({ theme }) => theme.colors.BLACK[500]};
    }
    button {
        width: ${({ theme }) => theme.spacing(6)};
        height: ${({ theme }) => theme.spacing(3)};
        background-color: ${({ theme }) => theme.colors.GREY[600]};
        border-radius: ${({ theme }) => theme.spacing(1.25)};
        display: flex;
        align-items: center;
        padding: 0px 4px;
        transition: 400ms;
        span {
            width: ${({ theme }) => theme.spacing(2.25)};
            height: ${({ theme }) => theme.spacing(2.25)};
            border-radius: 50%;
            transition: 400ms;
            background-color: ${({ theme }) => theme.colors.WHITE};
            transform: translateX(0px);
        }
        &[data-state='checked'] {
            transition: 400ms;
            background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
            span {
                transition: 400ms;
                transform: translateX(22px);
            }
        }
    }
`;
