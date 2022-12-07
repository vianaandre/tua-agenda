import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *::-webkit-scrollbar {
        width: 6px;
        height: 8px;
    }
    /* Handle */
    *::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.PRIMARY};
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
    }
    h2.title {
        font-size: ${({ theme }) => theme.fonts.sizes[48]};
        font-weight: 600;
        font-family: ${({ theme }) => theme.fonts.family.TITLE};
        font-style: normal;
        font-feature-settings: 'cv11' on;
        line-height: ${({ theme }) => theme.fonts.height[110]};
        color: ${({ theme }) => theme.colors.BLUE[200]};
    }
    h3.title {
        font-size: ${({ theme }) => theme.fonts.sizes[48]};
        font-weight: 600;
        font-family: ${({ theme }) => theme.fonts.family.TITLE};
        font-style: normal;
        font-feature-settings: 'cv11' on;
        line-height: ${({ theme }) => theme.fonts.height[110]};
        color: ${({ theme }) => theme.colors.BLACK[500]};
    }
    h4.title {
        font-size: ${({ theme }) => theme.fonts.sizes[32]};
        font-weight: 600;
        font-family: ${({ theme }) => theme.fonts.family.ALTERNATIVE};
        font-style: normal;
        line-height: ${({ theme }) => theme.fonts.height[125]};
        color: ${({ theme }) => theme.colors.WHITE};
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
`;
