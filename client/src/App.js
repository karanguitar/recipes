import React, { Component } from "react";
import "./styles/main.scss";
import Header from "./components/navigation/header";
import Landing from "./pages/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;
