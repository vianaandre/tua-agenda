import styled from 'styled-components';

export const ContainerStepHours = styled.div`
    height: 100%;
    div.container {
        padding-top: ${({ theme }) => theme.spacing(4)};
        padding-bottom: ${({ theme }) => theme.spacing(4)};
        height: 100%;
        display: flex;
        flex-direction: column;
        div.content {
            display: flex;
            gap: ${({ theme }) => theme.spacing(3)};
        }
        div.react-calendar {
            padding: ${({ theme }) => theme.spacing(3)};
            border: 1px solid ${({ theme }) => theme.colors.GREY[500]};
            border-radius: ${({ theme }) => theme.spacing(1)};
            div.react-calendar__month-view__weekdays__weekday {
                abbr {
                    font-size: ${({ theme }) => theme.fonts.sizes[12]};
                    font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                    font-weight: 500;
                    text-transform: capitalize;
                    color: ${({ theme }) => theme.colors.GREY[700]};
                    text-decoration: none;
                }
            }
            div.react-calendar__month-view__days {
                button {
                    font-size: ${({ theme }) => theme.fonts.sizes[12]};
                    font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                    font-weight: 500;
                    color: ${({ theme }) => theme.colors.BLACK[500]};
                    border-radius: ${({ theme }) => theme.spacing(1)};
                    border: 1px solid ${({ theme }) => theme.colors.WHITE};
                    transition: 400ms;
                    &:hover, &.react-calendar__tile--active {
                        transition: 400ms;
                        background-color: transparent;
                        border-color: ${({ theme }) => theme.colors.PRIMARY[500]}
                    }
                    &.react-calendar__tile--now  {
                        background-color: transparent;
                    }
                    &.react-calendar__month-view__days__day--neighboringMonth {
                        color: ${({ theme }) => theme.colors.GREY[700]};
                    }
                    &:disabled {
                        background-color: transparent;
                        color: ${({ theme }) => theme.colors.GREY[700]};
                        &:hover {
                            border-color: ${({ theme }) => theme.colors.WHITE};
                        }
                    }
                }
            }
            button.react-calendar__navigation__label {
                font-size: ${({ theme }) => theme.fonts.sizes[18]};
                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                font-weight: 700;
                text-transform: capitalize;
                color: ${({ theme }) => theme.colors.BLACK[500]};
                position: absolute;
                left: 0px;
                top: 4px;
                &:hover, &:focus {
                    background-color: transparent;
                }
            }
            button.react-calendar__navigation__next-button, button.react-calendar__navigation__prev-button {
                min-width: ${({ theme }) => theme.spacing(5)};
                min-height: ${({ theme }) => theme.spacing(4)};
                height: ${({ theme }) => theme.spacing(5)};
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                border: 1px solid ${({ theme }) => theme.colors.WHITE};
                transition: 400ms;
                &:hover {
                    transition: 400ms;
                    background-color: transparent;
                    border-color: ${({ theme }) => theme.colors.PRIMARY[500]}
                }
                &:focus {
                    background-color: transparent;
                }
                position: absolute;
                right: 0px;
                top: -4px;
                &:disabled {
                    background-color: transparent;
                    &:hover {
                        border-color: ${({ theme }) => theme.colors.WHITE};
                    }
                    svg {
                        path {
                            stroke: ${({ theme }) => theme.colors.GREY[850]};
                        }
                    }
                }
            }
            button.react-calendar__navigation__prev-button {
                transform: rotate(-180deg);
                right: 100px;
            }
            div.react-calendar__navigation {
                margin-bottom: ${({ theme }) => theme.spacing(1)};
                position: relative;
                width: 100%;
                height: 44px;
            }
        }
        div.select_hours {
            display: flex;
            flex-direction: column;
            gap: ${({ theme }) => theme.spacing(2)};
            flex: 1;
            ul {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                gap: ${({ theme }) => theme.spacing(2)};
                li {
                    width: calc(100% / 4 - ${({ theme }) => theme.spacing(1.5)});
                }
            }
        }
        button.next {
            margin-top: auto;
            justify-content: space-between;
        }
    }
`;
