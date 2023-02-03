import styled from 'styled-components';

export const ContainerCategories = styled.section`
    margin-top: ${({ theme }) => theme.spacing(9)};

    div.container {
        header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            button {
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
                    @media(max-width: 524px) {
                        margin-right: 0px;
                        padding: 0px ${({ theme }) => theme.spacing(1)}
                    }
                }
            }
        }
    }
`;
