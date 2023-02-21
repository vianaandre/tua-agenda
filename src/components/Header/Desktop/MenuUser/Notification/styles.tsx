import styled from 'styled-components';

export const ContainerNotification = styled.div`
    div.btn {
        button {
            &:hover {
                background-color: ${({ theme }) => theme.colors.WHITE_LIGHT};
            }
            position: relative;
        }
        &.active_notifications {
            button::after {
                content: "";
                display: block;
                position: absolute;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: ${({ theme }) => theme.colors.SUCCESS};
                top: 4px;
                right: 10px;
            }
        }
    }
`;
