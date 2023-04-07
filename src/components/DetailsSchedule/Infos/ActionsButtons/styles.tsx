import styled from 'styled-components';

export const ContainerActionsButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(3)};
    margin-top: ${({ theme }) => theme.spacing(4)};
    margin-bottom: ${({ theme }) => theme.spacing(4)};

    button.cancel {
        background-color: ${({ theme }) => theme.colors.DANGER};
        border-color: ${({ theme }) => theme.colors.DANGER};
        margin-left: auto;
        transition: 400ms;
        &:hover {
            transition: 400ms;
            filter: brightness(0.9);
        }
        div.bg {
            background-color: ${({ theme }) => theme.colors.DANGER};
        }
        div.loader {
            border-top-color: ${({ theme }) => theme.colors.DANGER_LIGHT};
        }
    }
    div.cancel_mobile {
        display: none;
    }
    &.stAnamnese {
        flex-wrap: wrap;
        @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            gap: ${({ theme }) => theme.spacing(0.75)};
            button, a {
                svg {
                    display: none;
                }
            }
            button.cancel {
                margin-left: 0px;
                display: none;
                svg {
                    display: flex;
                }
            }
            div.cancel_mobile {
                display: flex;
                button {
                    display: flex;
                }
            }
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            gap: ${({ theme }) => theme.spacing(2)};
            button.cancel {
                display: flex;
            }
            div.cancel_mobile {
                display: none;
            }
        }
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        justify-content: center;
        flex-wrap: wrap;
        gap: ${({ theme }) => theme.spacing(2)};
        button, a {
            width: 100%;
        }
    }
`;
