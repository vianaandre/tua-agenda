import styled from 'styled-components';

export const ContainerHeaderCompany = styled.div`
    position: relative;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.PRIMARY[0]};
    min-height: 492px;
    @media(max-width: 524px) {
        height: 720px;
    }
    div.effect_one, div.effect_two {
        position: absolute;
    };
    div.effect_one {
        left: -700px;
        top: -220px
    }
    div.effect_two {
        right: -800px;
        bottom: -270px
    }
    display: flex;
    align-items: center;
    div.container {
    }
`;

export const ContainerHeaderCompanyBreadCrumb = styled.ul`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
    li {
        span {
            font-size: ${({ theme }) => theme.fonts.sizes[16]};
            font-family: ${({ theme }) => theme.fonts.family.SECONDARY};
            font-weight: 400;
            color: ${({ theme }) => theme.colors.GREY[800]};
        }
        &:last-child {
            span {
                color: ${({ theme }) => theme.colors.BLUE[200]}
            }
        }
    }
`;
