import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Home from "./pages/Home/Home";
import Err404 from "./pages/Err404/Err404";
import Landing from "./pages/Landing/Landing"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="text-center">
          <NavBar />
          <Jumbotron />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/home" component={Home} />
              <Route component={Err404} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
