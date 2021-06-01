import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  #__gatsby {
    overflow-x: hidden;
    position: relative;
  }

  button,
  input[type="submit"],
  input[type="button"],
  input[type="reset"] {
    appearance: none;
    border: none;
  }

  .input_error {

  }

  ul {

  }

  li {

  }

  input,
  textarea {

  }

  input::placeholder,
  textarea::placeholder {

  }

  fieldset {
    padding: 0;
    margin: 0;
    border: none;
  }
`;

export default GlobalStyles;
