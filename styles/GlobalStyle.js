import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        
  color: whitesmoke;
  font-family: sans-serif;
  font-weight: lighter;
  text-decoration: none;


    }
    
      /* body > div:first-child,
      div#__next,
      div#__next > div */
  
      body, div#__next {
        height: 100%;
        width: 100%;
        background-color: rgb(35, 35, 35);
        display: flex;
      }



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
    display: flex;
    flex-direction: column;
    position: relative;
    align-content: center;
    width: 95vw;
    margin: 100px auto 0 auto;
}
`;

export default GlobalStyle;
