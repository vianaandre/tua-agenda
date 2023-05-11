import styled from 'styled-components';

export const ContainerBanner = styled.div`
    position: relative;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.PRIMARY[0]};
    overflow-y: hidden;

    div.container {
        height: fit-content;
        overflow-y: hidden;
        overflow-x: hidden;
        div.banne_photo {
            position: absolute;
            right: 0;
            top: ${({ theme }) => theme.spacing(2)};
            img {
                max-width: 501px;
                object-fit: contain;
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                display: none;
            }
        }
        div.banner_content {
            padding: ${({ theme }) => theme.spacing(11.5)} 0px;
            min-height: calc(794px - 78px);
            display: flex;
            flex-direction: column;
            gap: ${({ theme }) => theme.spacing(3)};
            h1.title {
                max-width: 629px;
                
                animation: fadeIn;
                animation-duration: 0.5s;
            }
            p {
                animation: fadeIn;
                animation-duration: 1s;
            }
            position: relative;
            div.effect_title {
                animation: fadeIn;
                animation-duration: 0.5s;
                position: absolute;
                top: 225px;
                left: -12px;
                @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    top: 240px;
                }
            }
            div.form_search {
                max-width: 852px;
                animation: fadeIn;
                animation-duration: 1.5s;
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
                p {
                    max-width: 500px;
                }
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                p {
                    max-width: 100%;
                }
            }
        }
    }
`;

export const ContainerBannerImageBg = styled.img`
    position: absolute;
    right: 0;
`;
