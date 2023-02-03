import styled from 'styled-components';

export const ContainerContentFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        justify-content: center;
        gap: ${({ theme }) => theme.spacing(6)};
    }
`;

export const ContainerContentFooterCardLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(4)};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        align-items: center;
        text-align: center;
    }

    p.normal {
        max-width: 376px;
    }
`;

export const ContainerContentFooterCardRight = styled.div`
    ul {
        margin-top: ${({ theme }) => theme.spacing(3)};
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(2)};
        
        li {
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                display: flex;
                justify-content: center;
            }
            a {
                p {
                    position: relative;
                    width: fit-content;
                    transition: 400ms;
                    &::after {
                        content: "";
                        display: block;
                        position: absolute;
                        width: 0%;
                        height: 2px;
                        border-radius: 5px;
                        background-color: ${({ theme }) => theme.colors.WHITE};
                        bottom: 0;
                        transition: 400ms;
                    }
                    &:hover {
                        &::after {
                            transition: 400ms;
                            width: 100%;
                        }
                        transition: 400ms;
                        color: ${({ theme }) => theme.colors.WHITE} !important;
                    }
               }
            }
        }
    }
    display: flex;
    gap: ${({ theme }) => theme.spacing(8)};
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        align-items: center;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(3)};
        div.menu_about, div.menu_legal {
            text-align: center;
        }
    }
`;
