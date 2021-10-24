import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    color: #3E3E3E;
    font-family: NotoSans;
  }

  @media all and (min-width: 1025px){
    html {
      font-size: 100%;
    }
  }

  @media all and (min-width: 320px) and (max-width: 1024px) {
    html {
      font-size: 62.5%;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button {
    outline: none; 
    border: none;
    background-color: transparent;                                                                                                                                                                        
  }
`;

export default GlobalStyle;
