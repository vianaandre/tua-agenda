import styled from 'styled-components';

export const ContainerPhrase = styled.div<{
    bgImage: string;
}>`
    width: 50%;
    height: 100%;
    background: url(${({ bgImage }) => bgImage}) no-repeat center;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    div.effect_one {
        position: absolute;
        right: 104px;
        top: 137px;
    }
    div.effect_two {
        position: absolute;
        top: 220px;
        left: 250px;
    }
    div.effect_three {
        position: absolute;
        left: 190px;
        bottom: 152px
    }
    div.effect_four {
        position: absolute;
        right: 84px;
        bottom: 230px;
    }
    div.content {
        padding: 0px 220px;
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(3)};
        p {
            font-size: ${({ theme }) => theme.fonts.sizes[32]};
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
            font-weight: 400;
            color: ${({ theme }) => theme.colors.WHITE};
            line-height: 52px;
        }
        div {
            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.spacing(2)};
            strong {
                font-size: ${({ theme }) => theme.fonts.sizes[20]};
                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                font-weight: 500;
                font-style: normal;
                color: ${({ theme }) => theme.colors.WHITE};
            }
            div {
                display: flex;
                align-items: center;
                gap: 4px;
                span {
                    font-size: ${({ theme }) => theme.fonts.sizes[16]};
                    font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                    font-style: italic;
                    font-weight: 400;
                    color: ${({ theme }) => theme.colors.SUCCESS}
                }
            }
        }
    }
`;
