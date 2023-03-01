import styled from 'styled-components';

export const ContainerHours = styled.div`
    button.trigger {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(1.5)};
        &:focus {
            outline: none;
            box-shadow: none;
            border: none;
        }
        p {
            font-weight: 600;
            line-height: 100%;
        }
        div.icon_arrow {
            display: flex;
            transform: rotate(90deg);
            transition: 400ms;
            margin-bottom: 4px;
            &.active_open {
                transition: 400ms;
                transform: rotate(-90deg);
            }
        }
    }
`;
