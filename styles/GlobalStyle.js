import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;

    }


    html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
        width: 100%;
        font-family: sans-serif;
        background-color: whitesmoke;
        display: flex;
      }

    /* .nav {
        text-align: center;
        box-shadow: 0 1px 2px rgba(0,0,0,.1);
    } */



 .mapboxgl-popup-content{
    background: rgba(77, 150, 239, 1);
     /* background: white;  */
     border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    padding: 10px 10px;
    pointer-events: auto;
    position: relative;
    opacity: 0.9; 
 }

 .mapboxgl-popup-close-button {
    background-color: transparent;
    border: 0;
    border-radius: 0 3px 0 0;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    color: white;
}

a:-webkit-any-link {
    color:white;
    cursor: pointer;
    text-decoration: none;
} 

.location-container {
    margin-top: 100px;
    display: flex;
    position: relative;
}
`;

export default GlobalStyle;
