import styled from 'styled-components';

export const ContainerEmpty = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
    padding: ${({ theme }) => theme.spacing(3)} 0px;
    margin: auto 0px;
    h3 {
        text-align: center;
        text-transform: uppercase;
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: ${({ theme }) => theme.fonts.sizes[24]};
        }
    }
`;
