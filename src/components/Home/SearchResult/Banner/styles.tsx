import styled from 'styled-components';

export const ContainerBanner = styled.div`
    position: relative;
    overflow: hidden;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.PRIMARY[0]};
    height: 514px;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        height: 600px;
        @media(max-width: 524px) {
            height: 650px;
        }
    }
    div.container {
        padding-top: ${({ theme }) => theme.spacing(8)};
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: ${({ theme }) => theme.spacing(3)};
        p.great {
            margin-bottom: ${({ theme }) => theme.spacing(5)};
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            padding-top: ${({ theme }) => theme.spacing(4)};
            @media(max-width: 524px) {
                padding-top: 0px;
            }
        }
    }
`;

export const ContainerBannerImageBgOne = styled.img`
    position: absolute;
    right: 0;
`;

export const ContainerBannerImageBgTwo = styled.img`
    position: absolute;
    left: 0;
`;
