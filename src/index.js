import React from "react";
import ReactDOM from "react-dom";
import App from './container/App';
// import App from "./container/UpcomingItems";
import { createGlobalStyle } from "styled-components";
import * as serviceWorker from "./serviceWorker";

const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy'); */

  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body{
      background-color: #1e1e1e;
      font-family: "Luckiest Guy", Helvetica, Arial;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
