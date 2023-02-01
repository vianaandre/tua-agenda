import styled from 'styled-components';

export const ContainerResult = styled.div`
    margin-top: ${({ theme }) => theme.spacing(9)};

    div.container {
        div.reasult_header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            h2.title {
                font-size: ${({ theme }) => theme.fonts.sizes[32]} !important;
                strong {
                    font-weight: 600;
                    color: ${({ theme }) => theme.colors.PRIMARY[500]} !important;
                    font-family: ${({ theme }) => theme.fonts.family.TITLE};
                }
                margin-bottom: ${({ theme }) => theme.spacing(1)};
            }
            }
        ul {
            margin-top: ${({ theme }) => theme.spacing(4)};
            display: flex;
            flex-wrap: wrap;
            gap: ${({ theme }) => theme.spacing(4)};
        }
    }
`;
