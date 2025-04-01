import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'modern-normalize';

const GlobalStyles = createGlobalStyle`
${modernNormalize}
*,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

body {
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}
h1,h2,h3 {
  margin: 0;
  padding: 0;
}
p, ul, ol, li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}
a {
  text-decoration: none;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill::first-line {
    transition: background-color 5000s ease-in-out 0s; 
    background-color: transparent !important;
    color: rgba(255, 255, 255, 0.6) !important;
  }
  input:-moz-autofill,
textarea:-moz-autofill {
  transition: background-color 5000s ease-in-out 0s; 
    background-color: transparent !important;
    color: rgba(255, 255, 255, 0.6) !important;
}

input:-ms-autofill,
textarea:-ms-autofill {
  transition: background-color 5000s ease-in-out 0s; 
    background-color: transparent !important;
    color: rgba(255, 255, 255, 0.6) !important;
}

`;

export default GlobalStyles;
