import styled from 'styled-components';

export const ContainerSelectedFilters = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    div {
        display: flex;
        align-items: center;
        padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
        border-radius: 4px;
        background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
        gap: ${({ theme }) => theme.spacing(1)};
        p {
            font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
            font-weight: 500;
            font-size: ${({ theme }) => theme.fonts.sizes[12]};
            text-transform: uppercase;
        }
        button {
            display: flex;
            align-items: center;
            width: fit-content;
            height: fit-content;
            padding: 2px;
            border-radius: 50%;
            transition: 400ms;
            &:hover {
                transition: 400ms;
                opacity: 0.7;
            }
        }
    }
`;
