import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *::-webkit-scrollbar {
        width: 6px;
        height: 8px;
    }
    /* Handle */
    *::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.PRIMARY[500]};
        border-radius: 6px;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
    }
    html {
        font-size: 1rem; // 16px = 1.6rem;
    }
    body {
        -webkit-font-smoothing: antialiased;
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.colors.WHITE};
        overflow-x: hidden;
    }
    html, body { 
      scroll-behavior: smooth !important
    }
    body, input, textarea, button {
        font-weight: normal;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: normal;
        margin: 0;
    }
    p {
      margin: 0;
    }
    button {
        cursor: pointer;
        box-shadow: none;
        border: none;
        background-color: transparent;
        position: relative;
        overflow: hidden;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.BLACK[500]}
    }
    ol, ul, li {
        list-style: none;
        list-style-type: none;
    }
    ul {
        padding-left: 0;
        margin-bottom: 0;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    h1.title {
        font-size: ${({ theme }) => theme.fonts.sizes[64]};
        font-weight: 600;
        font-family: ${({ theme }) => theme.fonts.family.TITLE};
        font-style: normal;
        font-feature-settings: 'cv11' on;
        line-height: ${({ theme }) => theme.fonts.height[110]};
        color: ${({ theme }) => theme.colors.BLACK[500]};
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: ${({ theme }) => theme.fonts.sizes[48]};
        }
    }
    h2.title {
        font-size: ${({ theme }) => theme.fonts.sizes[48]};
        font-weight: 600;
        font-family: ${({ theme }) => theme.fonts.family.TITLE};
        font-style: normal;
        font-feature-settings: 'cv11' on;
        line-height: ${({ theme }) => theme.fonts.height[110]};
        color: ${({ theme }) => theme.colors.BLUE[200]};
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: ${({ theme }) => theme.fonts.sizes[32]};
        }
    }
    h3.title {
        font-size: ${({ theme }) => theme.fonts.sizes[48]};
        font-weight: 600;
        font-family: ${({ theme }) => theme.fonts.family.TITLE};
        font-style: normal;
        font-feature-settings: 'cv11' on;
        line-height: ${({ theme }) => theme.fonts.height[110]};
        color: ${({ theme }) => theme.colors.BLACK[500]};
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: ${({ theme }) => theme.fonts.sizes[32]};
        }
    }
    h4.title {
        font-size: ${({ theme }) => theme.fonts.sizes[32]};
        font-weight: 600;
        font-family: ${({ theme }) => theme.fonts.family.ALTERNATIVE};
        font-style: normal;
        line-height: ${({ theme }) => theme.fonts.height[125]};
        color: ${({ theme }) => theme.colors.WHITE};
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: ${({ theme }) => theme.fonts.sizes[24]};
        }
    };
    h5.title {
        font-size: ${({ theme }) => theme.fonts.sizes[24]};
        font-weight: 600;
        font-family: ${({ theme }) => theme.fonts.family.TITLE};
        font-style: normal;
        line-height: ${({ theme }) => theme.fonts.height[125]};
        color: ${({ theme }) => theme.colors.BLACK[500]};
    };
    h6.title {
        font-size: ${({ theme }) => theme.fonts.sizes[18]};
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        font-style: normal;
        font-weight: 500;
        line-height: ${({ theme }) => theme.fonts.height[160]};
        color: ${({ theme }) => theme.colors.BLACK[500]}
    };
    h6.title_two {
        font-size: ${({ theme }) => theme.fonts.sizes[20]};
        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
        font-style: normal;
        font-weight: 500;
        line-height: ${({ theme }) => theme.fonts.height[125]};
        color: ${({ theme }) => theme.colors.BLACK[500]}
    }
    span.normal {
        font-size: ${({ theme }) => theme.fonts.sizes[14]};
        font-family: ${({ theme }) => theme.fonts.family.SECONDARY};
        line-height: ${({ theme }) => theme.fonts.height[160]};
        font-style: normal;
    }
    span.color_light {
        color: ${({ theme }) => theme.colors.GREY[500]};
        font-weight: 400;
    }
    span.color_normal {
        color: ${({ theme }) => theme.colors.PRIMARY[500]};
        font-weight: 600;
    }
    span.color_dark {
        color: ${({ theme }) => theme.colors.BLACK[500]};
        font-weight: 600;
    }
    p.normal {
        font-size: ${({ theme }) => theme.fonts.sizes[16]};
        font-family: ${({ theme }) => theme.fonts.family.SECONDARY};
        line-height: ${({ theme }) => theme.fonts.height[160]};
        font-style: normal;
    }
    p.small {
        font-size: ${({ theme }) => theme.fonts.sizes[14]};
        font-family: ${({ theme }) => theme.fonts.family.SECONDARY};
        line-height: ${({ theme }) => theme.fonts.height[160]};
        font-style: normal;
    }
    p.great {
        font-size: ${({ theme }) => theme.fonts.sizes[20]};
        font-family: ${({ theme }) => theme.fonts.family.SECONDARY};
        line-height: ${({ theme }) => theme.fonts.height[160]};
        font-style: normal;
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: ${({ theme }) => theme.fonts.sizes[16]};
        }
    }
    p.color_white {
        color: ${({ theme }) => theme.colors.WHITE};
    }
    p.color_light {
        color: ${({ theme }) => theme.colors.GREY[850]};
        font-weight: 400;
    }
    p.color_normal {
        color: ${({ theme }) => theme.colors.PRIMARY[500]};
        font-weight: 400;
    }
    p.color_dark {
        color: ${({ theme }) => theme.colors.PRIMARY[800]};
        font-weight: 400;
    }
    .color_white {
        color: ${({ theme }) => theme.colors.WHITE} !important;
    }
    .color_grey_600 {
        color: ${({ theme }) => theme.colors.GREY[600]} !important;
    }
    .color_grey_700 {
        color: ${({ theme }) => theme.colors.GREY[700]} !important;
    }
    .color_grey_800 {
        color: ${({ theme }) => theme.colors.GREY[800]} !important;
    }
    .color_grey_800 {
        color: ${({ theme }) => theme.colors.GREY[850]} !important;
    }
    .color_grey_950 {
        color: ${({ theme }) => theme.colors.GREY[950]} !important;
    }
    .color_blue_200 {
        color: ${({ theme }) => theme.colors.BLUE[200]} !important;
    }
    .font_weight_500 {
        font-weight: 500;
    }
    div.content-select {
        width: 100%;
        background-color: ${({ theme }) => theme.colors.WHITE} !important;
        overflow: hidden;
        border-radius: 4px;
        .item {
            padding: ${({ theme }) => theme.spacing(1.5)};
            display: flex;
            cursor: pointer;
            border: none;
            outline: none;
            span {
                font-size: ${({ theme }) => theme.fonts.sizes[14]};
                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                color: ${({ theme }) => theme.colors.PRIMARY[800]};
                font-weight: 500;
            }
            &.item_active {
                background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                span {
                    color: ${({ theme }) => theme.colors.WHITE};
                }
            }
            &:hover {
                background-color: ${({ theme }) => theme.colors.PRIMARY[500]};

                span {
                    color: ${({ theme }) => theme.colors.WHITE};
                }
            }
        }
    }
    .dialog_overlay {
        background-color: rgba(0, 0, 0, 0.44);
        position: fixed;
        inset: 0;
        animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
        z-index: ${({ theme }) => theme.zIndex.OVERLAY};
    }
    .dialog_content {
        width: 100vw !important;
        height: 100vh !important;
        min-height: 500px;
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed !important;
        top: 0;
        z-index: ${({ theme }) => theme.zIndex.MODAL};
    }
    div.dropdown_notification_content {
        background-color: ${({ theme }) => theme.colors.WHITE};
        border-radius: 4px;
        width: 300px;
        overflow: hidden;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
        animation: animationFade 200ms linear forwards;
        .popover_notification_content_arrow {
            fill: ${({ theme }) => theme.colors.WHITE};
        }
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) => theme.spacing(2)};
            h4 {
                color: ${({ theme }) => theme.colors.BLACK[500]};
            }
        }
        div.dropdown_notification_content_item {
            button {
                display: flex;
                padding: ${({ theme }) => theme.spacing(2)};
                font-size: ${({ theme }) => theme.fonts.sizes[16]};
                font-family: ${({ theme }) => theme.fonts.family.ALTERNATIVE};
                font-weight: 500;
                font-style: normal;
                color: ${({ theme }) => theme.colors.GREY[1000]};
                width: 100%;
                border-top: 1px solid ${({ theme }) => theme.colors.GREY[500]};

                &:hover {
                    background-color: ${({ theme }) => theme.colors.GREY[500]};
                }
                flex-direction: column;
                p.color_dark {
                    font-weight: 600;
                    color: ${({ theme }) => theme.colors.BLACK[500]}
                }
            }
        }
        div.empty {
            border-top: 1px solid ${({ theme }) => theme.colors.GREY[500]};
            h3 {
                font-size: ${({ theme }) => theme.fonts.sizes[18]} !important;
            }
        }
    }
    div.dropdown_profile_content {
        width: 200px;
        background-color: ${({ theme }) => theme.colors.WHITE};
        border-radius: 4px;
        overflow: hidden;
        animation: animationSlideBottomForTop 200ms  linear forwards;
        margin-top: 30px;
        div.dropdown_profile_content_item {
            width: 100%;
            button, a {
                width: 100%;
                font-size: ${({ theme }) => theme.fonts.sizes[16]};
                font-family: ${({ theme }) => theme.fonts.family.ALTERNATIVE};
                color: ${({ theme }) => theme.colors.BLACK[500]};
                font-weight: 500;
                text-align: left;
                padding: ${({ theme }) => theme.spacing(2)};
                display: flex;
                justify-content: space-between;
                align-items: center;
                &:hover {
                    background-color: ${({ theme }) => theme.colors.GREY[500]};
                }
                &.logout {
                    border-top: 1px solid ${({ theme }) => theme.colors.GREY[500]};
                    color: ${({ theme }) => theme.colors.DANGER}
                }
            }
        }
    }
    div.popover_hours_content {
        width: 275px;
        background-color: ${({ theme }) => theme.colors.WHITE};
        border-radius: 8px;
        z-index: ${({ theme }) => theme.zIndex.DROPDOWN};
        filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
        .tooltip_days_content_arrow {
            fill: ${({ theme }) => theme.colors.WHITE};
        }
        li.item {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) => theme.spacing(1.75)};
            cursor: pointer;
            border-bottom: 1px solid ${({ theme }) => theme.colors.GREY[500]};
            &:last-child {
                border-bottom: none;
            }
            p {
                color: ${({ theme }) => theme.colors.BLACK[500]};
                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                font-weight:400;
            }
            &.active {
                p {
                    font-weight: 700;
                }
            }
            &:focus {
                outline: none;
                box-shadow: none;
            }
        }
    }
    div.tooltip_social_content {
        padding: ${({ theme }) => theme.spacing(0.75)} ${({ theme }) => theme.spacing(1.5)};
        padding-bottom: ${({ theme }) => theme.spacing(0.35)};
        background-color: ${({ theme }) => theme.colors.BLACK[500]};
        border-radius: 8px;
        animation: animationFade 200ms linear forwards;
        p.small {
            font-size: ${({ theme }) => theme.fonts.sizes[12]};
            font-weight: 600;
            text-transform: capitalize;
        }
        .tooltip_social_content_arrow {
            fill: ${({ theme }) => theme.colors.BLACK[500]};
        }
    }
    div.toast {
        div.Toastify__toast-body {
            padding-right: ${({ theme }) => theme.spacing(2.75)};
            div {
                font-size: ${({ theme }) => theme.fonts.sizes[14]};
                font-weight: 500;
                color: ${({ theme }) => theme.colors.GREY[950]};
                font-family: ${({ theme }) => theme.fonts.family.SECONDARY};
            }
        }
        button {
            position: absolute;
            right: 2px;
            top: 2px;
        }
    }
    @keyframes animationFade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes animationInModalDialog {
        from {
            transform: scale(0.8);
        }
        to {
            transform: scale((1));
        }
    }
    @keyframes animationSpin {
        0% { 
            transform: rotate(0deg); 
        }
        100% { 
            transform: rotate(360deg); 
        }
    }
    @keyframes animationSlideBottomForTop {
        from {
            margin-top: 5px;
            opacity: 0;
        }
        to {
            margin-top: 0px;
            opacity: 1;
        }
    }
`;
