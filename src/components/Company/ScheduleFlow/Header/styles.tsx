import styled from 'styled-components';

export const ContainerHeader = styled.div`
    background-color: ${({ theme }) => theme.colors.PRIMARY[800]};
    padding: ${({ theme }) => theme.spacing(3)} 0px;
    padding-bottom: ${({ theme }) => theme.spacing(1)};

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing(1)} 0px;
    }

    div.container {
        h4.title {
            font-family: ${({ theme }) => theme.fonts.family.TITLE};
            @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                display: none;
            }
        }
        div.btn_back {
            display: none;
            @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                display: block;
                h4.title {
                    display: flex !important;
                    font-size: ${({ theme }) => theme.fonts.sizes[18]};
                }
                button {
                    display: flex;
                    padding: ${({ theme }) => theme.spacing(1)};
                    padding-left: 0px;
                    color: ${({ theme }) => theme.colors.WHITE};
                    &:hover {
                        filter: brightness(0.8);
                    }
                }
            }
        }
        display: flex;
        align-items: center;
        justify-content: space-between;
        button.close {
            color: ${({ theme }) => theme.colors.WHITE};
            margin-left: auto;
            &:hover {
                background-color: ${({ theme }) => theme.colors.DANGER};
            }
        }
    }
`;
