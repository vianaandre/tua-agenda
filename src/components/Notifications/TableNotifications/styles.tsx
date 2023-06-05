import styled from 'styled-components';

export const ContainerTableNotifications = styled.div`
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing(3)};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    div.header {
        width: 100%;
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            display: none;
        }
    }
    ol {
        display: flex;
        align-items: center;
        padding: ${({ theme }) => theme.spacing(3)};
        border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
        li.date, li.company, li.title {
            width: 20%;
        }
        li.date {
            padding-left: ${({ theme }) => theme.spacing(5)};
            @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
                padding-left: ${({ theme }) => theme.spacing(4)};
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                padding-left: ${({ theme }) => theme.spacing(2)};
            }
        }
        li.description {
            width: 40%;
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
            li.title {
                width: 25%;
            }
            li.description {
                width: 35%;
            }
        }
    }
    div.list_header {
        width: 100%;
        ul {
            display: flex;
            align-items: center;
            width: 100%;
            padding: ${({ theme }) => theme.spacing(3)};
            cursor: pointer;
            li.date, li.company, li.title {
                width: 20%;
            }
            li.date  {
                display: flex;
                align-items: center;
                gap: ${({ theme }) => theme.spacing(2)};
                button.view {
                    svg {
                        fill: ${({ theme }) => theme.colors.PRIMARY[500]};
                        path {
                            stroke: ${({ theme }) => theme.colors.PRIMARY[500]};
                        }
                    }
                }
            }
            li.description {
                width: 40%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                p {
                    width: 90%;
                    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                        width: 96%;
                    }
                }
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
                padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(2)};
                li.title {
                    width: 25%;
                }
                li.description {
                    width: 35%;
                }
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(0)};
                p {
                    font-size: ${({ theme }) => theme.fonts.sizes[12]} !important;
                }
            }
        }
        div.list_mobile {
            display: none;
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            ul.list_desktop {
                display: none;
            }
            div.list_mobile {
                cursor: pointer;
                display: flex;
                gap: ${({ theme }) => theme.spacing(1)};
                div.content_list_mobile {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                    div.date.notification {
                        display: flex;
                        align-items: center;
                        gap: ${({ theme }) => theme.spacing(1)};
                    }
                }
                button.btn-arrow {
                    width: 15%;
                }
                button.view {
                    svg {
                        fill: ${({ theme }) => theme.colors.PRIMARY[500]};
                        path {
                            stroke: ${({ theme }) => theme.colors.PRIMARY[500]};
                        }
                    }
                }
            }
        }
    }
    div.item {
        border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            padding: ${({ theme }) => theme.spacing(2)} 0px;
        }
    }
    div.item:last-child {
        border-bottom: none;
    }
    div[data-state="open"].item {
        ul {
            li.description {
                button {
                    svg {
                        transition: 400ms;
                        transform: rotate(90deg);
                    }
                }
            }
        };
        button.btn-arrow {
            svg {
                transition: 400ms;
                transform: rotate(90deg);
            }
        }
    }
    div[data-state="closed"].item {
        ul {
            li.description {
                button {
                    svg {
                        transition: 400ms;
                        transform: rotate(0deg);
                    }
                }
            }
        };
        button.btn-arrow {
            svg {
                transition: 400ms;
                transform: rotate(0deg);
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
        div.content_notification {
            width: 100%;
            display: flex;
            justify-content: space-between;
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                flex-wrap: wrap;
            }
        }
        div.infos {
            padding: ${({ theme }) => theme.spacing(3)};
            @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(1)};
                width: 40%;
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                width: 100%;
                padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(0)};
            }
            p {
                color: ${({ theme }) => theme.colors.PRIMARY[500]} !important; @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                    font-size: ${({ theme }) => theme.fonts.sizes[12]};
                }
            }
        }
        div.btns {
            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.spacing(2)};
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                flex-wrap: wrap;
            }
            a {
                display: flex;
                align-items: center;
                gap: ${({ theme }) => theme.spacing(2)};
                padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) => theme.spacing(1.75)};
                p {
                    font-weight: 500 !important;
                    padding-top: 3px !important;
                    transition: 400ms;
                }
                border-radius: 8px;
                &.whats {
                    background-color: ${({ theme }) => theme.colors.PRIMARY[0]};
                }
                &.phone {
                    border: 1px solid ${({ theme }) => theme.colors.PRIMARY[500]};
                }
                transition: 400ms;
                svg {
                    path {
                        transition: 400ms;
                    }
                }
                &.phone:hover {
                    background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                    transition: 400ms;
                    p {
                        transition: 400ms;                    
                        color: ${({ theme }) => theme.colors.WHITE} !important;
                    }
                    svg {
                        path {
                        transition: 400ms;
                            stroke: ${({ theme }) => theme.colors.WHITE};
                        }
                    }
                }
                @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                    p {
                        font-size: ${({ theme }) => theme.fonts.sizes[12]};
                    }
                }
                @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    width: 100%;
                    justify-content: space-between;
                }
            }
        }
    }
`;
