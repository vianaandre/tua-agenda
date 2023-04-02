import styled from 'styled-components';

export const ContainerStepper = styled.div`
    background-color: ${({ theme }) => theme.colors.PRIMARY[800]};
    padding-top: ${({ theme }) => theme.spacing(2)};
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding-top: 0px;
    }
    div.container {
        padding-top: ${({ theme }) => theme.spacing(6)};
        padding-bottom: ${({ theme }) => theme.spacing(6)};
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            padding-top: ${({ theme }) => theme.spacing(4)};
            padding-bottom: ${({ theme }) => theme.spacing(4)};
        }
    }
    position: relative;
    button.back {
        position: absolute;
        top: ${({ theme }) => theme.spacing(1)};
        left: ${({ theme }) => theme.spacing(1)};
        padding: ${({ theme }) => theme.spacing(1)};
        color: ${({ theme }) => theme.colors.WHITE};
        &:hover, &:active {
            filter: brightness(0.7);
        };
    }
    ul {
        display: flex;
        width: 100%;
        li {
            display: flex;
            width: calc(100% / 3 - 50px);
            button {
                display: flex;
                width: 100%;
                @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                    align-items: center;
                }
                div:first-child {
                    width: ${({ theme }) => theme.spacing(3.5)};
                    height: ${({ theme }) => theme.spacing(3.5)};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background-color: ${({ theme }) => theme.colors.WHITE};
                    font-size: ${({ theme }) => theme.fonts.sizes[16]};
                    font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                    font-weight: 500;
                    color: ${({ theme }) => theme.colors.PRIMARY[500]};
                }
                div:nth-child(2) {
                    max-width: 111px;
                    width: fit-content;
                    margin-left: ${({ theme }) => theme.spacing(1.75)};
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    span {
                        text-align: left;
                    }
                    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                        max-width: 200px;
                        margin-left: ${({ theme }) => theme.spacing(2)};
                    }
                }
                div:last-child {
                    flex: 1;
                    border: 1px dashed rgba(158, 158, 158, 1);
                    margin-top: ${({ theme }) => theme.spacing(2.5)};
                    margin-left: ${({ theme }) => theme.spacing(1.5)};
                    margin-right: ${({ theme }) => theme.spacing(2)};
                    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                        display: none;
                    }
                }
                &.active {
                    div:last-child {
                        border-style: solid;
                        border-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                    }
                    div:first-child {
                        background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                        color: ${({ theme }) => theme.colors.WHITE}
                    }
                }
            }
            &:last-child {
                width: 153px;
                button {
                    div:last-child {
                        display: none;
                    }
                }
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.tablet})  {
                display: none;
                width: 100%;
                &.active {
                    display: flex !important;
                }
                &:last-child {
                    width: fit-content;
                    button {
                        div:last-child {
                            display: none;
                        }
                    }
                }
            }
        }
    }
`;
