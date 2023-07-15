import styled from 'styled-components';

export const ContainerInfos = styled.div`
    display: flex;
    margin-top: ${({ theme }) => theme.spacing(5.25)};
    gap: ${({ theme }) => theme.spacing(3)};
    @media(max-width: 524px) {
        flex-direction: column;
    }
    div.infos {
        height: 240px;
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(3)};
        justify-content: space-between;
        max-width: 600px;
        @media(max-width: 524px) {
            max-width: 100%;
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile})  {
            gap: ${({ theme }) => theme.spacing(2)};
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            height: 220px;
            max-width: 280px;
        }
        @media(max-width: 524px) {
            max-width: 100%;
        }
        div.infos_header {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: ${({ theme }) => theme.spacing(1.5)};
        }
        div.hours_address {
            div.address {
                margin-top: ${({ theme }) => theme.spacing(1.5)};
                display: flex;
                align-items: center;
                gap: ${({ theme }) => theme.spacing(1.75)};
                width: 100%;
                p {
                    font-weight: 600;
                }
                div.text {
                     display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 288px;
                    @media(max-width: 524px) {
                        width: 100%;
                    }
                }
            }
        }
        div.btn {
            width: 100%;
            max-width: 260px;
            @media(max-width: 524px) {
                max-width: 100%;
            }
            a {
                width: 100%;
            }
        }
    }
`;

export const ContainerInfosBanner = styled.div<{
    imageUrl: string;
}>`
    background: url(${({ imageUrl }) => `"${imageUrl}"`}) no-repeat center;
    object-fit: cover;
    height: 240px;
    width: 240px;
    border-radius: 8px;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 220px;
        height: 220px;
    }
    @media(max-width: 524px) {
        order: 1;
        width: 100%;
    }
`;
