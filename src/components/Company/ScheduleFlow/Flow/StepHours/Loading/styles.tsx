import styled from 'styled-components';

export const ContainerLoading = styled.div`
    width: 100%;
    display: flex;
    gap: ${({ theme }) => theme.spacing(3)};
    div.loading_list_hours_mobile {
        display: none;
    }
    div.loading_calendar {
        width: 350px;
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(3)};
        div.calendar {
            height: 340px;
            span {
                height: 320px !important;
            }
        }
        p.header {
            height: 32px;
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            display: none;
        }
    }
    div.loading_list_hours {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(3)};
        flex: 1;
        p.title {
            height: 32px;
        }
        div.hours {
            display: flex;
            flex-wrap: wrap;
            gap: ${({ theme }) => theme.spacing(2)};
            div {
                width: calc(100% / 4 - ${({ theme }) => theme.spacing(1.5)});
            }
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            display: none;
        }
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        div.loading_list_hours_mobile {
            display: flex;
            flex-direction: column;
            gap: ${({ theme }) => theme.spacing(3)};
            flex: 1;
            p.title {
                height: 32px;
            }
            p.button {
                margin-bottom: ${({ theme }) => theme.spacing(2)};
                height: 32px;
            }
            div.hours {
                display: flex;
                flex-wrap: wrap;
                gap: ${({ theme }) => theme.spacing(2)};
                div {
                    width: calc(100% / 2 - ${({ theme }) => theme.spacing(1.5)});
                }
            }
        }
    }
`;
