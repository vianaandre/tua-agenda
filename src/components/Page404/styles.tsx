import styled from 'styled-components';

export const ContainerPage404 = styled.div`
    height: calc(100vh - 80px - 556px);
    min-height: 300px;
    display: flex;
    align-items: center;
    div.container {
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
            margin-bottom: ${({ theme }) => theme.spacing(6)};
        }
        p.normal {
            margin-bottom: ${({ theme }) => theme.spacing(1)};
        }
    }
`;
