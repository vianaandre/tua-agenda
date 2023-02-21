import styled from 'styled-components';

export const ContainerMenuUser = styled.ul`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(3.5)};

    li {
        p {
            font-family: ${({ theme }) => theme.fonts.family.ALTERNATIVE};
            font-weight: 600;
            transition: 400ms;
            font-size: ${({ theme }) => theme.fonts.sizes[14]};
        }
        a {
            cursor: pointer;
            p {
                &:hover {
                    transition: 400ms;
                    color: ${({ theme }) => theme.colors.WHITE} !important;
                }
            }
        }
        &.notification {
            div {
                display: flex;
            }
        }
    }
`;
