import styled from 'styled-components';

export const ContainerStepSummary = styled.div`
    div.container {
        padding-top: ${({ theme }) => theme.spacing(3)};
        div.header {
            display: flex;
            flex-direction: column;
            width: 100%;
            div.list_infos {
                width: 100%;
                margin-top: ${({ theme }) => theme.spacing(3)};
                display: flex;
                flex-direction: column;
                gap: ${({ theme }) => theme.spacing(2)};
            }
            ul {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: ${({ theme }) => theme.spacing(3)};
                width: 100%;
                li {
                    width: calc(100% / 4);
                    background-color: ${({ theme }) => theme.colors.WHITE}; 
                    box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.03);
                    border-radius: ${({ theme }) => theme.spacing(1)}; 
                    padding: ${({ theme }) => theme.spacing(2)};
                    display: flex;
                    align-items: center;
                    gap: ${({ theme }) => theme.spacing(2)};
                    min-height: 84px;
                    max-width: 252px;
                    div.infos {
                        display: flex;
                        flex-direction: column;
                        gap: ${({ theme }) => theme.spacing(0.5)};
                        span {
                            opacity: 0.5;
                        }
                        p, span {
                            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                        }
                    }
                }
            }
        }
    }
`;
