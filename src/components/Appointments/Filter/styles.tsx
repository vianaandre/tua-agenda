import styled from 'styled-components';

export const ContainerFilter = styled.div`
    padding: ${({ theme }) => theme.spacing(4)} 0px;

    div.container {
        form {
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                flex-direction: column;
                align-items: flex-start;
                gap: ${({ theme }) => theme.spacing(2)};
            }
            div.search {
                width: 40%;
                max-width: 320px;
                @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    width: 100%;
                    max-width: 100%;
                }
            }
            div.filters {
                display: flex;
                align-items: center;
                gap: ${({ theme }) => theme.spacing(2.5)};
                button.filter {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    p {
                        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                        font-weight: 500;
                        &.mobile {
                            display: none;
                        }
                        @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                            &.desktop {
                                display: none;
                            }
                            &.mobile {
                                display: block;
                            }
                        }
                        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                            font-size: ${({ theme }) => theme.fonts.sizes[12]};
                        }
                    }
                    &.arrow {
                        svg {
                            transition: 400ms;
                            transform: rotate(-90deg);
                        }
                        &.filter_status {
                            svg {
                                transform: rotate(90deg);
                            }
                        }
                    }
                    &.floor {
                        svg {
                            transition: 400ms;
                            transform: rotate(90deg);
                        }
                    }
                }
            }
        }
    }
`;
