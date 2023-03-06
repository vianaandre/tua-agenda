import styled from 'styled-components';

export const ContainerInfosCompany = styled.div`
    width: 40%;
    max-width: 376px;

    @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 50%;
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        max-width: 100%;
        /* gap: ${({ theme }) => theme.spacing(6)} */
    }

    div.infos {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(2)};
        padding-bottom: ${({ theme }) => theme.spacing(3)};
        border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
        @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            flex-direction: column;
            padding-bottom: ${({ theme }) => theme.spacing(4)};
        }
    }
    div.info {
        h6.title {
            font-weight: 600;
        }
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(1)};
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            align-items: center;
        }
        a {
            font-weight: 600;
            font-family: ${({ theme }) => theme.fonts.family.SECONDARY};
            font-size: ${({ theme }) => theme.fonts.sizes[14]};
            font-style: normal;
            color: ${({ theme }) => theme.colors.PRIMARY[500]};
        }
    }
    div.phone {
        @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            h6 {
                margin-bottom: ${({ theme }) => theme.spacing(2)};
            }
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            h6 {
                margin-bottom: ${({ theme }) => theme.spacing(1)};
            }
        }
    }
    div.email {
        @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            h6 {
                margin-bottom: ${({ theme }) => theme.spacing(2)};
            }
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            h6 {
                margin-bottom: ${({ theme }) => theme.spacing(1)};
            }
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
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            margin-top: ${({ theme }) => theme.spacing(4)};
            text-align: center;
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
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            border: none;
            padding-bottom: 0px;
        }
    }
`;
