import styled from 'styled-components';

export const ContainerServices = styled.section`
    margin-top: ${({ theme }) => theme.spacing(9)};
    padding-bottom: ${({ theme }) => theme.spacing(9)};
    div.container {
        div.title {
            width: 100%;
            display: flex;
            justify-content: space-between;
            form {
                flex: 1;
                max-width: 353px;
            }
            div.part_one {
                h4.title {
                    color: ${({ theme }) => theme.colors.BLUE[200]};
                    font-family: ${({ theme }) => theme.fonts.family.TITLE};
                    margin-bottom: ${({ theme }) => theme.spacing(1)};
                }
            }
        }
    }
`;
