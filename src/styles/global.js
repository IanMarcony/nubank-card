import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root{
    width: 100%;
    height: 100vh;
  }

  #root{
    background-color: #424242;
  }

  *, button, input{
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }

  h1,h2,h3,h4,h5{
    font-size: 54px;
    font-weight: 700;
  }

  button, a{
    cursor: pointer;
  }

`;
