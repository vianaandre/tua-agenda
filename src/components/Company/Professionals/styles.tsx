import styled from 'styled-components';

export const ContainerProfessionals = styled.section`
    margin-top: ${({ theme }) => theme.spacing(9)};

    div.content {
        padding-bottom: ${({ theme }) => theme.spacing(9)};
        border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
        h4.title {
            font-family: ${({ theme }) => theme.fonts.family.TITLE};
            color: ${({ theme }) => theme.colors.BLUE[200]}
        }
        div.professionals {
            width: 100%;
            margin-top: ${({ theme }) => theme.spacing(2)};
            div.desktop {
                width: 100%;
                 ul {
                    width: 100%;
                    display: flex;
                    gap: ${({ theme }) => theme.spacing(2)};
                    li {
                        width: calc(100% / 5 - ${({ theme }) => theme.spacing(1.6)});
                    }
                }
            }
            div.carousel_professionals {
                display: none;
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) { 
                div.desktop {
                    display: none;
                }
                div.carousel_professionals {
                    cursor: grab;
                    display: flex;
                    ul {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        li {
                            padding-right: ${({ theme }) => theme.spacing(2)};
                            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                                padding-right: ${({ theme }) => theme.spacing(1)};
                                padding-left: ${({ theme }) => theme.spacing(1)};
                            }
                        }
                    }
                }
            }
        }
    }
`;
