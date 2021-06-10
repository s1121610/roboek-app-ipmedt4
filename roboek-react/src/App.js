import React from "react";
import './App.css';
import Bibliotheek from "./Bibliotheek";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

//state = groep variabelen die van waarde kan veranderen.
class App extends React.Component{    
    render() {
      return (
        <Router>
          <Switch>
            <Route path="/bibliotheek">
              <Bibliotheek />
              <Link to="/">Terug</Link>
            </Route>
            <Route path="/">
              <h1>Roboek</h1>
              <h2>Menu:</h2>
              <Link to="/bibliotheek">Bibliotheek</Link>
            </Route>
          </Switch>
        </Router>
      )
    }
}
export default App;