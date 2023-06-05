import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
     --color-green: #00bF53;
     --color-black: #000000;
     --color-white: #f5f5f5;
     --color-red: #ec1011;
    --color-blue-900: #000241;
    --color-blue-800: #0d0761;
    --color-blue-700: #0d37a1;
    --color-blue-600: #0d47a1;
    --color-blue-500: #2196f3;
    --color-blue-400: #42a5f5;
    --color-blue-300: #64b5f6;
    --color-blue-200: #90caf9;
    --color-blue-100: #bbdefb;
    --color-red-900: #400010;
    --color-red-800: #600404;
    --color-red-700: #861012;
    --color-red-600: #b01C16;
    --color-red-400: #ff2F1C;
    --color-gray-900: #000908;
    --color-gray-800: #011919;
    --color-gray-700: #112121;
    --color-gray-600: #253535;
    --color-gray-500: #344444;
    --color-gray-400: #5d6d6d;
    --color-gray-300: #90a0a0;
    --color-gray-200: #aececa;
    --color-gray-100: #d0e0e0;

    font-size: 80%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray-900);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
