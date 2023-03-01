import styled from 'styled-components';

export const ContainerProfessional = styled.button`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
    padding: ${({ theme }) => theme.spacing(3)};
    border: 1px solid ${({ theme }) => theme.colors.GREY[500]};
    border-radius: 8px;
    transition: 400ms;
    &:hover {
        transition: 400ms;
        border-color: ${({ theme }) => theme.colors.PRIMARY[500]};
    }

    div.infos {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(0.25)};
        div.assessment {
            display: flex; 
            align-items: center;
            gap: ${({ theme }) => theme.spacing(1)};
            span.normal {
                line-height: 100%;
            }
        }
    }
`;
