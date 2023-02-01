import styled from 'styled-components';
import { VariantTranslationProps } from './interface';

export const ContainerTranslation = styled.div<{
    variant: VariantTranslationProps;
}>`
    .dialog_button {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(1)};
        cursor: pointer;
        p {
            text-transform: capitalize !important;
        };
    };
`;

export const ContainerTranslationModal = styled.div`
    width: 90%;
    max-width: 421px;
    padding: ${({ theme }) => theme.spacing(3.5)} ${({ theme }) => theme.spacing(4)};
    background-color: ${({ theme }) => theme.colors.WHITE};
    border-radius: ${({ theme }) => theme.spacing(1)};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(4)};
    .dialog_title {
        font-size: ${({ theme }) => theme.fonts.sizes[32]};
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        font-weight: 700;
        font-style: normal;
        text-align: left;
        color: ${({ theme }) => theme.colors.GREY[1000]};
    }
    .dialog_description {
        font-size: ${({ theme }) => theme.fonts.sizes[16]};
        font-family: ${({ theme }) => theme.fonts.family.SECONDARY};
        font-weight: 400;
        font-style: normal;
        text-align: left;
        color: ${({ theme }) => theme.colors.GREY[850]};
    }
    .dialog_options {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(2.25)};
        button {
            width: 110px;
            padding: ${({ theme }) => theme.spacing(1.5)};
            text-align: center;
            font-size: ${({ theme }) => theme.fonts.sizes[12]};
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
            font-weight: 600;
            font-style: normal;
            color: ${({ theme }) => theme.colors.PRIMARY[800]};
            border: 1px solid ${({ theme }) => theme.colors.GREY[700]};
            border-radius: ${({ theme }) => theme.spacing(1)};
            background-color: transparent;
            transition: 400ms;
            &.active, &:hover {
                border-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                color: ${({ theme }) => theme.colors.PRIMARY[0]};
                transition: 400ms;
                background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
            }
        }
    }
    animation: animationInModalDialog 100ms linear;
    position: relative;
    .dialog_close_translation {
        position: absolute;
        top: ${({ theme }) => theme.spacing(2)};
        right: ${({ theme }) => theme.spacing(2)};
    }
`;
