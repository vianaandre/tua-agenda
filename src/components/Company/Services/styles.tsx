import styled from 'styled-components';

export const ContainerServices = styled.section`
    margin-top: ${({ theme }) => theme.spacing(9)};
    padding-bottom: ${({ theme }) => theme.spacing(9)};

    div.container {
        ul {
            margin-top: ${({ theme }) => theme.spacing(4)};
            display: flex;
            flex-direction: column;
            gap: ${({ theme }) => theme.spacing(1)};
        }
        button.btn {
            margin-top: ${({ theme }) => theme.spacing(3)};
            justify-content: center;
        }
    }
`;
