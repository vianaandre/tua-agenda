import styled from 'styled-components';

export const ContainerFilter = styled.div`
    padding: ${({ theme }) => theme.spacing(4)} 0px;

    div.container {
        form {
            display: flex;
            justify-content: space-between;
            align-items: center;
            div.search {
                width: 40%;
                max-width: 320px;
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
                    }
                    &.arrow {
                        svg {
                            transition: 400ms;
                            transform: rotate(-90deg);
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
