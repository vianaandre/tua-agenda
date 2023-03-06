import styled from 'styled-components';

export const ContainerCardService = styled.li`
    width: 100%;
    button {
        width: 100%;
        padding: ${({ theme }) => theme.spacing(2)};
        background-color: ${({ theme }) => theme.colors.WHITE};
        border-radius: ${({ theme }) => theme.spacing(1)};
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.03);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid ${({ theme }) => theme.colors.WHITE};
        transition: 400ms;
        div.title {
            width: 40%;
            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.spacing(2)};
            div.part_two {
                p {
                    color: ${({ theme }) => theme.colors.BLACK[500]};
                    font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                    font-weight: 500;
                }
            }
        }
        div.time {
            width: 20%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: ${({ theme }) => theme.spacing(1)};
            p.normal {
                color: ${({ theme }) => theme.colors.GREY[1000]};
                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                font-weight: 500;
            }
        }
        div.price {
            width: 20%;
            display: flex;
            justify-content: flex-end;
            p.great {
                color: ${({ theme }) => theme.colors.BLACK[500]};
                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                font-weight: 500;
            }
        }
        div.container_checkbox {
            width: 20%;
            display: flex;
            justify-content: flex-end;
            div.checkbox {
                transition: 400ms;
                width: ${({ theme }) => theme.spacing(3)};
                height: ${({ theme }) => theme.spacing(3)};
                border-radius: 4px;
                border: 1px solid ${({ theme }) => theme.colors.GREY[850]};
                display: flex;
                align-items: center;
                justify-content: center;
                div {
                    transition: 400ms;
                }
            }
        }
        &:hover, &.selected {
            transition: 400ms;
            border-color: ${({ theme }) => theme.colors.PRIMARY[500]};
            div.container_checkbox {
                div.checkbox {
                    transition: 400ms;
                    border-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                    div {
                        transition: 400ms;
                        width: ${({ theme }) => theme.spacing(2)};
                        height: ${({ theme }) => theme.spacing(2)};
                        background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                        border-radius: 4px;
                    }
                }
            }
        }
    }
    &.selected {
        button {
            div.container_checkbox {
                div.checkbox {
                    border-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                }
            }
        }
    }
`;
