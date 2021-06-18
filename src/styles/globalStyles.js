import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #ffffff;
  background-color: #282c34;
  max-width: 1440px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  font-size: 14px;
}

p {

}

h1 {
  color: #ffe300;
  font-size: 5rem;
}

h2 {
  color: #ffe300;
  font-size: 2.5rem;
}

h3 {
  font-size: 2rem;
}

h4 {
  font-size: 1.5rem;
}

`;

export default GlobalStyles;
