import styled from 'styled-components';

export const ContainerInfos = styled.div`
    display: flex;
    margin-top: ${({ theme }) => theme.spacing(5.25)};
    div.infos {
        height: 240px;
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(3)};
        justify-content: space-between;
        div.infos_header {
            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.spacing(1.5)};
        }
        div.hours_address {
            div.address {
                margin-top: ${({ theme }) => theme.spacing(1.5)};
                display: flex;
                align-items: center;
                gap: ${({ theme }) => theme.spacing(1.75)};
                p {
                    font-weight: 600;
                }
            }
        }
        div.btn {
            width: 100%;
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
`;
