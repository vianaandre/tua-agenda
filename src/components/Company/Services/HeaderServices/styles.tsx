import styled from 'styled-components';

export const ContainerHeaderServices = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(2)};
    }
    form {
        flex: 1;
        max-width: 353px;
        width: 100%;
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile})  {
            max-width: 100%;
        }
    }
    div.part_one {
        h4.title {
            color: ${({ theme }) => theme.colors.BLUE[200]};
            font-family: ${({ theme }) => theme.fonts.family.TITLE};
            margin-bottom: ${({ theme }) => theme.spacing(1)};
        }
    }
`;
