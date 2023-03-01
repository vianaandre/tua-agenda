import styled from 'styled-components';

export const ContainerInfosCompany = styled.div`
    width: 40%;
    max-width: 376px;

    div.infos {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(2)};
        padding-bottom: ${({ theme }) => theme.spacing(3)};
        border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
    }
    div.info {
        h6.title {
            font-weight: 600;
        }
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(1)};
        a {
            font-weight: 600;
            font-family: ${({ theme }) => theme.fonts.family.SECONDARY};
            font-size: ${({ theme }) => theme.fonts.sizes[14]};
            font-style: normal;
            color: ${({ theme }) => theme.colors.PRIMARY[500]};
        }
    }
    div.info_address {
        margin-top: ${({ theme }) => theme.spacing(3)};
        h4.title {
            font-family: ${({ theme }) => theme.fonts.family.TITLE};
            color: ${({ theme }) => theme.colors.BLUE[200]}
        }
        p.normal  {
            margin: ${({ theme }) => theme.spacing(2)} 0px;
            color: ${({ theme }) => theme.colors.BLUE[200]};
        }
    }
    div.map {
        border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
        padding-bottom: ${({ theme }) => theme.spacing(3)};
        div.link {
            margin-top: ${({ theme }) => theme.spacing(2)};
            a {
                padding-left: 0px;
                &:hover {
                    background-color: transparent;
                    color: ${({ theme }) => theme.colors.PRIMARY[500]};
                    filter: brightness(1.3)
                }
            }
        }
    }
`;
