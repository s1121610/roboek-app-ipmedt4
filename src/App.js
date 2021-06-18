import React from "react";
import './App.css';
import Boekenlijst from "./boekenlijst/Boekenlijst";

import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

class App extends React.Component {

  render(){
    return (
      <Router>
        <Switch>
          <Route path="/boekenlijst/">
            <Boekenlijst user_id='4'/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
