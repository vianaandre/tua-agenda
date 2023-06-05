import styled from 'styled-components';

export const ContainerHeaderSection = styled.div`
    width: 100%;
    padding-top: ${({ theme }) => theme.spacing(2)};
    background-color: ${({ theme }) => theme.colors.PRIMARY[800]};
    div.container {
        div.content_header {
            border-top: 1px solid ${({ theme }) => theme.colors.WHITE_LIGHT};
            padding-top: ${({ theme }) => theme.spacing(4)};
            padding-bottom: ${({ theme }) => theme.spacing(5.25)};
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                flex-direction: column;
                border-top: 0px;
            }
            div.title {
                display: flex;
                flex-direction: column;
                gap: ${({ theme }) => theme.spacing(1.5)};
                a {
                    color: ${({ theme }) => theme.colors.WHITE};
                    padding: 0px;
                    &:hover {
                        color: ${({ theme }) => theme.colors.WHITE};
                        filter: brightness(0.8)
                    }
                }
                @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    h4 {
                        font-size: ${({ theme }) => theme.fonts.sizes[20]};
                    }
                    p.small {
                        font-size: ${({ theme }) => theme.fonts.sizes[12]};
                    }
                }
                @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    width: 100%;
                }
            }
        }
    }
`;
