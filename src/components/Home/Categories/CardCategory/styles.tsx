import styled from 'styled-components';

export const ContainerCardCategory = styled.li`
    width: 100%;
    button {
        width: 100%;
        height: 214px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: ${({ theme }) => theme.spacing(4)};
        background-color: ${({ theme }) => theme.colors.WHITE};
        transition: 400ms;
        border: 1px solid ${({ theme }) => theme.colors.GREY[500]};
        border-radius: ${({ theme }) => theme.spacing(1)};
        cursor: pointer;
        div.icon {
            svg {
                path {
                    transition: 400ms;
                    fill: ${({ theme }) => theme.colors.PRIMARY[500]};
                }
            }
        }
        h5 {
            transition: 400ms;
            margin-top: ${({ theme }) => theme.spacing(4)};
            margin-bottom: ${({ theme }) => theme.spacing(1.5)};
        }
        div.count_professionals {
            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.spacing(2)};
            p.great {
                transition: 400ms;
                font-size: ${({ theme }) => theme.fonts.sizes[18]};
            }
        }
        &:hover {
            transition: 400ms;
            background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
            div.icon {
                svg {
                    path {
                        transition: 400ms;
                        fill: ${({ theme }) => theme.colors.WHITE};
                    }
                }
            }
            div.count_professionals {
                p.color_light {
                    transition: 400ms;
                    color: ${({ theme }) => theme.colors.WHITE};
                }
                svg {
                    path {
                        transition: 400ms;
                        stroke: ${({ theme }) => theme.colors.WHITE};
                    }
                }
            }
            h5 {
                transition: 400ms;
                color: ${({ theme }) => theme.colors.WHITE};
            }
        }
    }
`;
