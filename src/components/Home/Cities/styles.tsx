import styled from 'styled-components';

export const ContainerCities = styled.section`
    margin-top: ${({ theme }) => theme.spacing(9)};
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.PRIMARY[0]};
    position: relative;
    overflow: hidden;
    padding: ${({ theme }) => theme.spacing(9)} 0px;

    div.container {
        ul {
            display: flex;
            flex-wrap: wrap;
            gap: ${({ theme }) => theme.spacing(4)};
            margin-top: ${({ theme }) => theme.spacing(6)};
        }
        button.view_more {
            width: 100%;
            margin-top: ${({ theme }) => theme.spacing(4)};
        }
    }
`;

export const ContainerCitiesBgEffect = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        bottom: -10px;
    }
`;
