import React from "react";

import WelkomPagina from "./WelkomPagina"
import Test from "./Test";

import './App.css';

import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

class App extends React.Component {

  render(){
    return (
      <Router>
          <Switch>
            <Route path="/Test/">
              <Test />
            </Route>
            <Route path="/">
              <WelkomPagina />
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
