import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /* *::-webkit-scrollbar {
        width: 6px;
        height: 8px;
    }
    *::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.PRIMARY[500]};
        border-radius: 6px;
    } */
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
    .color_grey_850 {
        color: ${({ theme }) => theme.colors.GREY[850]} !important;
    }
    .color_grey_900 {
        color: ${({ theme }) => theme.colors.GREY[900]} !important;
    }
    .color_grey_950 {
        color: ${({ theme }) => theme.colors.GREY[950]} !important;
    }
    .color_grey_1000 {
        color: ${({ theme }) => theme.colors.GREY[1000]} !important;
    }
    .color_black_500 {
        color: ${({ theme }) => theme.colors.BLACK[500]} !important;
    }
    .color_blue_200 {
        color: ${({ theme }) => theme.colors.BLUE[200]} !important;
    }
    .font_weight_500 {
        font-weight: 500;
    }
    div.content_select {
        width: 100%;
        background-color: ${({ theme }) => theme.colors.WHITE} !important;
        overflow: hidden;
        border-radius: 4px;
        z-index: ${({ theme }) => theme.zIndex.MODAL};
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
        animation: animationOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
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
        &.popover_status_content {
            .popover_notification_content_arrow {
                fill: ${({ theme }) => theme.colors.WHITE};
            }
            width: fit-content;
            min-width: 200px;
            padding: ${({ theme }) => theme.spacing(1.5)};
            div.status {
                width: 100%;
                ul {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: ${({ theme }) => theme.spacing(2)};
                    li {
                        width: 100%;
                        button {
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            p {
                                font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                                font-weight: 500;
                                color: ${({ theme }) => theme.colors.GREY[1000]}
                            };
                            div.checkbox {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border: 1px solid ${({ theme }) => theme.colors.GREY[850]};
                                border-radius: 4px;
                                width: ${({ theme }) => theme.spacing(2.25)};
                                height: ${({ theme }) => theme.spacing(2.25)};
                            }
                            &:hover {
                                div.checkbox {
                                    border-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                                }
                            }
                            &.active {
                                div.checkbox {
                                    border-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                                    div {
                                        width: ${({ theme }) => theme.spacing(1.75)};
                                        height: ${({ theme }) => theme.spacing(1.75)};
                                        border-radius: 4px;
                                        background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                                    }
                                }
                            }
                        }
                    }
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
    .dialog_overlay {
        animation: animationOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }
    div.dialog_content {
        width: 100vw;
        height: 100vh;
        min-height: 600px;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div.dialog_content_waiting_list {
        div.content_modal {
            border-radius: ${({ theme }) => theme.spacing(1)};
            width: 100%;
            max-width: 700px;
            height: 100%;
            max-height: 920px;
            min-height: 600px;
            overflow: auto;
            background-color: ${({ theme }) => theme.colors.WHITE};
            animation: animationContentShow 200ms linear forwards;
            div.header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
                h5 {
                    color: ${({ theme }) => theme.colors.BLACK[500]};
                }
                @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(2)};
                }
            }
            div.content {
                width: 100%;
                form {
                    width: 100%;
                }
                div.header_form {
                    width: 100%;
                    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
                    background-color: ${({ theme }) => theme.colors.PRIMARY[0]};
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                        padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(2)};
                    }
                    label, h6 {
                        font-size: ${({ theme }) => theme.fonts.sizes[16]};
                        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                        font-weight: 500;
                        color: ${({ theme }) => theme.colors.BLACK[500]};
                    }
                    button {
                        font-size: ${({ theme }) => theme.fonts.sizes[16]};
                        font-family: ${({ theme }) => theme.fonts.family.PRIMARY};
                        font-weight: 700;
                        color: ${({ theme }) => theme.colors.PRIMARY[500]};
                        padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(1.75)};
                        border: 1px solid ${({ theme }) => theme.colors.PRIMARY[500]};
                        border-radius: 4px;
                        transition: 400ms;
                        &:hover {
                            transition: 400ms;
                            background-color: ${({ theme }) => theme.colors.PRIMARY[500]};
                            color: ${({ theme }) => theme.colors.WHITE};
                            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                                background-color: transparent;
                                color: ${({ theme }) => theme.colors.PRIMARY[500]};
                            }
                        }
                    }
                }
                div.hours {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    div.inputs {
                        display: flex;
                        gap: ${({ theme }) => theme.spacing(3)};
                        width: 100%;
                        padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
                        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                            flex-direction: column;
                            gap: ${({ theme }) => theme.spacing(0)};
                            padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(2)};
                        }
                        div.hour {
                            width: 100%;
                        }
                        position: relative;
                        div.btn {
                            display: none;
                        }
                        &.list {
                            padding-right: ${({ theme }) => theme.spacing(10)};
                            div.btn {
                                display: flex;
                                position: absolute;
                                right: ${({ theme }) => theme.spacing(4)};
                                top: 68px;
                            }
                        }
                }
                div.my_data {
                    margin-top: ${({ theme }) => theme.spacing(4)};
                }
                }
                div.my_data {
                    margin-top: ${({ theme }) => theme.spacing(3)};
                    div.form_my_data {
                        display: flex;
                        flex-direction: column;
                        gap: ${({ theme }) => theme.spacing(2)};
                        padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) => theme.spacing(4)};
                        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                            padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) => theme.spacing(2)};
                            gap: ${({ theme }) => theme.spacing(1)};
                        }
                    }
                    div.cpf_date {
                        display: flex;
                        gap: ${({ theme }) => theme.spacing(2)};
                        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                            flex-direction: column;
                        }
                    }
                }
                div.btns {
                    display: flex;
                    justify-content: flex-end;
                    gap: ${({ theme }) => theme.spacing(2)};
                    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
                    padding-bottom: ${({ theme }) => theme.spacing(3)};
                    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                        padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(2)};
                    }
                }
            }
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
    @keyframes animationOverlayShow {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes animationContentShow {
        from {
            opacity: 0;
            transform: translate(0%, 0%) scale(0.96);
        }
        to {
            opacity: 1;
            transform: translate(0%, 0%) scale(1);
        }
    }
    @keyframes animationSlideDown {
        from {
            height: 0;
        }
        to {
            height: var(--radix-accordion-content-height);
        }
    }
    @keyframes animationSlideUp {
        from {
            height: var(--radix-accordion-content-height);
        }
        to {
            height: 0;
        }
    }
`;
