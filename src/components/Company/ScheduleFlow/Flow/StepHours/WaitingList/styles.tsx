import styled from 'styled-components';

export const ContainerWaitingList = styled.div`
    p.color_dark {
        margin: ${({ theme }) => theme.spacing(2)} 0px;
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        font-weight: 500;
    }
    p.color_grey_900 {
        margin-top: ${({ theme }) => theme.spacing(2)}
    }
`;
