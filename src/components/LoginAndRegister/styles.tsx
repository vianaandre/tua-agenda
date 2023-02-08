import styled from 'styled-components';

export const ContainerLoginAndRegister = styled.div`
    height: 100vh;
    width: 100vw;
    min-height: 700px;
    display: flex;
`;

export const ContainerLoginAndRegisterContent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 240px;
    header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    div.or {
        margin-top: ${({ theme }) => theme.spacing(4)};
        margin-bottom: ${({ theme }) => theme.spacing(3)};
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(4)};
        p {
            font-weight: 500;
        }
        div {
            flex: 1;
            height: 2px;
            background-color: #E5EAF4;
        }
    }
`;
