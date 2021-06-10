import React from "react";
import './App.css';
import Genre from "./Bibliotheek/Genre";
import Bibliotheek from "./Bibliotheek/Bibliotheek";

import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

//state = groep variabelen die van waarde kan veranderen.
class App extends React.Component{    
    render() {
      return (
        <Router>
          <Switch>
            <Route path="/genre">
              <Link to="/">Terug</Link>
              <Genre />
            </Route>
            <Route path="/bibliotheek/Avontuur">
              <Link to="/">Terug</Link>
              <Bibliotheek />
            </Route>
            <Route path="/">
              <h1>Roboek</h1>
              <h2>Menu:</h2>
              <Link to="/genre">Bibliotheek</Link>
            </Route>
          </Switch>
        </Router>
      )
    }
}
export default App;