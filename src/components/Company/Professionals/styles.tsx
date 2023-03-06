import styled from 'styled-components';

export const ContainerProfessionals = styled.section`
    margin-top: ${({ theme }) => theme.spacing(9)};

    div.container {
        padding-bottom: ${({ theme }) => theme.spacing(9)};
        border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
        h4.title {
            font-family: ${({ theme }) => theme.fonts.family.TITLE};
            color: ${({ theme }) => theme.colors.BLUE[200]}
        }
        div.professionals {
            width: 100%;
            margin-top: ${({ theme }) => theme.spacing(2)};
            ul {
                width: 100%;
                display: flex;
                gap: ${({ theme }) => theme.spacing(2)};
                li {
                    width: calc(100% / 5 - ${({ theme }) => theme.spacing(1)});
                }
            }
        }
    }
`;
