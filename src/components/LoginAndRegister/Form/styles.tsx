import styled from 'styled-components';

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};

    div.checkbox {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        button {
            padding-right: 0px;
        }
    }
    div.btn_submit {
        width: 100%;
        margin-top: ${({ theme }) => theme.spacing(3)};
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(3)};
        @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            align-items: center;
        }
        button {
            width: 100%;
        }
        p {
            font-weight: 500;
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
            a {
                text-decoration: underline;
                color: ${({ theme }) => theme.colors.PRIMARY[500]};
                font-weight: 500;
            }
        }
    }
`;
