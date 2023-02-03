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
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
    }
    button.btn_submit {
        min-height: 60px;
        min-width: 209px;
        @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            min-width: 180px;
        }
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            width: 100%;
            @media(max-width: 524px) {
                margin-top: ${({ theme }) => theme.spacing(2)};
            }
        }
    };
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-wrap: wrap;
        padding-bottom: ${({ theme }) => theme.spacing(4)};
        @media(max-width: 524px) {
            flex-direction: column;
            gap: ${({ theme }) => theme.spacing(2)}
        }
    }
`;

export const ContainerFormInputs = styled.div`
    flex: 1;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
    };
    @media(max-width: 524px) {
        div.icon_input, div.icon_select {
            display: none;
        }
    }
`;
