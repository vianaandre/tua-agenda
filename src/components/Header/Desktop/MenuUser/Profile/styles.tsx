import styled from 'styled-components';

export const ContainerProfile = styled.div`
    width: 207px;
    button {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(2)};
        div.infos {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            p.color_white {
                width: 98px;
                white-space: nowrap;
                text-align: left;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        &:focus {
            outline: none;
            box-shadow: none;
            border: none;
        }
        div.icon_btn {
            display: flex;
            transition: 400ms;
            &.open {
                transition: 400ms;
                transform: rotate(180deg);
            }
        }
    }
`;

export const ContainerProfileAvatar = styled.div<{
    imageUrl: string;
}>`
    background: url(${({ imageUrl }) => imageUrl}) no-repeat center;
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;
