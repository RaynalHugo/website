import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import { Home } from "./components/home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />

        <Home />
      </React.Fragment>
    );
  }
}

export default App;
