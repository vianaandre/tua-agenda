import styled from 'styled-components';

export const ContainerGraphics = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.PRIMARY[800]};
    padding-bottom: ${({ theme }) => theme.spacing(7)};
    div.container {
        display: flex;
        gap: ${({ theme }) => theme.spacing(4)};
        div.item_graphic {
            width: calc(100% / 3 - ${({ theme }) => theme.spacing(3.5)});
            padding: ${({ theme }) => theme.spacing(4)};
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: ${({ theme }) => theme.spacing(1)};
            display: flex;
            flex-direction: column;
            gap: ${({ theme }) => theme.spacing(4)};
            div.header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                h6 {
                    color: ${({ theme }) => theme.colors.WHITE};
                    font-weight: 400;
                }
                div.icon {
                    padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(1.5)};
                    border-radius: ${({ theme }) => theme.spacing(1)};
                    background-color: rgba(234, 228, 245, 0.1);
                    height: fit-content;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
            div.body {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                h6 {
                    font-size: ${({ theme }) => theme.fonts.sizes[40]};
                    color: ${({ theme }) => theme.colors.WHITE};
                    font-weight: 600;
                }
                span {
                    font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                }
            }
            &.atended {
                span {
                    strong {
                        color: ${({ theme }) => theme.colors.SUCCESS};
                    }
                }
            }
            &.pending {
                span {
                    strong {
                        color: ${({ theme }) => theme.colors.WARNING};
                    }
                }
            }
            &.cancel {
                span {
                    strong {
                        color: ${({ theme }) => theme.colors.DANGER};
                    }
                }
            }
            div.graphic {
                width: 100%;
                overflow: hidden;
            }
        }
    }
`;
