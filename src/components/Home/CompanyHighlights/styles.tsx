import styled from 'styled-components';

export const ContainerCompanyHighlights = styled.section`
    margin-top: ${({ theme }) => theme.spacing(9)};

    div.container {
        header {
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;

            button {
                display: flex;
                align-items: center;
                gap: ${({ theme }) => theme.spacing(2)};
                transition: 400ms;
                p {
                    font-weight: 500;
                };
                &:hover {
                    filter: brightness(1.3);
                    transition: 400ms;
                }
            }
        }
    }
`;