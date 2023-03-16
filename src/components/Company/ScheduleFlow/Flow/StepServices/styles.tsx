import styled from 'styled-components';

export const ContainerStepServices = styled.div`
    height: 100%;
    div.container {
        max-height: 100%;
        padding-top: ${({ theme }) => theme.spacing(4)};
        padding-bottom: ${({ theme }) => theme.spacing(4)};
        display: flex;
        flex-direction: column;
        div.header {
            max-width: 500px;
        }
        div.list {
            margin-top: ${({ theme }) => theme.spacing(2.25)};
            margin-bottom: ${({ theme }) => theme.spacing(4.25)};
            padding-bottom: ${({ theme }) => theme.spacing(2.25)};
            overflow: auto;
            &::-webkit-scrollbar {
                display: none;
            };
            overscroll-behavior-x: contain;
        }
        ul {
            display: flex;
            flex-direction: column;
            gap: ${({ theme }) => theme.spacing(1)};
        }
        button.next {
            margin-top: auto;
            justify-content: space-between;
            min-height: 50px;
        }
    }
`;
