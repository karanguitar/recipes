import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import history from "./history";
import Header from "./components/navigation/header";
import Landing from "./pages/Landing";
import PublicRecipes from "./pages/PublicRecipes";
import CreateRecipe from "./pages/CreateRecipe";

class App extends Component {
  // state = {
  //   heightForModal: 0
  // };

  // saveHeight = number => {
  //   this.setState({
  //     heightForModal: number
  //   });
  // };

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route exact path="/recipes" component={PublicRecipes} />
              <Route exact path="/" component={Landing} />
              <Route exact path="/create" component={CreateRecipe} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
