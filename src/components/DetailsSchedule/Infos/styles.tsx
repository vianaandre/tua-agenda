import styled from 'styled-components';

export const ContainerInfos = styled.div`
    padding-top: ${({ theme }) => theme.spacing(4)};
    div.list_infos {
        width: 100%;
        margin-top: ${({ theme }) => theme.spacing(3)};
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(2)};
        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: ${({ theme }) => theme.spacing(3)};
            width: 100%;
            @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                flex-wrap: wrap;
            }
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
                @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                    width: calc(100% / 2 -  ${({ theme }) => theme.spacing(2)});
                    max-width: calc(100% / 2);
                }
                @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    width: 100%;
                    max-width: 100%;
                }
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
                    width: 27%;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2; /* Definimos quantas linhas queremos */
                    display: -webkit-box;
                    overflow: hidden;
                    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                        width: 35%;
                    }
                }
                div.description {
                    width: 30%;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2; /* Definimos quantas linhas queremos */
                    display: -webkit-box;
                    overflow: hidden;
                    padding-right: ${({ theme }) => theme.spacing(3)};
                    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                        display: none;
                    }
                }
                div.duration {
                    width: 15%;
                    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                        width: 25%;
                    }
                }
                div.value {
                    width: 15%;
                    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                        width: 25%;
                    }
                }
                div.category {
                    width: 8%;
                    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                        display: none;
                    }
                }
                div.remove {
                    width: 5%;
                    display: none;
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
        margin-top: ${({ theme }) => theme.spacing(2.25)};
    }
    div.payment {
        margin-top: ${({ theme }) => theme.spacing(4)};
        h6 {
            margin-bottom: ${({ theme }) => theme.spacing(1)};
        }
    }
`;
