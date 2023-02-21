import styled from 'styled-components';

export const ContainerMobile = styled.div`
    width: 100%;
    display: none;
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex;
    }
    justify-content: space-between;
    align-items: center;
    &.auth_user {
        @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
            display: flex;
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(1)};
        p {
            font-weight: 600;
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        }
        div {
            display: flex;
            flex-direction: column;
            gap: 4px;
            div {
                width: ${({ theme }) => theme.spacing(3)};
                height: 3px;
                border-radius: 4px;
                background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
            }
        }
        &.auth_user {
            div {
                div {
                    background-color: ${({ theme }) => theme.colors.WHITE};
                }
            }
            p {
                color: ${({ theme }) => theme.colors.WHITE};
            }
        }
    }
`;

export const ContainerMobileMenu = styled.nav<{
    showMenu: boolean;
}>`
    position: fixed;
    width: 100vw;
    max-width: 524px;
    height: 100vh;
    overflow: auto;
    top: 0px;
    right: 0px;
    background-color: ${({ theme }) => theme.colors.WHITE};
    z-index: ${({ theme }) => theme.zIndex.MENU};
    transition: 400ms;
    transform: translateX(${({ showMenu }) => (showMenu ? '0px' : '100vw')});
    @media(max-width: 524px) {
        left: 0;
    }
    div.header {
        width: 100%;
        padding: ${({ theme }) => theme.spacing(3)};
        display: flex;
        align-items: center;
        justify-content: space-between;
        button.close_button {
            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.spacing(1)};
            p {
                font-weight: 600;
                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
            }
        }
        button.button_location, div.button_location {
            display: flex;
            gap: ${({ theme }) => theme.spacing(1)};
            p.small {
                color: ${({ theme }) => theme.colors.GREY[950]};
                font-weight: 500;
            }
        }
    }
    div.content {
        width: 100%;
        padding: ${({ theme }) => theme.spacing(3)};
        ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: ${({ theme }) => theme.spacing(6)};
            gap: ${({ theme }) => theme.spacing(2)};
            li:first-child {
                margin-bottom: ${({ theme }) => theme.spacing(3)};
            }
            li {
                width: 100%;
                display: flex;
                justify-content: center;
                a {
                    width: 100%;
                    max-width: 220px;
                }
            }
            li.photo_user {
                flex-direction: column;
                align-items: center;
                justify-content: center;
                div.photo {
                    border: 2px solid ${({ theme }) => theme.colors.PRIMARY[500]};
                    border-radius: 50%;
                    padding: 2px;
                    div {
                        width: 82px;
                        height: 82px;
                    }
                }
                p.color_dark {
                    margin-top: ${({ theme }) => theme.spacing(1)};
                    color: ${({ theme }) => theme.colors.BLACK[500]};
                    font-weight: 500;
                }
                p {
                    text-align: center;
                }
            }
        }
        ul.auth_user {
            width: 100%;
            gap: 0px;
            li.translation {
                margin-bottom: ${({ theme }) => theme.spacing(3.5)};
            }
            li.link_auth {
                justify-content: flex-start;
                width: 80%;
                text-align: left;
                border-top: 1px solid ${({ theme }) => theme.colors.GREY[500]};

                a, button {
                    width: 100%;
                    padding: ${({ theme }) => theme.spacing(3)} 0px;
                    p {
                        font-size: ${({ theme }) => theme.fonts.sizes[16]};
                        font-family: ${({ theme }) => theme.fonts.family.ALTERNATIVE};
                        font-weight: 500;
                        font-style: normal;
                        color: ${({ theme }) => theme.colors.GREY[900]};
                        transition: 400ms;
                    }
                    &:hover {
                        p {
                            transition: 400ms;
                            filter: brightness(0.4);
                        }
                    }
                    &.logout {
                        p {
                            color: ${({ theme }) => theme.colors.DANGER};
                        }
                        &:hover {
                            p {
                                filter: none !important;
                            }
                        }
                    }
                }
            }
        }
    }
`;
