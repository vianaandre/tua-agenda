import styled from 'styled-components';

export const ContainerFooter = styled.footer`
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
    padding-top: ${({ theme }) => theme.spacing(9)};
    padding-bottom: ${({ theme }) => theme.spacing(6)};
`;
