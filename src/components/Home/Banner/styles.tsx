import styled from 'styled-components';

export const ContainerBanner = styled.div`
    position: relative;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.PRIMARY[0]};

    div.container {
        height: fit-content;
        overflow-y: hidden;
        div.banne_photo {
            position: absolute;
            right: 0;
        }
        div.banner_content {
            padding: ${({ theme }) => theme.spacing(11.5)} 0px;
            display: flex;
            flex-direction: column;
            gap: ${({ theme }) => theme.spacing(3)};
            h1.title {
                max-width: 629px;
            }
        }
    }
`;

export const ContainerBannerImageBg = styled.img`
    position: absolute;
    right: 0;
`;
