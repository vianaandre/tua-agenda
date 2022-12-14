import styled from 'styled-components';

export const ContainerCategories = styled.section`
    margin-top: ${({ theme }) => theme.spacing(9)};

    div.container {
        header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

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
    ul {
        width: 100%;
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(4)};
    }
`;
