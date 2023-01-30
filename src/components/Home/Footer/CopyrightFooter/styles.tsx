import styled from 'styled-components';

export const ContainerCopyRightFooter = styled.div`
    margin-top: ${({ theme }) => theme.spacing(15)};
    width: 100%;
    border-top: 2px solid ${({ theme }) => theme.colors.WHITE_LIGHT};
    padding-bottom: ${({ theme }) => theme.spacing(6)};
    padding-top: ${({ theme }) => theme.spacing(5)};
    display: flex;
    justify-content: space-between;
`;
