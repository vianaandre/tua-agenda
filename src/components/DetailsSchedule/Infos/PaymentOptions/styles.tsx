import styled from 'styled-components';

export const ContainerPaymentOptions = styled.div`
    margin-top: ${({ theme }) => theme.spacing(4)};
    h6 {
        margin-bottom: ${({ theme }) => theme.spacing(1)};
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            text-align: center;
        }
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        p.small {
            text-align: center;
        }
    }
    div.gateways_payment {
        margin-top: ${({ theme }) => theme.spacing(2)};
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(4)};
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile})  {
            flex-direction: column;
            margin-top: ${({ theme }) => theme.spacing(4)};
        }
        button {
            width: 218px;
            height: 99px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid ${({ theme }) => theme.colors.GREY[600]};
            border-radius: ${({ theme }) => theme.spacing(1)};
            img {
                width: fit-content;
                height: fit-content;
                object-fit: contain;
            };
            transition: 400ms;
            &:hover, &.active {
                transition: 400ms;
                background-color: ${({ theme }) => theme.colors.SUCCESS_LIGHT};
                border-color: ${({ theme }) => theme.colors.SUCCESS};
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                &:hover {
                    background-color: transparent;
                    border-color: ${({ theme }) => theme.colors.GREY[600]};
                }
                &.active {
                    transition: 400ms;
                    background-color: ${({ theme }) => theme.colors.SUCCESS_LIGHT};
                    border-color: ${({ theme }) => theme.colors.SUCCESS};
                }
            }
        }
    }
    button.confim_method_payment {
        margin-top: ${({ theme }) => theme.spacing(5.25)};
    }
    div.payment_generate {
        margin-top: ${({ theme }) => theme.spacing(2)};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
        border-radius: ${({ theme }) => theme.spacing(1)};
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.03);
        @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(2)};
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            flex-direction: column;
            gap: ${({ theme }) => theme.spacing(4)};
        }

        img {
            width: fit-content;
            height: fit-content;
        }
        h6.title_two {
            margin-bottom: 0px;
        }
        div.status {
            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.spacing(1)};
            > div {
                width: ${({ theme }) => theme.spacing(1)};
                height: ${({ theme }) => theme.spacing(1)};
                background-color: ${({ theme }) => theme.colors.SUCCESS};
                border-radius: 50%;
                &.AGUARDANDO {
                    background-color: ${({ theme }) => theme.colors.WARNING};
                }
            };
            p {
                color: ${({ theme }) => theme.colors.SUCCESS};
                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
            };
            &.AGUARDANDO {
                p {
                    color: ${({ theme }) => theme.colors.WARNING};
                }
            }
        }
        a {
            display: flex;
            align-items: center;
            position: relative;
            gap: ${({ theme }) => theme.spacing(1)};
            p {
                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
            };
            padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
            border-radius: ${({ theme }) => theme.spacing(1)};
            transition: 400ms;
            padding-right: ${({ theme }) => theme.spacing(2.5)};
            &:hover {
                transition: 400ms;
                background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                svg {
                    path {
                        stroke: ${({ theme }) => theme.colors.WHITE};
                    }
                }
                p {
                    color: ${({ theme }) => theme.colors.WHITE} !important
                }
            }
            div.cursor {
                position: absolute;
                bottom: -16px;
                left: 50%;
                animation: animationCursor 6s ease-in-out infinite;
            }
        }
    }
`;
