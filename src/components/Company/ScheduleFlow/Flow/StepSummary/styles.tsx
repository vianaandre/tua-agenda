import styled from 'styled-components';

export const ContainerStepSummary = styled.div`
    height: 100%;
    overflow: auto;
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
        div.list_services {
            width: 100%;
            margin-top: ${({ theme }) => theme.spacing(2.25)};
            div.list {
                width: 100%;
                margin-top: ${({ theme }) => theme.spacing(2.25)};
                div.list_data {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    padding: ${({ theme }) => theme.spacing(2.25)} 0px;
                    border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
                    &:last-child {
                        border-bottom-width: 0px;
                    }
                    div {
                        padding-right: ${({ theme }) => theme.spacing(2.5)};
                        p {
                            text-align: left;
                            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                        }
                    }
                    div.tag {
                        width: 5%;
                    }
                    div.name {
                        width: 25%;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2; /* Definimos quantas linhas queremos */
                        display: -webkit-box;
                        overflow: hidden;
                    }
                    div.description {
                        width: 25%;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2; /* Definimos quantas linhas queremos */
                        display: -webkit-box;
                        overflow: hidden;
                        padding-right: ${({ theme }) => theme.spacing(3)};
                    }
                    div.duration {
                        width: 15%;
                    }
                    div.value {
                        width: 15%;
                    }
                    div.category {
                        width: 10%;
                    }
                    div.remove {
                        width: 5%;
                        button {
                            &:hover {
                                background-color: ${({ theme }) => theme.colors.DANGER_LIGHT};
                            }
                        }
                    }
                }
            }
        }
        div.observation {
            width: 100%;
            margin-top: ${({ theme }) => theme.spacing(3.5)};
            textarea {
                padding: ${({ theme }) => theme.spacing(2)};
                resize: none;
                width: 100%;
                border-radius: ${({ theme }) => theme.spacing(1)};
                border: 1px solid ${({ theme }) => theme.colors.GREY[500]};
                font-size: ${({ theme }) => theme.fonts.sizes[16]};
                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                font-weight: 500;
                color: ${({ theme }) => theme.colors.PRIMARY[800]};
                &::placeholder {
                    color: ${({ theme }) => theme.colors.GREY[700]};
                    font-weight: 400
                };
                &:focus {
                    outline: none;
                    box-shadow: none;
                    border-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                }
            }
        }
        div.buttom_complete {
            display: flex;
            flex-direction: column;
            gap: ${({ theme }) => theme.spacing(2)};
            align-items: flex-end;
            margin-top: ${({ theme }) => theme.spacing(5.25)};
            margin-bottom: ${({ theme }) => theme.spacing(5)};
            p {
                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                font-weight: 400;
                strong {
                    font-size: ${({ theme }) => theme.fonts.sizes[24]};
                    font-weight: 700;
                }
            }
            button {
                justify-content: space-between;
            }
        }
    }
`;
