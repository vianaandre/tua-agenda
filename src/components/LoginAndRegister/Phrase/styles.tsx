import styled from 'styled-components';

export const ContainerPhrase = styled.div<{
    bgImage: string;
}>`
    width: 50%;
    height: 100vh;
    min-height: 936px;
    background: url(${({ bgImage }) => bgImage}) no-repeat center;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }

    div.effect_one {
        position: absolute;
        right: 12%;
        top: 137px;
        @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
            top: 192px
        }
    }
    div.effect_two {
        position: absolute;
        top: 200px;
        left: 25%;
        @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
            left: 15%;
            top: 240px;
        }
    }
    div.effect_three {
        position: absolute;
        left: 20%;
        bottom: 152px;
        @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
            left: 12%;
            bottom: 172px;
        }
    }
    div.effect_four {
        position: absolute;
        right: 9%;
        bottom: 230px;
    }
    div.content {
        width: 100%;
        max-width: 472px;
        padding: 0px ${({ theme }) => theme.spacing(3)};
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(3)};
        p {
            font-size: ${({ theme }) => theme.fonts.sizes[32]};
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
            font-weight: 400;
            color: ${({ theme }) => theme.colors.WHITE};
            line-height: 52px;
            @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
                font-size: ${({ theme }) => theme.fonts.sizes[24]};
                line-height: 44px;
            }
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
