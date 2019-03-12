import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import Header from "./components/navigation/header";
import Landing from "./pages/Landing";
import PublicRecipes from "./pages/PublicRecipes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/path" component={PublicRecipes} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
