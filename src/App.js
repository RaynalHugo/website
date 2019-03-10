import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import { Home } from "./components/home";

class App extends Component {
  render() {
    return (
      <html>
        <head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
        </head>
        <body>
          <Home />
        </body>
      </html>
    );
  }
}

export default App;
