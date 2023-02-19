import styled from 'styled-components';

export const ContainerAuthPerPhone = styled.form`
    margin-top: ${({ theme }) => theme.spacing(10.25)};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-top: ${({ theme }) => theme.spacing(7)};
    }

    p.normal {
        margin-top: ${({ theme }) => theme.spacing(2.25)};
        font-weight: 500;
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        strong {
            font-weight: 500;
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
            color: ${({ theme }) => theme.colors.PRIMARY[800]};
            text-decoration: underline;
        }
    }
    div.btn_submit {
        button {
            width: 100%;
            margin-top: ${({ theme }) => theme.spacing(3)};
        }
    }    
`;
