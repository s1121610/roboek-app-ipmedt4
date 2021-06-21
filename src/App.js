import React from "react";

import WelkomPagina from "./WelkomPagina"

import './App.css';

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {

  render(){
    return (
      <Router>
          <Switch>
            <Route path="/">
              <WelkomPagina />
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
