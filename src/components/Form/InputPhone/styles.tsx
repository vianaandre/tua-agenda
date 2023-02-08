import styled from 'styled-components';

export const ContainerInputPhone = styled.div`
    display: flex;
    flex-direction: column;
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
        > div:nth-child(1) {
            max-width: 140px;
            > div {
                border-right: 0px;
                border-radius: 8px 0px 0px 8px;
            }
        }
        div:nth-child(2) {
            > div {
                border-radius: 0px 8px 8px 0px;
            }
        }
    }
`;
