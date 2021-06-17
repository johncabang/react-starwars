import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StarwarsProvider } from "./hooks/StarwarsContext";
import GlobalStyles from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <StarwarsProvider>
      <App />
    </StarwarsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
