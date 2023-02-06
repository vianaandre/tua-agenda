import styled from 'styled-components';

export const ContainerCompanyHighlights = styled.section`
    margin-top: ${({ theme }) => theme.spacing(9)};

    div.container {
        header {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                h2 {
                    flex: 1;
                }
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                flex-wrap: wrap;
                gap: ${({ theme }) => theme.spacing(2)};
            }

            button {
                display: flex;
                align-items: center;
                gap: ${({ theme }) => theme.spacing(2)};
                transition: 400ms;
                p {
                    font-weight: 500;
                };
                &:hover {
                    filter: brightness(1.3);
                    transition: 400ms;
                }
            }
        }
        ul {
            display: flex;
            gap: ${({ theme }) => theme.spacing(4)};
            flex-wrap: wrap;
            margin-top: ${({ theme }) => theme.spacing(6)};
            div.animate__animated {
                width: calc(100% / 4 - ${({ theme }) => theme.spacing(3)});
                @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
                    width: calc(100% / 2 - ${({ theme }) => theme.spacing(3)});
                }
                @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    width: 100%;
                }
            }
        }
    }
`;
