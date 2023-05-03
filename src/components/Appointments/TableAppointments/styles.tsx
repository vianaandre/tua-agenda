import styled from 'styled-components';

export const ContainerTableAppointments = styled.div`
    div.container {
        div.content {
            border-radius: ${({ theme }) => theme.spacing(1)};
            /* border: 1px solid ${({ theme }) => theme.colors.GREY[500]}; */
            padding: 0px;
            margin-bottom: ${({ theme }) => theme.spacing(6)};
        }
        p {
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        };
        ol.header {
            width: 100%;
            display: flex;
            border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
            padding: 0px ${({ theme }) => theme.spacing(4)};
            li {
                display: flex;
                justify-content: flex-start;
                &.hour {
                    justify-content: flex-start;
                    padding-left: ${({ theme }) => theme.spacing(5)};
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
        div.item {
            border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
            padding: 0px ${({ theme }) => theme.spacing(4)};
        }
        div.item:nth-child(odd) {
            background-color: #5129A605;
        }
        div.item:last-child {
            border-bottom: none;
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
            width: 20%;
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
            width: 5%;
            padding-left: ${({ theme }) => theme.spacing(2)};
            a {
                display: flex;
            }
        }
        ul.content_appointment {
            width: 100%;
            display: flex;
            align-items: center;
            &:last-child {
                border-bottom: none;
            }
            li {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                &.hour {
                    justify-content: flex-start;
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
        div[data-state="open"].content_accordion {
            animation: animationSlideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
        div[data-state="closed"].content_accordion {
            animation: animationSlideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
        div[data-state="open"].content_accordion {
            overflow-y: hidden;
            border: 0;
        }
        div.content_accordion {
            overflow: hidden;
            ul, ol {
                width: 100%;
                display: flex;
            }
            ul, ol {
                border-top: 1px solid ${({ theme }) => theme.colors.GREY[500]};
            }
            ul:last-child {
                padding-bottom: ${({ theme }) => theme.spacing(2)};
            }
            li {
                padding-top: ${({ theme }) => theme.spacing(1.75)};
                padding-bottom: ${({ theme }) => theme.spacing(1.75)};
                p {
                    font-size: ${({ theme }) => theme.fonts.sizes[12]};
                    font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                }
            }
            li.service {
                width: 25%;
                p:first-child {
                    width: 15%;
                    text-align: end;
                    padding-right: ${({ theme }) => theme.spacing(3)};
                }
                display: flex;
                justify-content: flex-start;
            }
            li.description {
                width: 20%;
            }
            li.duration {
                width: 20%;
                padding-left: ${({ theme }) => theme.spacing(8)};
            }
            li.value {
                padding-left: ${({ theme }) => theme.spacing(2)};
            }
            li.value, li.category {
                width: 15%;
            }
        }
        div.empty {
            height: 400px;
            display: flex;
        }
    }
`;
