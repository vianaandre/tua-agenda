import styled from 'styled-components';

import { VarientCardCompanyProps } from './interface';

export const ContainerCardCompany = styled.li<{
    variant: VarientCardCompanyProps;
}>`
    width: calc(100% / ${({ variant }) => (variant === 'large' ? 3 : 4)} - ${({ theme }) => theme.spacing(3)});
    padding: ${({ theme }) => theme.spacing(2)};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)};
    border: 1px solid ${({ theme }) => theme.colors.GREY[500]};
    border-radius: ${({ theme }) => theme.spacing(1)};
    transition: 400ms;
    &:hover {
        transition: 400ms;
        border-color: ${({ theme }) => theme.colors.PRIMARY[500]};
    }
`;

export const ContainerCardCompanyInfos = styled.div`
    div.header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            font-size: ${({ theme }) => theme.fonts.sizes[16]};
            font-weight: 400;
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
            color: ${({ theme }) => theme.colors.PRIMARY[500]};
            padding: ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.spacing(1.5)};
            border: 1px solid ${({ theme }) => theme.colors.PRIMARY[500]};
            border-radius: ${({ theme }) => theme.spacing(1)};
            transition: 400ms;
            &:hover {
                background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                color: ${({ theme }) => theme.colors.WHITE};
                transition: 400ms;
            }
        }
    }
    div.name_address {
        margin-top: 4px;
        h6.title {
            line-height: ${({ theme }) => theme.fonts.height[160]};
        }
    }
    div.footer {
        p.normal.color_light {
            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.spacing(1)};
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        }
        div.categories {
            display: flex;
            gap: ${({ theme }) => theme.spacing(1)};
            margin-top: ${({ theme }) => theme.spacing(1)};
            p.small {
                padding: ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.spacing(2)};
                border-radius: 80px;
                background-color: ${({ theme }) => theme.colors.PRIMARY[250]};
                color: ${({ theme }) => theme.colors.PRIMARY[500]};
                font-weight: 500;
            }
        }
    }
`;

export const ContainerCardCompanyImage = styled.div<{
    image: string;
}>`
    background: url(${({ image }) => image}) no-repeat center;
    width: 100%;
    height: 144px;
    background-size: cover;
    border-radius: ${({ theme }) => theme.spacing(1)};
`;
