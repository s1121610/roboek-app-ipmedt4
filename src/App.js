import React from "react";
<<<<<<< HEAD
=======

>>>>>>> Development
import './App.css';
import Genre from "./Bibliotheek/Genre";
import Bibliotheek from "./Bibliotheek/Bibliotheek";
import Details from "./Bibliotheek/Details";
<<<<<<< HEAD
import Woordzoeker from "./Woordzoeker/Woordzoeker"
=======
import Boekenkast from "./Boekenkast/Boekenkast";
>>>>>>> Development

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
            <Route path="/bibliotheek/">
              <Link to="/genre">Terug</Link>
              <Bibliotheek />
            </Route>
            <Route path="/details/">
              <Link to="/genre">Terug</Link>
              <Details />
            </Route>
<<<<<<< HEAD
            <Route path="/woordzoeker">
              <Woordzoeker />
=======
            <Route path="/boekenkast">
              <Link to="/">Terug</Link>
              <Boekenkast user_id='1'/>
>>>>>>> Development
            </Route>
            <Route path="/">
              <h1>Roboek</h1>
              <h2>Menu:</h2>
              <Link to="/genre">Bibliotheek</Link>
<<<<<<< HEAD
=======
              <Link to="/boekenkast">Boekenkast</Link>
>>>>>>> Development
            </Route>
          </Switch>
        </Router>
      )
    }
}
export default App;
