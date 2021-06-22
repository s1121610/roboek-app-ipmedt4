import React from "react";

import WelkomPagina from "./WelkomPagina/WelkomPagina"

import './App.css';
import Boekenlijst from "./boekenlijst/Boekenlijst";
import Genre from "./Bibliotheek/Genre";
import Bibliotheek from "./Bibliotheek/Bibliotheek";
import BibliotheekDesktop from './Bibliotheek/BibliotheekDesktop';
import Details from "./Bibliotheek/Details";
import Woordzoeker from "./Woordzoeker/Woordzoeker"
import Boekenkast from "./Boekenkast/Boekenkast";
import Header from "./UniverseelComponents/MobileHeader"
import DesktopNav from "./Navigatie/DesktopNavigatie"

import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

//state = groep variabelen die van waarde kan veranderen.
class App extends React.Component{
    render() {
      return (
        <Router>
          <Switch>
            <Route path="/genre">
              <DesktopNav />
              <Genre />
            </Route>
            <Route path="/bibliotheek/">
              <Header />
              <Link to="/genre">Terug</Link>
              <Bibliotheek />
            </Route>
            <Route path="/details/">
              <Link to="/genre">Terug</Link>
              <Details />
            </Route>
            <Route path="/woordzoeker">
              <Woordzoeker />
            </Route>
            <Route path="/boekenkast">
              <Link to="/">Terug</Link>
              <Boekenkast user_id='1'/>
            </Route>
            <Route path="/boekenlijst/">
              <Boekenlijst user_id='4'/>
            </Route>
            <Route path="/">
              <WelkomPagina />
            </Route>
          </Switch>
        </Router>
      )
    }
}
export default App;
