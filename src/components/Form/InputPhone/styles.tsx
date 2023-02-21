import styled from 'styled-components';

export const ContainerInputPhone = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1.5)};
    label {
        font-size: ${({ theme }) => theme.fonts.sizes[16]};
        font-weight: 500;
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        color: ${({ theme }) => theme.colors.GREY[950]};

        b {
            color: ${({ theme }) => theme.colors.DANGER}
        }
    }
    div.content {
        display: flex;
        align-items: center;
        height: fit-content;
        > div:nth-child(1) {
            max-width: 130px;
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                max-width: 130px;
            }
            > div {
                border-right: 0px;
                border-radius: 8px 0px 0px 8px;
                border: 2px solid ${({ theme }) => theme.colors.PRIMARY[800]};
                border-right-width: 0px;
            }
        }
        div:nth-child(2) {
            margin: 0px;
            > div {
                border-radius: 0px 8px 8px 0px;
            }
        }
    }
`;
