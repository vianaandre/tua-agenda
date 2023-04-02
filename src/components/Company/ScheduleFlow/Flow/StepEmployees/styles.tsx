import styled from 'styled-components';

export const ContainerStepEmployees = styled.div`
    height: 100%;
    div.container {
        height: 100%;
        padding-top: ${({ theme }) => theme.spacing(4)};
        padding-bottom: ${({ theme }) => theme.spacing(4)};
        display: flex;
        flex-direction: column;
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            padding-top: ${({ theme }) => theme.spacing(1.5)};
            padding-bottom: ${({ theme }) => theme.spacing(1.5)};
        }
        div.header {
            max-width: 500px;
        }
        div.list {
            margin-top: ${({ theme }) => theme.spacing(1.25)};
            margin-bottom: ${({ theme }) => theme.spacing(2.25)};
            overflow: auto;
            flex: 1;
            display: flex;
            ul {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                gap: ${({ theme }) => theme.spacing(2)};
                @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    gap: ${({ theme }) => theme.spacing(1)};
                }
                li {
                    width: calc(100% / 5 - ${({ theme }) => theme.spacing(1.6)});
                    height: 200px;
                    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                        width: calc(100% / 3 - ${({ theme }) => theme.spacing(1.6)});
                    }
                    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                        width: calc(100% / 2 - ${({ theme }) => theme.spacing(0.8)});
                    }
                    button {
                        border: 1px solid ${({ theme }) => theme.colors.WHITE};
                        transition: 400ms;
                        height: 100%;
                        width: 100%;
                        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.03);
                        border-radius: 8px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        > p {
                            margin-top: ${({ theme }) => theme.spacing(2)};
                            text-align: center;
                            margin-bottom: 2px;
                            font-weight: 400;
                            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                        }
                        &:hover, &.active {
                            transition: 400ms;
                            border-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                        }
                        @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                            &:hover {
                                border-color: ${({ theme }) => theme.colors.WHITE};
                            }
                            &.active {
                                border-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                            }
                        }
                    }
                }
            }
        }
        button.next {
            margin-top: auto;
            justify-content: space-between;
            min-height: 50px;
        }
    }
`;
