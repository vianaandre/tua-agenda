import styled from 'styled-components';

export const ContainerForm = styled.form`
    margin: ${({ theme }) => theme.spacing(4)} 0px;
    margin-bottom: ${({ theme }) => theme.spacing(5)};
    div.personal, div.address_form {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: ${({ theme }) => theme.spacing(3)};
        div.container_input {
            width: calc(100% / 3 - ${({ theme }) => theme.spacing(2)});
        }
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        div.personal {
            div.container_input {
                &:nth-child(1), &:nth-child(2) {
                    width: calc(100% / 2 - ${({ theme }) => theme.spacing(2)});
                }
                @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                    &:nth-child(3) {
                        width: 100%;
                    }
                    &:nth-child(4), &:nth-child(5) {
                        width: calc(100% / 2 - ${({ theme }) => theme.spacing(2)});
                    }
                }
                @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    width: 100% !important;
                }
            }
        }
    }
    div.address {
        margin-top: ${({ theme }) => theme.spacing(4)};
        div.address_title {
            width: 100%;
            border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
            padding-bottom: ${({ theme }) => theme.spacing(1)};
            margin-bottom: ${({ theme }) => theme.spacing(3)};
            h6 {
                font-size: ${({ theme }) => theme.fonts.sizes[16]};
                font-weight: 500;
                color: ${({ theme }) => theme.colors.PRIMARY[500]};
            }
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            div.container_input {
                width: calc(100% / 2 - ${({ theme }) => theme.spacing(2)});
            }
        }
    }
    div.btn_submit {
        width: 100%;
        margin-top: ${({ theme }) => theme.spacing(5)};
        button {
            width: 100%;
        }
    }
`;
