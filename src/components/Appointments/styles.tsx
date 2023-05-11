import styled from 'styled-components';

export const ContainerAppointments = styled.main`
    div.content_header {
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            svg {
                display: none;
            }
        }
    }
`;
