import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "NotoSansKR";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/NotoSansKR-Regular.otf") format("opentype");
  }

  @font-face {
    font-family: "Helvetica";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/Helvetica.ttf") format("truetype");
  }

  @font-face {
    font-family: "HelveticaBlack";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/HelveticaBlack.ttf") format("truetype");
  }

  html {
    color: #3E3E3E;
    font-family: NotoSansKR;
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

  button {
    cursor: pointer;
  }

  input {
    border: 0.1rem solid ${({ theme }) => theme.colors.gray3};
  }

  body {
    padding: 5rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.skyblue};
    z-index: -1;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default GlobalStyle;
