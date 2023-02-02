import { createGlobalStyle } from "styled-components";
import { device } from "../../constants/theme";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }
    
    body {
        font-family: "Hind Siliguri", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => theme.body};
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    button {
        font-family: "Hind Siliguri", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    }

    pre {
        color: ${({ theme }) => theme.text};
        padding: 16px;
        font-size: 18px;
        background-color: rgba(0, 0, 0, 0.1);
        margin-bottom: 16px;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${({ theme }) => theme.heading};
        margin: 0;
        padding: 0;
    }
    
    h1 {
        font-size: x-large;
        color: ${({ theme }) => theme.heading};
    }
    
    p {
        color: ${({ theme }) => theme.text};
        font-size: 1rem;
        margin: 0;
        padding: 0;
    }
    
    section {
        padding: 24px;
        border-bottom: 1px solid ${({ theme }) => theme.divider};
    }
    
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.text};
    }

    a:hover {
        text-decoration: underline;
    }
    
    hr {
        margin: 10px 0px;
        border-color: ${({ theme }) => theme.content_divider};
        border-width: 0.5px;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${({ theme }) => theme.body};
        border: none;
        height: auto;
        display: flex;
        flex-direction: column;
        padding: 16px 24px;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        background-color: ${({ theme }) => theme.modal_overlay};
    }

    /* Scrollbar width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Scrollbar track */
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.body}; 
    }
    
    /* Scrollbar handle */
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.text};; 
    }

    /* Scrollbar handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
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

    li {
        color: ${({ theme }) => theme.text};
        margin: 10px 0px
    }

    // Wordpress Divider
    .wp-block-separator, .has-alpha-channel-opacity {
        border-color: background-color: ${({ theme }) => theme.content_divider};
        margin: 24px 0px;
    }


    // Wordpress table
    .wp-block-table table {
        margin: 12px 0px;
    }

    .wp-block-table tr {
        display: flex;
        flex-direction: row;
        margin: 0px 0px 12px 0px
    }

    .wp-block-table th {
        flex: 1;
        color: ${({ theme }) => theme.text};
        text-align: left;
    }

    .wp-block-table td {
        flex: 1;
        color: ${({ theme }) => theme.text};
        line-height: 24px;
    }

    .content p {
        margin: 0px 0px 24px 0px
    }

    .content a {
        text-decoration: none;  
        color: ${({ theme }) => theme.text};
    }
      

    @media ${device.mobileS} {
        h4 {
            font-size: xx-small;
        }
        .modal {
            width: 100%;
            overflow: scroll;
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
        .modal {
            width: 60%;
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
