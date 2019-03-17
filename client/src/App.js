import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import history from "./history";
import Header from "./components/navigation/header";
import Landing from "./pages/Landing";
import PublicRecipes from "./pages/PublicRecipes";
import CreateRecipe from "./pages/CreateRecipe";
import SideDrawer from "./components/navigation/SideDrawer";
import Backdrop from "./components/navigation/Backdrop";
class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  // saveHeight = number => {
  //   this.setState({
  //     heightForModal: number
  //   });
  // };

  drawerToggle = () => {
    this.setState(prevState => ({
      sideDrawerOpen: !prevState.sideDrawerOpen
    }));
  };

  backDropClick = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let sideDrawer;
    let backDrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backDrop = <Backdrop click={this.backDropClick} />;
    }
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Header drawerClick={this.drawerToggle} />
            {sideDrawer}
            {backDrop}
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
