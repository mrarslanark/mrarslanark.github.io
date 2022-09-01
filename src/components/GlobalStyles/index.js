import { createGlobalStyle } from "styled-components";
import { device } from "../../constants/theme";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: "Anek Latin", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => theme.body};
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Kdam Thmor Pro", sans-serif;
        color: ${({ theme }) => theme.heading};
        margin: 0;
        padding: 0;
    }
    
    h1 {
        font-size: xx-large;
        color: ${({ theme }) => theme.heading};
    }
    
    p {
        color: ${({ theme }) => theme.text};
        font-size: 1.1rem;
        margin: 0;
        padding: 0;
        line-height: 1.6rem;
    }
    
    section {
        padding: 24px;
    }
    
    a {
        text-decoration: none;
    }
    
    hr {
        margin: 10px 0px;
        border-color: ${({ theme }) => theme.content_divider};
        border-width: 0.5px;
    }
    
    .loading-animation {
        height: 100px;
        width: 100px;
    }

    .scroll {
        -ms-overflow-style: none; 
        scrollbar-width: none;
        overflow-x: scroll; 
    }

    .scroll::-webkit-scrollbar {
        display: none;
    }

    .item-container {
        background-color: ${({ theme }) => theme.item_container_bg};
        display: flex;
        flex-direction: column;
        margin: 0px 12px 0px 0px;
        transition: 0.3s;
    }

    .item-container:hover {
        background-color: ${({ theme }) => theme.item_container_bg_hover};
    }

    @media ${device.mobileS} {
        h4 {
            font-size: xx-small;
        }
    }
    @media ${device.mobileM} {
        h4 {
            font-size: x-small;
        }
    }
    @media ${device.mobileL} {
        h4 {
            font-size: small;
        }
    }
    @media ${device.tablet} {
        h4 {
            font-size: medium;
        }
    }
    @media ${device.laptop} {
        h4 {
            font-size: large;
        }
    }
    @media ${device.laptopL} {
        h4 {
            font-size: x-large;
        }
    }
    @media ${device.desktop} {
        h4 {
            font-size: xx-large;
        }
    }

    @keyframes float {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }
`;

export default GlobalStyles;
