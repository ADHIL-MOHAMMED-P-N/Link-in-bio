import React, { Component } from "react";
import Image from "./Image.js";
import Link from "./Link.js";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Image />
        <h3 className="name">Adhil Mohammed</h3>
        <Link />
      </div>
    );
  }
}

export default App;
