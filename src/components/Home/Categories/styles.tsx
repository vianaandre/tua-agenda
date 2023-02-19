import styled from 'styled-components';

export const ContainerCategories = styled.section`
    margin-top: ${({ theme }) => theme.spacing(9)};

    div.container {
        header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                flex-wrap: wrap;
                gap: ${({ theme }) => theme.spacing(2)};
            }

            h2 {
                animation: fadeInUp;
                animation-duration: 500ms;
            }

            button {
                animation: fadeIn;
                animation-duration: 500ms;
                display: flex;
                align-items: center;
                gap: ${({ theme }) => theme.spacing(2)};
                p.normal {
                    font-weight: 500;
                }
                &:hover {
                    filter: brightness(1.3);
                    transition: 400ms;
                }
            }
        }
    }
`;

export const ContainerCategoriesCards = styled.div`
    margin-top: ${({ theme }) => theme.spacing(6)};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(4)};
    ul.desktop {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(4)};
        li {
            width: calc(100% / 4 - ${({ theme }) => theme.spacing(3)}) !important;
            @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                width: 100% !important;
            }
        }
        div.animate__animated:nth-child(1) {
            animation-duration: 400ms !important;
        }
        div.animate__animated:nth-child(5) {
            animation-duration: 600ms !important;
        }
        div.animate__animated:nth-child(2) {
            animation-duration: 600ms !important;
        }
        div.animate__animated:nth-child(6) {
            animation-duration: 800ms !important;
        }
        div.animate__animated:nth-child(3) {
            animation-duration: 800ms !important;
        }
        div.animate__animated:nth-child(7) {
            animation-duration: 1000ms !important;
        } 
        div.animate__animated:nth-child(4) {
            animation-duration: 1000ms !important;
        }
        div.animate__animated:nth-child(8) {
            animation-duration: 1200ms !important;
        } 
        
        @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            &.desktop {
                display: none;
            }
        }
    };
    div.carousel_categories {
        display: none;
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        div.carousel_categories {
            display: flex;
            ul {
                li {
                    margin-right: 16px;
                    display: flex;
                    align-items: center;
                    padding: 0px ${({ theme }) => theme.spacing(1)};
                    
                    @media(max-width: 524px) {
                        margin-right: 0px;
                        padding: 0px ${({ theme }) => theme.spacing(1)}
                    }
                    div.item {
                        width: 100%;
                    }
                }
            }
        }
    }
`;
