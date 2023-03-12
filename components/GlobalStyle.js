import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        margin: 0;
    }

    .mapboxgl-map {
    -webkit-tap-highlight-color: rgb(0 0 0/0);
    font: 12px/20px Helvetica Neue,Arial,Helvetica,sans-serif;
    /* overflow: hidden; */
    position: relative;
}
`;

export default GlobalStyle;
