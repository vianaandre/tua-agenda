import styled from 'styled-components';

export const ContainerInputCode = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1.5)};
    width: 100%;
    position: relative;
    padding-bottom: ${({ theme }) => theme.spacing(1)};
    label {
        font-size: ${({ theme }) => theme.fonts.sizes[16]};
        font-weight: 500;
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        color: ${({ theme }) => theme.colors.GREY[950]};

        b {
            color: ${({ theme }) => theme.colors.DANGER}
        }
    }
    div.react-code-input {
        display: flex !important;
        align-items: center !important;
        gap: ${({ theme }) => theme.spacing(1)} !important;
    }
    input {
        width: ${({ theme }) => theme.spacing(6.875)} !important;
        height: ${({ theme }) => theme.spacing(7)} !important;
        border-radius: ${({ theme }) => theme.spacing(1)} !important;
        box-shadow: none !important;
        text-align: center !important;
        font-size: ${({ theme }) => theme.fonts.sizes[20]} !important;
        font-weight: 500 !important;
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY} !important;
        color: ${({ theme }) => theme.colors.PRIMARY[800]} !important;
        padding-left: 0px !important;
        &:focus, &:focus-visible {
            border-color: ${({ theme }) => theme.colors.PRIMARY[500]} !important;
            outline: none !important;
            border-width: 2px !important;
        };
        margin: 0px !important;
    }
    &.error_code {
        input {
            border-color: ${({ theme }) => theme.colors.DANGER} !important;
            border-width: 2px !important;
        }
    }
    p.error {
        position: absolute;
        bottom: -10px;
        font-size: ${({ theme }) => theme.fonts.sizes[12]};
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        font-weight: 500;
        color: ${({ theme }) => theme.colors.DANGER};
    }
`;
