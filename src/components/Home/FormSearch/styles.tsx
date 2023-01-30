import styled from 'styled-components';

export const ContainerFormSearch = styled.form`
    width: 100%;
    position: relative;
    /* z-index: ${({ theme }) => theme.zIndex.BASE}; */
    background-color: ${({ theme }) => theme.colors.WHITE};
    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(3)};
    box-shadow: 0px 79px 128px rgba(192, 192, 192, 0.09), 0px 28.8363px 46.7221px rgba(192, 192, 192, 0.0598508), 0px 13.9995px 22.6827px rgba(192, 192, 192, 0.0475723), 0px 6.86281px 11.1195px rgba(192, 192, 192, 0.0380675), 0px 2.71357px 4.39666px rgba(192, 192, 192, 0.0270615);
    border-radius: 8px;
    button {
        min-height: 60px;
        min-width: 209px;
    };
`;

export const ContainerFormInputs = styled.div`
    flex: 1
`;
