import styled from 'styled-components';

export const ContainerTableAppointments = styled.div`
    div.container {
        div.content {
            border-radius: ${({ theme }) => theme.spacing(1)};
            border: 1px solid ${({ theme }) => theme.colors.GREY[500]};
            padding: 0px;
            margin-bottom: ${({ theme }) => theme.spacing(6)};
        }
        p {
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        };
        ol {
            width: 100%;
            display: flex;
            border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
            li {
                display: flex;
                justify-content: flex-start;
                &.hour {
                    justify-content: center;
                }
                p {
                    opacity: 0.5;
                }
                button {
                    display: flex;
                    gap: 4px;
                    svg {
                        transform: rotate(90deg) !important;
                    }
                }
            }
        }
        li {
            padding: ${({ theme }) => theme.spacing(3)} 0px;
        }
        li.hour {
            width: 25%;
            display: flex;
            gap: ${({ theme }) => theme.spacing(2)};
            button {
                svg {
                    transition: 400ms;
                    transform: rotate(0deg);
                }
            }
        }
        li.company {
            width: 15%;
        }
        li.professionals {
            width: 20%;
            gap: ${({ theme }) => theme.spacing(2)};
            &.professional {
                div.info_professional {
                    display: flex;
                    flex-direction: column;
                }
            }
        }
        li.total, li.status {
            width: 15%;
            div.chip {
                position: relative;
                display: flex;
                align-items: center;
                gap: ${({ theme }) => theme.spacing(1)};
                &:before {
                    content: "";
                    display: block;
                    width: ${({ theme }) => theme.spacing(1)};
                    height: ${({ theme }) => theme.spacing(1)};
                    border-radius: 50%;
                }
            }
            &.REQ_CANCELAMENTO, &.CANCELADO {
                div.chip {
                    &:before {
                        background-color: ${({ theme }) => theme.colors.DANGER};
                    }
                    p.small {
                        color: ${({ theme }) => theme.colors.DANGER}
                    }
                }
            }
            &.AGENDADO {
                div.chip {
                    &:before {
                        background-color: ${({ theme }) => theme.colors.WARNING};
                    }
                    p.small {
                        color: ${({ theme }) => theme.colors.WARNING}
                    }
                }
            }
            &.CONFIRMADO, &.ATENDIDO {
                div.chip {
                    &:before {
                        background-color: ${({ theme }) => theme.colors.SUCCESS};
                    }
                    p.small {
                        color: ${({ theme }) => theme.colors.SUCCESS}
                    }
                }
            }
        }
        li.total {
            padding-left: ${({ theme }) => theme.spacing(2)};
        }
        li.link {
            width: 10%;
            padding-left: ${({ theme }) => theme.spacing(2)};
            a {
                display: flex;
            }
        }
        ul {
            width: 100%;
            display: flex;
            align-items: center;
            border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
            &:nth-child(even) {
                background-color: #5129A605;
            }
            &:last-child {
                border-bottom: none;
            }
            li {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                &.hour {
                    justify-content: center;
                }
            }
        }
        div[data-state="open"].item {
            ul {
                li.hour {
                    button {
                        svg {
                            transition: 400ms;
                            transform: rotate(90deg);
                        }
                    }
                }
            }
        }
        div[data-state="open"].content {
            animation: animationSlideDown 300ms ease-out;
        }
        div[data-state="closed"].content {
            animation: animationSlideUp 300ms ease-out;
        }
        div[data-state="open"].content {
            overflow-y: hidden;
            border: 0;
        }
    }
`;
