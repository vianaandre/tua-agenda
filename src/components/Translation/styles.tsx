import styled from 'styled-components';
import { VariantTranslationProps } from './interface';

export const ContainerTranslation = styled.div<{
    variant: VariantTranslationProps;
}>`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
    cursor: pointer;
    p {
        text-transform: capitalize !important;
    }
`;
