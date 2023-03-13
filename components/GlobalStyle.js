import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        margin: 0;
    }

    .nav {
        text-align: center;
    }
`;

export default GlobalStyle;
