import styled from 'styled-components';

export const ContainerCardCity = styled.li`
    width: calc(100% / 2 - ${({ theme }) => theme.spacing(2)});
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
    }
    button {
        width: 100%;
        padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(5)};
        background-color: ${({ theme }) => theme.colors.WHITE};
        border-radius: ${({ theme }) => theme.spacing(1)};
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: 400ms;
        div.info {
            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.spacing(2)};
            p {
                text-align: start;
                font-size: ${({ theme }) => theme.fonts.sizes[20]};
                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                font-weight: 500;
                color: ${({ theme }) => theme.colors.BLACK[500]};
            }
            div.badge {
                font-size: ${({ theme }) => theme.fonts.sizes[14]};
                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                font-weight: 500;
                color: ${({ theme }) => theme.colors.WHITE};
                padding: 4px 6px;
                background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                border-radius: 4px;
            }
        }
        svg {
                path {
                    transition: 400ms;
                    stroke: ${({ theme }) => theme.colors.BLACK[1000]}
                }
            }
        &:hover {
            transition: 400ms;
            background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
            p {
                color: ${({ theme }) => theme.colors.WHITE} !important;
            }
            svg {
                path {
                    transition: 400ms;
                    stroke: ${({ theme }) => theme.colors.WHITE}
                }
            }
        }
    }
`;
