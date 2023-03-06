import styled from 'styled-components';

export const ContainerAboutCompany = styled.section`
    margin-top: ${({ theme }) => theme.spacing(9)};
    div.content {
        width: 100%;
        padding-bottom: ${({ theme }) => theme.spacing(9)};
        border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
        display: flex;
        gap: ${({ theme }) => theme.spacing(8)};
        @media(max-width: ${({ theme }) => theme.breakpoints.tablet})  {
            flex-direction: column;
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            gap:  ${({ theme }) => theme.spacing(4)};
        }
    }
`;
