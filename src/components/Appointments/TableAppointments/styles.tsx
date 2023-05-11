import styled from 'styled-components';

export const ContainerTableAppointments = styled.div`
    div.container {
        div.content {
            border-radius: ${({ theme }) => theme.spacing(1)};
            padding: 0px;
            margin-bottom: ${({ theme }) => theme.spacing(6)};
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                margin-bottom: ${({ theme }) => theme.spacing(1)};
            }
        }
        p {
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        };
        ol.header {
            width: 100%;
            display: flex;
            border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
            padding: 0px ${({ theme }) => theme.spacing(4)};
            @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                padding: 0px ${({ theme }) => theme.spacing(2)};
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                display: none;
            }
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
            @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                padding: 0px ${({ theme }) => theme.spacing(2)};
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                padding: 0px;
            }
        }
        div.item:nth-child(odd) {
            background-color: #5129A605;
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                background-color: transparent;
            }
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
                @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    display: none;
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
            @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                div.avatar {
                    display: none;
                }
                width: 15%;
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
                    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                        display: none;
                    }
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
            @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                padding-left: ${({ theme }) => theme.spacing(1)};
                width: 20%;
            }
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
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                div.list_mobile {
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
                @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    border-top: none;
                }
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
                @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                    padding-left: 0px;
                    width: 15%;
                }
            }
            li.value, li.category {
                width: 15%;
            }
            li.value {
                padding-left: ${({ theme }) => theme.spacing(2)};
                @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                    width: 20%;
                }
            }
            div.itens_mobile {
                display: none;
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                ol {
                    display: none;
                }
                ul.itens_desktop {
                    display: none;
                }
                div.itens_mobile {
                    display: flex;
                    flex-direction: column;
                    ul {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        padding-bottom: 0px;
                        li {
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
                            &:first-child {
                                padding-top: 0px;
                            }
                        }
                    }
                    div.status_link {
                        width: 100%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        gap: ${({ theme }) => theme.spacing(3)};
                        padding: ${({ theme }) => theme.spacing(3)} 0px;
                        div.status {
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
                        a {
                            display: flex;
                        }
                    }
                }
            }
        }
        div.empty {
            height: 400px;
            display: flex;
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                height: 240px;
                padding: 24px;
            }
        }
        div.list_mobile {
            display: none;
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            div.list_mobile {
                display: flex;
                justify-content: space-between;
                padding: ${({ theme }) => theme.spacing(3)} 0px;
                cursor: pointer;
                button {
                    svg {
                        transition: 400ms;
                        transform: rotate(0deg);
                    }
                }
            }
            ul.list_desktop {
                display: none;
            }
        }
    }
`;
